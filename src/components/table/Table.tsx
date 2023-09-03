/* Import */
import styled from "@emotion/styled";
import Theme from "@assets/styles/Theme";
import { TableProps } from "@customTypes/TableProps";

// ----------------------------------------------------------------------------------------------------

/* Varables */
const { primary, whitegray, faintgray } = Theme.colors;

// ----------------------------------------------------------------------------------------------------

/* Table Component */
function Table({ headers, contents }: TableProps) {
    return (
        <TableWrapper>
            <thead>
                <tr>
                    {headers.map((header, index) => (
                        <TableHeader key={index}>{header}</TableHeader>
                    ))}
                </tr>
            </thead>
            <tbody>
                {contents.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                            <TableCell key={cellIndex}>{cell}</TableCell>
                        ))}
                    </TableRow>
                ))}
            </tbody>
        </TableWrapper>
    );
}

// ----------------------------------------------------------------------------------------------------

/* Styles */
const TableWrapper = styled("table")`
    border-collapse: collapse;
    width: 100%;
`;

const TableHeader = styled("th")`
    padding: 10px;
    background-color: ${primary};
    border: 1px solid ${faintgray};
    text-align: center;
    font-weight: 700;
    font-size: 18px;
    color: white;
`;

const TableRow = styled("tr")`
    &:nth-of-type(odd) {
        background-color: ${whitegray};
    }
`;

const TableCell = styled("td")`
    padding: 10px;
    border: 1px solid ${faintgray};
    text-align: left;
    &:nth-child(1) {
        font-weight: 700;
    }
`;

// ----------------------------------------------------------------------------------------------------

/* Export */
export default Table;
