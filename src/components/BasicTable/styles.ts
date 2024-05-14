import styled from 'styled-components';

export const Table = styled.table`
  border: none;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;

  th,td {
    padding: .625em;
    text-align: center;
  }
  

  @media screen and (max-width: 600px) {
    border: 0;
`;

export const Caption = styled.caption`
  font-size: 1.5em;
  margin: 0.5em 0 0.75em;

  @media screen and (max-width: 600px) {
    font-size: 1.3em;
  }
`;

export const Thead = styled.thead`
  @media screen and (max-width: 600px) {
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

export const Th = styled.th`
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const Tr = styled.tr`
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 0.35em;

  @media screen and (max-width: 600px) {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }
`;

export const Tbody = styled.tbody`
  tr {
    &:hover {
      background-color: aqua;
    }
  }
`;

export const Td = styled.td`
  @media screen and (max-width: 600px) {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;

    &::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    &:last-child {
      border-bottom: 0;
    }
  }
`;
