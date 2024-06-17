import styled from 'styled-components';
import { theme } from '../../themes';

export const Table = styled.table<TableStyledProps>`
  border: ${({ tableBorder }) => tableBorder || 'none'};
  border-collapse: collapse;
  margin: ${theme.space.x0};
  padding: ${theme.space.x0};
  width: 100%;
  table-layout: fixed;
  display: flex;
  flex-direction: column;
  gap: ${({ tableGap }) => tableGap || theme.space.x1rem};

  th,
  td {
    padding: ${({ tdThPadding }) => tdThPadding || '0.625em'};
    text-align: center;
    display: flex;
    gap: ${theme.space['x0.25rem']};
  }

  @media screen and (max-width: ${({ breakpoint }) =>
      breakpoint || theme.device.size.tabletLM}) {
    border: 0;
  }
`;

export const Caption = styled.caption<TableStyledProps>`
  font-size: ${({ captionFontSize }) => captionFontSize || '1.5em'};
  margin: ${({ captionMargin }) => captionMargin || '0.5em 0 0.75em'};

  @media screen and (max-width: ${({ breakpoint }) =>
      breakpoint || theme.device.size.tabletLM}) {
    font-size: ${({ captionFontSizeBreakpoint }) =>
      captionFontSizeBreakpoint || '1.3em'};
  }
`;

export const Thead = styled.thead<TableStyledProps>`
  background-color: ${({ theadBackgroundColor }) =>
    theadBackgroundColor || '#f8f8f8'};
  border-radius: ${theme.space['x0.25rem']};

  tr {
    height: ${theme.space.x3rem};
  }

  @media screen and (max-width: ${({ breakpoint }) =>
      breakpoint || theme.device.size.tabletLM}) {
    border: none;
    clip: rect(0 0 0 0);
    height: ${theme.space.x1px};
    margin: -1px;
    overflow: hidden;
    padding: ${theme.space.x0};
    position: absolute;
    width: ${theme.space.x1px};
  }
`;

export const Th = styled.th<TableStyledProps>`
  font-size: ${({ thFontSize }) => thFontSize || '0.85em'};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: ${theme.typography.fontWeight['600']};
  color: ${({ thColor }) => thColor || theme.colors.neutral['100']};
`;

export const Tr = styled.tr<TableStyledProps>`
  padding: 0.35em;
  line-height: ${theme.space.x1rem};
  font-size: ${({ trFontSize }) => trFontSize || theme.space.x14px};
  color: ${({ trColor }) => trColor || theme.colors.neutral['100']};
  align-items: center;
  display: grid;
  grid-template-columns: ${({ trGridColumns }) =>
    trGridColumns || `repeat(6, 1fr)`};

  @media screen and (max-width: ${({ breakpoint }) =>
      breakpoint || theme.device.size.tabletLM}) {
    box-shadow: ${theme.colors.neutral['999-opacity-15']} ${theme.space.x0}
      ${theme.space.x3px} ${theme.space.x3px} ${theme.space.x0};
    border-bottom: ${theme.space.x3px} solid ${theme.colors.neutral['10']};
    display: block;
    margin-bottom: 0.625em;
  }
`;

export const Tbody = styled.tbody<TableStyledProps>`
  tr {
    border-width: ${theme.space.x1px};
    border-style: solid;
    border-color: ${theme.colors.neutral.transparent}
      ${theme.colors.neutral.transparent} ${theme.colors.neutral['20']};
    color: ${({ trBodyColor }) => trBodyColor || theme.colors.neutral['30']};
    background-color: ${({ trBodyBackgroundColor }) =>
      trBodyBackgroundColor || theme.colors.neutral.transparent};

    &:hover {
      border-radius: ${theme.space['x0.25rem']};
      border-color: ${({ trBodyHoverBorderColor }) =>
        trBodyHoverBorderColor || theme.colors.neutral['30']};
      outline: none;

      &:first-child {
        margin-top: ${theme.space.x0};
      }
    }
  }
`;

export const Td = styled.td<TableStyledProps>`
  font-size: ${({ tdFontSize }) => tdFontSize || '0.85em'};
  letter-spacing: 0.1em;
  color: ${({ tdColor }) => tdColor || theme.colors.neutral['100']};
  background-color: ${({ tdBackgroundColor }) =>
    tdBackgroundColor || `${theme.colors.neutral.white}`};
  @media screen and (max-width: ${({ breakpoint }) =>
      breakpoint || theme.device.size.tabletLM}) {
    border-bottom: ${theme.space.x1px} solid ${theme.colors.neutral['10']};
    display: block;
    font-size: ${({ tdFontSizeBreakpoint }) => tdFontSizeBreakpoint || '0.8em'};
    text-align: right;
    justify-content: space-between;

    &::before {
      content: attr(data-label);
      float: left;
      font-weight: ${theme.typography.fontWeight.bold};
      text-transform: uppercase;
    }

    &:last-child {
      border-bottom: ${theme.space.x0};
    }

    &:hover {
      background-color: ${({ tdHoverBackgroundColorBreakpoint }) =>
        tdHoverBackgroundColorBreakpoint || theme.colors.neutral['25']};
    }
  }
`;
