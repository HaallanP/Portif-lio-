
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

// Get the Resend API key from environment variables
const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body: ContactFormData = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Todos os campos são obrigatórios" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send email to the site owner
    const emailToOwner = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "hallan.dev.app@gmail.com",
      subject: `Novo contato: ${subject}`,
      html: `
        <h1>Nova mensagem de contato</h1>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // Send confirmation email to the sender
    const emailToSender = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: email,
      subject: "Recebemos sua mensagem!",
      html: `
        <h1>Olá ${name}!</h1>
        <p>Obrigado por entrar em contato. Sua mensagem foi recebida e responderei o mais breve possível.</p>
        <p>Atenciosamente,<br>Hallan Franco</p>
      `,
    });

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Email enviado com sucesso",
        ownerEmail: emailToOwner,
        senderEmail: emailToSender
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return new Response(
      JSON.stringify({ 
        error: "Erro ao enviar email", 
        details: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
