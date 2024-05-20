import styled from 'styled-components';

export const Table = styled.table<TableStyledProps>`
  border: ${({ tableBorder }) => tableBorder || 'none'};
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  display: flex;
  flex-direction: column;
  gap: ${({ tableGap }) => tableGap || '1rem'};

  th,
  td {
    padding: ${({ tdThPadding }) => tdThPadding || '0.625em'};
    text-align: center;
    display: flex;
    gap: 0.25rem;
  }

  @media screen and (max-width: ${({ breakpoint }) => breakpoint || '650px'}) {
    border: 0;
  }
`;

export const Caption = styled.caption<TableStyledProps>`
  font-size: ${({ captionFontSize }) => captionFontSize || '1.5em'};
  margin: ${({ captionMargin }) => captionMargin || '0.5em 0 0.75em'};

  @media screen and (max-width: ${({ breakpoint }) => breakpoint || '650px'}) {
    font-size: ${({ captionFontSizeBreakpoint }) =>
      captionFontSizeBreakpoint || '1.3em'};
  }
`;

export const Thead = styled.thead<TableStyledProps>`
  background-color: ${({ theadBackgroundColor }) =>
    theadBackgroundColor || '#f8f8f8'};
  border-radius: 0.25rem;

  tr {
    height: 3rem;
  }

  @media screen and (max-width: ${({ breakpoint }) => breakpoint || '650px'}) {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;

export const Th = styled.th<TableStyledProps>`
  font-size: ${({ thFontSize }) => thFontSize || '0.85em'};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ thColor }) => thColor || '#8f9194'};
`;

export const Tr = styled.tr<TableStyledProps>`
  padding: 0.35em;
  line-height: 16px;
  font-size: ${({ trFontSize }) => trFontSize || '14px'};
  color: ${({ trColor }) => trColor || '#8f9194'};
  align-items: center;
  display: grid;
  grid-template-columns: ${({ trGridColumns }) => trGridColumns || `repeat(6, 1fr)`};

  @media screen and (max-width: ${({ breakpoint }) => breakpoint || '650px'}) {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }
`;

export const Tbody = styled.tbody<TableStyledProps>`
  tr {
    border-width: thin;
    border-style: solid;
    border-color: transparent transparent #e5e6e6;
    color: ${({ trBodyColor }) => trBodyColor || '#5c5e62'};
    background-color: ${({ trBodyBackgroundColor }) =>
      trBodyBackgroundColor || 'transparent'};

    &:hover {
      border-radius: 0.25rem;
      border-color: ${({ trBodyHoverBorderColor }) =>
        trBodyHoverBorderColor || '#a0a2a4'};
      outline: none;

      &:first-child {
        margin-top: 0px;
      }
    }
  }
`;

export const Td = styled.td<TableStyledProps>`
  font-size: ${({ tdFontSize }) => tdFontSize || '0.85em'};
  letter-spacing: 0.1em;
  color: ${({ tdColor }) => tdColor || '#8f9194'};
  background-color: ${({ tdBackgroundColor }) => tdBackgroundColor || '#fffff'};
  @media screen and (max-width: ${({ breakpoint }) => breakpoint || '650px'}) {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: ${({ tdFontSizeBreakpoint }) => tdFontSizeBreakpoint || '0.8em'};
    text-align: right;
    justify-content: space-between;

    &::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    &:last-child {
      border-bottom: 0;
    }

    &:hover {
      background-color: ${({ tdHoverBackgroundColorBreakpoint }) =>
        tdHoverBackgroundColorBreakpoint || '#e5e5e640'};
    }
  }
`;
