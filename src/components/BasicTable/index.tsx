import React from 'react';
import { Table, Thead, Tbody, Th, Tr, Td, Caption } from './styles';

export const BasicTable: React.FC<BasicTableProps> = ({
  columns,
  data,
  caption,
  ...styleProps
}) => {
  return (
    <Table {...styleProps}>
      {caption && <Caption>{caption}</Caption>}
      <Thead {...styleProps}>
        <Tr {...styleProps}>
          {columns?.map((col, index) => (
            <Th {...styleProps} key={index}>
              {col?.HeaderIcon}
              {col?.Header}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody {...styleProps}>
        {data?.map((row, rowIndex) => (
          <Tr {...styleProps} key={rowIndex}>
            {columns?.map((col, colIndex) => (
              <Td {...styleProps} key={colIndex} data-label={col?.Header}>
                {col?.Cell
                  ? col?.Cell({ value: row[col?.accessor] })
                  : row[col?.accessor]}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
