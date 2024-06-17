/** Propriedades do componente de Tabela. */
interface BasicTableProps extends TableStyledProps {
  /** Definições das colunas da tabela. */
  columns: Column[];

  /** Dados a serem exibidos na tabela. */
  data: any[];

  /** Legenda da tabela. */
  caption?: string;
}

/** Propriedades de estilização da Tabela. */
interface TableStyledProps {
  /** Ponto de interrupção para estilos responsivos da tabela. */
  breakpoint?: string;

  /** Espaçamento entre elementos da tabela. */
  tableGap?: string;

  /** Borda da tabela. */
  tableBorder?: string;

  /** Tamanho da fonte da legenda. */
  captionFontSize?: string;

  /** Tamanho da fonte da legenda após breakpoint. */
  captionFontSizeBreakpoint?: string;

  /** Margem da legenda. */
  captionMargin?: string;

  /** Cor de fundo do cabeçalho da tabela. */
  theadBackgroundColor?: string;

  /** Espaçamento interno das células (td e th). */
  tdThPadding?: string;

  /** Tamanho da fonte das células do cabeçalho (th). */
  thFontSize?: string;

  /** Cor do texto das células do cabeçalho (th). */
  thColor?: string;

  /** Definição do tamanho das colunas da linha (tr). */
  trGridColumns?: string;

  /** Cor do texto das linhas (tr). */
  trColor?: string;

  /** Tamanho da fonte das linhas (tr). */
  trFontSize?: string;

  /** Cor do texto das linhas do corpo (tr). */
  trBodyColor?: string;

  /** Cor de fundo das linhas do corpo (tr). */
  trBodyBackgroundColor?: string;

  /** Cor de fundo das linhas do corpo (tr) ao passar o mouse sobre elas. */
  trBodyHoverBackgroundColor?: string;

  /** Cor da borda das linhas do corpo (tr) ao passar o mouse sobre elas. */
  trBodyHoverBorderColor?: string;

  /** Tamanho da fonte das células (td). */
  tdFontSize?: string;

  /** Cor do texto das células (td). */
  tdColor?: string;

  /** Cor de fundo das células (td). */
  tdBackgroundColor?: string;

  /** Tamanho da fonte das células (td) após breakpoint. */
  tdFontSizeBreakpoint?: string;

  /** Cor de fundo das células (td) após breakpoint. */
  tdHoverBackgroundColorBreakpoint?: string;
}

/** Tipos de propriedades de renderizadas na tabela. */
type Column = {
  /** Ícone do cabeçalho da coluna. */
  HeaderIcon?: React.ReactNode;

  /** Texto do cabeçalho da coluna. */
  Header: string;

  /** Propriedade do objeto de dados para acessar o valor da célula. */
  accessor: string;

  /** Função para renderizar o conteúdo da célula. */
  Cell?: ({ value }: { value: any }) => React.ReactNode;
};
