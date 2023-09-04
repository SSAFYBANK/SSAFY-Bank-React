/* Import */
import styled from "@emotion/styled";
import Theme from "@assets/styles/Theme";
import { TableProps } from "@/customTypes/PropsTypes";

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
    background-color: #d0dceb;
    border-bottom: 1px solid ${faintgray}; // 바텀에만 보더 추가
    text-align: center;
    font-weight: 700;
    font-size: 18px;
    color: white;
`;

const TableRow = styled("tr")`
text-align:center;
`;

const TableCell = styled("td")`
    padding: 10px;
    border-bottom: 1px solid ${faintgray};  // 바텀에만 보더 추가
    text-align:center;
    &:nth-child(1) {
        font-weight: 700;
        
    }
`;


// ----------------------------------------------------------------------------------------------------

/* Export */
export default Table;
