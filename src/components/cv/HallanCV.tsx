import { useEffect } from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import jsPDF from 'jspdf';

const HallanCV = () => {
  const generatePDF = () => {
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pageWidth = 210;
    const margin = 15;
    const lineHeight = 7;
    let cursorY = margin;

    const primaryColor = '#5B4B8A';
    const secondaryColor = '#A498CA';
    const textColor = '#2E2E2E';

    pdf.setFont('helvetica');
    pdf.setTextColor(textColor);

    // Nome
    cursorY += 5;
    pdf.setFontSize(26);
    pdf.setTextColor(primaryColor);
    pdf.setFont('helvetica', 'bold');
    pdf.text('HALLAN PEREIRA FRANCO', margin, cursorY);
    cursorY += 10;

    // Contato
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(textColor);

    const contatoLines = [
      { label: 'Endereço:', text: 'Vovó Norica, 511, Biquinha – Valença – RJ' },
      { label: 'Tel:', text: '(24) 99201-8231 (WhatsApp)' },
      { label: 'Email:', text: 'hallanfranco12@gmail.com' },
      { label: '', text: 'CNH: B | Nasc.: 02/05/1998' },
      { label: 'LinkedIn:', text: 'linkedin.com/in/hallan-franco-071b7b297', link: 'https://linkedin.com/in/hallan-franco-071b7b297' },
      { label: 'GitHub:', text: 'github.com/HaallanP', link: 'https://github.com/HaallanP' },
    ];

    contatoLines.forEach(({ label, text, link }) => {
      const x = margin;
      const fullText = label ? `${label} ${text}` : text;
      if (link) {
        pdf.textWithLink(fullText, x, cursorY, { url: link });
      } else {
        pdf.text(fullText, x, cursorY);
      }
      cursorY += lineHeight;
    });

    cursorY += 3;

    // Linha separadora
    pdf.setDrawColor(primaryColor);
    pdf.setLineWidth(0.8);
    pdf.line(margin, cursorY, pageWidth - margin, cursorY);
    cursorY += 10;

    // Objetivo Profissional
    pdf.setTextColor(primaryColor);
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(16);
    pdf.text('Objetivo Profissional', margin, cursorY);
    cursorY += lineHeight;

    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(11);
    pdf.setTextColor(textColor);
    const objetivoText =
      'Atuar como Desenvolvedor Front-end ou Cientista de Dados Júnior, aplicando conhecimento técnico e analítico em projetos práticos. Busco gerar valor com soluções eficientes, interfaces intuitivas e insights baseados em dados.';
    const objetivoLines = pdf.splitTextToSize(objetivoText, pageWidth - 2 * margin);
    pdf.text(objetivoLines, margin, cursorY);
    cursorY += objetivoLines.length * lineHeight + 5;

    // Experiência Profissional
    pdf.setTextColor(primaryColor);
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(16);
    pdf.text('Experiência Profissional', margin, cursorY);
    cursorY += lineHeight;

    // Front-end
    pdf.setFontSize(11);
    pdf.setTextColor(secondaryColor);
    pdf.text('  Desenvolvedor Front-end', margin, cursorY );
    cursorY += lineHeight - 2;

    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(11);
    pdf.setTextColor(textColor);
    pdf.text('    Projetos Independentes • 2023 - Presente', margin, cursorY  );
    cursorY += lineHeight;

    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(11);
    pdf.setTextColor(textColor);
    const devFrontItens = [
      '• Criação de aplicações web com React, TypeScript e TailwindCSS.',
      '• Foco em interfaces modernas, responsivas e com boa experiência do usuário.',
      '• Componentização e reutilização de código.',
      '• Participação em todas as etapas de desenvolvimento: análise, design, codificação e documentação.',
    ];
    devFrontItens.forEach((item) => {
      pdf.text(item, margin + 5, cursorY+2);
      cursorY += lineHeight;
    });

    cursorY += 5;

    // Análise Financeira
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(secondaryColor);
    pdf.text('  Análise Financeira e Atendimento', margin, cursorY);
    cursorY += lineHeight - 2;

    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(11);
    pdf.setTextColor(textColor);
    pdf.text('    Academia Raider • Jan 2022 - Atual', margin, cursorY);
    cursorY += lineHeight;

    pdf.setFont('helvetica', 'normal');
    const analiseItens = [
      '• Análise de padrões de comportamento e vendas, com estratégias para aumento da adesão.',
      '• Desenvolvimento de relatórios financeiros e métricas de desempenho em Excel.',
      '• Atendimento ao cliente e controle de fluxo de caixa.',
      '• Criação de campanhas promocionais em períodos de baixa procura.',
    ];
    analiseItens.forEach((item) => {
      pdf.text(item, margin + 5, cursorY+ 2);
      cursorY += lineHeight;
    });

    cursorY += 12;

    // Formação Acadêmica
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(16);
    pdf.setTextColor(primaryColor);
    pdf.text('Formação Acadêmica', margin, cursorY);
    cursorY += lineHeight;

    const boxHeight = 40;
    pdf.setDrawColor(primaryColor);
    pdf.setLineWidth(0.8);
    

    pdf.setFontSize(11);
    pdf.text('Gestão Financeira', margin + 4, cursorY + 4);

    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(11);
    pdf.setTextColor(textColor);
    pdf.text('Centro de Ensino Superior de Valença — Cursando desde Nov/2023', margin + 4, cursorY + 12);

    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(11);
    pdf.setTextColor(primaryColor);
    pdf.text('Ensino Médio Completo', margin + 4, cursorY + 22);

    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(11);
    pdf.setTextColor(textColor);
    pdf.text('Escola Paulo de Freire — Concluído em 2017', margin + 4, cursorY + 30);

    cursorY += boxHeight + 10;

    // Página 2
    pdf.addPage();
    cursorY = margin + 5;

    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(16);
    pdf.setTextColor(primaryColor);
    pdf.text('Certificações e Cursos Complementares', margin , cursorY );
    cursorY += 10, lineHeight;

    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(11);
    pdf.setTextColor(textColor);
    const cursos = [
      '• CPA-20 | Certificação ANBIMA',
      '• Ciências de Dados | Alura',
      '• Python para Ciência de Dados | Alura',
      '• SQL para Análise de Dados | Alura',
      '• Desenvolvedor Full Stack (intermediário)',
      '• Office 365 (Excel, Word, PowerPoint)',
    ];
    cursos.forEach((item) => {
      pdf.text(item, margin + 5, cursorY);
      cursorY += lineHeight;
    });

    cursorY += 8;

    pdf.setTextColor(primaryColor);
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(16);
    pdf.text('Projetos Acadêmicos e Práticos', margin, cursorY);
    cursorY +=10, lineHeight;

    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(11);
    pdf.setTextColor(textColor);
    const projetos = [
      '• Análise de Dados Imobiliários (Python): gráficos e filtros com pandas e matplotlib para',
      '  identificar tendências em imóveis de Melbourne.',
      '• Machine Learning (Python): modelos supervisionados com scikit-learn, validação com',
      '  F1-score e ajuste de hiperparâmetros.',
      '• Análise Descritiva de Notas: estatísticas descritivas, tratamento de outliers e exportação',
      '  em CSV com insights.',
      '',
      'Repositórios:',
      '• Criando Hipóteses',
      '• Machine Learning',
      '• Estatísticas e Probabilidades',
    ];
    projetos.forEach((item) => {
      pdf.text(item, margin + 5, cursorY);
      cursorY += lineHeight;
    });

    cursorY += 10;

    pdf.setFont('helvetica', 'bold');
pdf.setFontSize(16);
pdf.setTextColor(primaryColor);
pdf.text('Habilidades Técnicas\n', margin, cursorY - 3);
cursorY += lineHeight;

const col1X = margin + 5;
const col2X = pageWidth / 2 + 11;

const skills = [
  ['Front-end', 'React, TypeScript, JavaScript, HTML5, CSS3,\nTailwind, CSS'],
  ['Back-end', 'Node.js (básico), APIs REST'],
  ['Bancos de Dados', 'SQL, MySQL'],
  ['UI/UX', 'Design Responsivo, Componentização'],
  ['Ferramentas', 'Git, GitHub, VS Code'],
  ['Visualização de Dados', 'Power BI, Excel Avançado'],
  ['Documentação', 'jsPDF, html2canvas, Documentação de Projetos'],
];

// Divide em duas colunas equilibradas
const leftItems = skills.slice(0, 4);
const rightItems = skills.slice(4, 7);

// Linha base
let y = cursorY;

// Maior quantidade de pares
const maxLength = Math.max(leftItems.length, rightItems.length);

// Altura de linha
const lineH = lineHeight;

// Função para desenhar um item e retornar altura ocupada
function renderItem(title, content, x, startY) {
  let yOffset = 0;

  // Título
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(primaryColor);
  pdf.setFontSize(11);
  pdf.text(title.trim(), x, startY + yOffset);
  yOffset += lineH;

  // Conteúdo
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(textColor);
  pdf.setFontSize(11);
  const lines = content.trim().split('\n');
  lines.forEach((line, i) => {
    pdf.text(line.trim(), x, startY + yOffset);
    yOffset += lineH;
  });

  return yOffset; // altura total usada
}

// Desenha os dois lados sincronizados
for (let i = 0; i < maxLength; i++) {
  let heightLeft = 0;
  let heightRight = 0;

  if (i < leftItems.length) {
    const [titleL, contentL] = leftItems[i];
    heightLeft = renderItem(titleL, contentL, col1X, y);
  }

  if (i < rightItems.length) {
    const [titleR, contentR] = rightItems[i];
    heightRight = renderItem(titleR, contentR, col2X, y);
  }

  // Atualiza Y para a próxima linha, pegando o maior entre os dois lados
  y += Math.max(heightLeft, heightRight);
}

// Opcional: adicionar algo abaixo (como o próximo bloco do currículo)
// usa o `y` como nova base


    // Rodapéess
    pdf.setDrawColor(primaryColor);
    pdf.setLineWidth(0.5);
    pdf.line(margin, 285, pageWidth - margin, 285);
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'italic');
    pdf.setTextColor(secondaryColor);
    pdf.text('Currículo atualizado em Maio de 2024', pageWidth / 2, 292, { align: 'center' });

    const pdfBlobUrl = pdf.output('bloburl');
    window.open(pdfBlobUrl, '_blank');
  };

  return (
    <div className="my-4">
      <Button
        variant="outline"
        onClick={generatePDF}
        className="flex items-center gap-2 bg-theme-purple text-white hover:bg-theme-purple/90"
      >
        <Download size={16} /> Visualizar CV
      </Button>
    </div>
  );
};

export default HallanCV;
