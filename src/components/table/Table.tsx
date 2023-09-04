/* Import */
import styled from "@emotion/styled";
import Theme from "@assets/styles/Theme";
import { TableProps } from "@/customTypes/PropsTypes";

// ----------------------------------------------------------------------------------------------------

/* Varables */
const { faintgray, distinctgray, tableheader } = Theme.colors;

// ----------------------------------------------------------------------------------------------------

/* Table Component */
function Table({ headers, contents, align }: TableProps) {
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
                    <TableRow key={rowIndex} align={align}>
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
    border-radius: 10px;
    width: 100%;
`;

const TableHeader = styled("th")`
    padding: 10px;
    background-color: ${tableheader};
    border-bottom: 1px solid ${faintgray};
    text-align: center;
    font-weight: 700;
    font-size: 18px;
    color: white;
`;

const TableRow = styled("tr")<{ align?: string }>`
    text-align: ${(props) => props.align || "left"};
    &:hover {
        background-color: ${distinctgray};
        color: white;
    }
`;

const TableCell = styled("td")`
    padding: 10px;
    border-bottom: 1px solid ${faintgray};
    &:nth-child(1) {
        font-weight: 700;
    }
`;

// ----------------------------------------------------------------------------------------------------

/* Export */
export default Table;
