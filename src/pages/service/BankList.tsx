/* Import */
import styled from "@emotion/styled";
import { TableProps } from "@customTypes/PropsTypes";
import Table from "@components/table/Table";

// ----------------------------------------------------------------------------------------------------

/* Data */
const bankList: TableProps = {
    headers: ["은행명", "코드"],
    contents: [
        ["경남은행", "39"],
        ["광주은행", "34"],
        ["단위농협(지역농축협)", "12"],
        ["부산은행", "32"],
        ["산림조합", "64"],
        ["새마을금고", "45"],
        ["신한은행", "88"],
        ["신협", "48"],
        ["씨티은행", "27"],
        ["우리은행", "20"],
        ["우체국예금보험", "71"],
        ["저축은행중앙회", "50"],
        ["전북은행", "37"],
        ["제주은행", "35"],
        ["카카오뱅크", "90"],
        ["케이뱅크", "89"],
        ["토스뱅크", "92"],
        ["하나은행", "81"],
        ["홍콩상하이은행", "54"],
        ["IBK기업은행", "3"],
        ["KB국민은행", "6"],
        ["DGB대구은행", "31"],
        ["KDB산업은행", "2"],
        ["NH농협은행", "11"],
        ["SC제일은행", "23"],
        ["Sh수협은행", "7"],
    ],
    align: "center",
};

// ----------------------------------------------------------------------------------------------------

function AccountList() {
    return (
        <AccountListContainer>
            <AccountListTitle>은행 목록 조회</AccountListTitle>
            <AccountListDetail>기본 정보</AccountListDetail>
            <AccountListDetailContent>
                <ul>
                    <ListItem>
                        <BulletPoint>&#9679;</BulletPoint> 기능 : 은행 목록 조회
                    </ListItem>
                    <ListItem>
                        <BulletPoint>&#9679;</BulletPoint> 메서드 : GET
                    </ListItem>
                    <ListItem>
                        <BulletPoint>&#9679;</BulletPoint> 호출정보 :
                        http://www.ssafybank.com:8081/v1/bank/list
                    </ListItem>
                    <ListItem>
                        <BulletPoint>&#9679;</BulletPoint> 호출결과 : JSON
                    </ListItem>
                </ul>
            </AccountListDetailContent>
            <AccountListDetail>SSAFY BANK API 입·출력 Layout</AccountListDetail>
            <TableContainer>
                <TextTitle>Header</TextTitle>
                <ListTable>
                    <thead>
                        <tr>
                            <th>이름</th>
                            <th>설명</th>
                            <th>필수</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Content-type</td>
                            <td>application/json</td>
                            <td>O</td>
                        </tr>
                        <tr>
                            <td>Authorization</td>
                            <td>AccessToken</td>
                            <td>O</td>
                        </tr>
                    </tbody>
                </ListTable>
            </TableContainer>
            <TableContainer>
                <TextTitle>응답</TextTitle>
                <ListTable>
                    <thead>
                        <tr>
                            <th>이름</th>
                            <th>한글명</th>
                            <th>설명</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>bankCode</td>
                            <td>은행코드</td>
                            <td>숫자</td>
                        </tr>
                        <tr>
                            <td>bankName</td>
                            <td>은행명</td>
                            <td>은행 이름</td>
                        </tr>
                    </tbody>
                </ListTable>
            </TableContainer>
            <TableContainer>
                <TextTitle>전체 은행코드 목록</TextTitle>
                <Table
                    headers={bankList.headers}
                    contents={bankList.contents}
                    align={bankList.align}
                />
            </TableContainer>
            <CodeContainer>
                <TextTitle>Request example</TextTitle>
                <SideTextTitle>Header</SideTextTitle>
                <Code>
                    {`
    {
      "Content-Type": "application/json",
      "Authorization": "AccessToken"
    }
          `}
                </Code>
            </CodeContainer>
            <CodeContainer>
                <TextTitle>Response example</TextTitle>
                <Code>
                    {`
    [
      {
          "bankCode": 39,
          "bankName": "경남은행"
      },
      {
          "bankCode": 34,
          "bankName": "광주은행"
      }
      ...
  ]
          `}
                </Code>
            </CodeContainer>
        </AccountListContainer>
    );
}

// ----------------------------------------------------------------------------------------------------

/* Styles */
const AccountListContainer = styled("div")`
    width: 80%;
    margin: 20px auto;
    height: 1000px;
`;

const AccountListTitle = styled("h1")`
    margin-bottom: 15px;
    font-weight: 600;
    font-size: 40px;
    letter-spacing: -0.075em;
    color: #151515;
    padding-bottom: 75px;
`;

const AccountListDetail = styled("h2")`
    margin-bottom: 27px;
    font-weight: 500;
    font-size: 28px;
    letter-spacing: -0.075em;
    color: #151515;
    padding-bottom: 40px;
`;

const TextTitle = styled("h3")`
    margin-bottom: 27px;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: -0.075em;
    color: #151515;
    padding-bottom: 20px;
`;
const SideTextTitle = styled("h3")`
    margin-bottom: 27px;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: -0.075em;
    color: #151515;
    padding-bottom: 5px;
`;

const AccountListDetailContent = styled("div")`
    font-size: 16px;
    margin-top: 15px;
    height: 200px;
`;

const ListTable = styled("table")`
    width: 100%;
    border-collapse: collapse;
    padding-bottom: 265px;
    border-radius: 8px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding-bottom: 150px;

    th,
    td {
        padding: 10px;
        text-align: center;
        vertical-align: middle;
        border-radius: 0;
    }

    th {
        background-color: #d0dceb;
        height: 56px;
    }

    tr:nth-child(even) {
        background-color: #fff;
        height: 55px;
    }
`;

const TableContainer = styled("div")`
    padding-bottom: 150px;
`;
const ListItem = styled("li")`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;

const BulletPoint = styled("span")`
    font-size: 1px;
    margin-right: 10px;
`;

const Code = styled("div")`
    background-color: #2e2e2e;
    border: 1px solid #2e2e2e;
    border-radius: 8px;
    color: white;
    display: block;
    padding: 10px;
    margin: 20px 0;
    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    font-size: 14px;
    white-space: pre-wrap;
    line-height: 1.5;
    overflow-x: auto;
    padding-bottom: 20px;
`;

const CodeContainer = styled("div")`
    padding-bottom: 50px;
`;
// ----------------------------------------------------------------------------------------------------

/* Export */
export default AccountList;
