import React from 'react';
import { Table, Thead, Tbody, Th, Tr, Td, Caption } from './styles';

export const BasicTable: React.FC<BasicTableProps> = ({}) => {
  return (
    <Table>
      <Caption>Statement Summary</Caption>
      <Thead>
        <Tr>
          <Th>Account</Th>
          <Th>Due Date</Th>
          <Th>Amount</Th>
          <Th>Period</Th>
          <Th>Due Date</Th>
          <Th>Amount</Th>
          <Th>Period</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td data-label="Account">Visa - 3412</Td>
          <Td data-label="Due Date">04/01/2016</Td>
          <Td data-label="Amount">$1,190</Td>
          <Td data-label="Period">03/01/2016 - 03/31/2016</Td>
          <Td data-label="Due Date">04/01/2016</Td>
          <Td data-label="Amount">$1,190</Td>
          <Td data-label="Period">03/01/2016 - 03/31/2016</Td>
        </Tr>
        <Tr>
          <Td scope="row" data-label="Account">
            Visa - 6076
          </Td>
          <Td data-label="Due Date">03/01/2016</Td>
          <Td data-label="Amount">$2,443</Td>
          <Td data-label="Period">02/01/2016 - 02/29/2016</Td>
          <Td data-label="Due Date">03/01/2016</Td>
          <Td data-label="Amount">$2,443</Td>
          <Td data-label="Period">02/01/2016 - 02/29/2016</Td>
        </Tr>
        <Tr>
          <Td scope="row" data-label="Account">
            Corporate AMEX
          </Td>
          <Td data-label="Due Date">03/01/2016</Td>
          <Td data-label="Amount">$1,181</Td>
          <Td data-label="Period">02/01/2016 - 02/29/2016</Td>
          <Td data-label="Due Date">03/01/2016</Td>
          <Td data-label="Amount">$1,181</Td>
          <Td data-label="Period">02/01/2016 - 02/29/2016</Td>
        </Tr>
        <Tr>
          <Td scope="row" data-label="Acount">
            Visa - 3412
          </Td>
          <Td data-label="Due Date">02/01/2016</Td>
          <Td data-label="Amount">$842</Td>
          <Td data-label="Period">01/01/2016 - 01/31/2016</Td>
          <Td data-label="Due Date">02/01/2016</Td>
          <Td data-label="Amount">$842</Td>
          <Td data-label="Period">01/01/2016 - 01/31/2016</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};
