/* Import */
import Table from "@/components/table/Table";
import { TableProps } from "@/customTypes/PropsTypes";
import styled from "@emotion/styled";

// ----------------------------------------------------------------------------------------------------

/* Variables */
const moneyList: TableProps = {
    headers: ["국가", "통화명", "코드"],
    contents: [
        ["노르웨이", "크로네", "NOK"],
        ["뉴질랜드", "달러", "NZD"],
        ["덴마크", "크로네", "DKK"],
        ["아랍에미리트", "디르함", "AED"],
        ["말레이시아", "링기트", "MYR"],
        ["미국", "달러", "USD"],
        ["바레인", "디나르", "BHD"],
        ["브루나이", "달러", "BND"],
        ["사우디아라비아", "리얄", "SAR"],
        ["스위스", "프랑", "CHF"],
        ["스웨덴", "크로나", "SEK"],
        ["싱가포르", "달러", "SGD"],
        ["영국", "파운드", "GBP"],
        ["유럽연합", "유로", "EUR"],
        ["인도네시아", "루피아", "IDR(100)"],
        ["일본", "엔", "JPY(100)"],
        ["중국", "위안화", "CNH"],
        ["캐나다", "달러", "CAD"],
        ["태국", "바트", "THB"],
        ["쿠웨이트", "디나르", "KWD"],
        ["홍콩", "달러", "HKD"],
        ["한국", "원", "KRW"],
        ["호주", "달러", "AUD"],
    ],
    align: "center",
};

// ----------------------------------------------------------------------------------------------------

function AccountList() {
    return (
        <AccountListContainer>
            <AccountListTitle>환율 조회</AccountListTitle>
            <AccountListDetail>기본 정보</AccountListDetail>
            <AccountListDetailContent>
                <ul>
                    <ListItem>
                        <BulletPoint>&#9679;</BulletPoint> 기능 : 통화별 환율 조회
                    </ListItem>
                    <ListItem>
                        <BulletPoint>&#9679;</BulletPoint> 메서드 : GET
                    </ListItem>
                    <ListItem>
                        <BulletPoint>&#9679;</BulletPoint> 호출정보 : v1/exchangeRate/search
                    </ListItem>
                    <ListItem>
                        <BulletPoint>&#9679;</BulletPoint> 호출결과 : JSON
                    </ListItem>
                </ul>
            </AccountListDetailContent>
            <AccountListDetail>SSAFY BANK API 입·출력 Layout</AccountListDetail>
            <TableContainer>
                <TextTitle>요청</TextTitle>
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
                <TextTitle>Body</TextTitle>
                <ListTable>
                    <thead>
                        <tr>
                            <th>이름</th>
                            <th>한글명</th>
                            <th>설명</th>
                            <th>필수</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>exchangeCode</td>
                            <td>통화코드</td>
                            <td>통화명</td>
                            <td>O</td>
                        </tr>
                        <tr>
                            <td>startDate</td>
                            <td>시작일</td>
                            <td>날짜(YYmmdd)</td>
                            <td>O</td>
                        </tr>
                        <tr>
                            <td>endDate</td>
                            <td>종료일</td>
                            <td>날짜(YYmmdd)</td>
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
                            <td>exchangeCode</td>
                            <td>통화코드</td>
                            <td>통화코드</td>
                        </tr>
                        <tr>
                            <td>exchangeDate</td>
                            <td>고시일</td>
                            <td>날짜(YY-mm-dd)</td>
                        </tr>
                        <tr>
                            <td>buyExchange</td>
                            <td>전산환(송금) 시</td>
                            <td>원화로 외화를 구매할 때 사용</td>
                        </tr>
                        <tr>
                            <td>sellExchange</td>
                            <td>전산환(출금) 시</td>
                            <td>외화를 원화로 판매할 때 사용</td>
                        </tr>
                        <tr>
                            <td>exchangeCountry</td>
                            <td>국가명 및 통화명</td>
                            <td>국가 이름과 통화명</td>
                        </tr>
                    </tbody>
                </ListTable>
            </TableContainer>
            <TableContainer>
                <TextTitle>전체 통화코드 목록</TextTitle>
                <Table
                    headers={moneyList.headers}
                    contents={moneyList.contents}
                    align={moneyList.align}
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

                <SideTextTitle>Body</SideTextTitle>
                <Code>
                    {`
    {
      "exchangeCode": "USD", 
      "startDate": "20230830",
      "endDate": "20230831"
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
          "exchangeCode": "USD", 
          "exchangeDate": "2023-08-31",
          "buyExchange": "1,309.07", 
          "sellExchange": "1,335.52", 
          "exchangeCountry": "미국 달러" 
      },
      {
          "exchangeCode": "USD",
          "exchangeDate": "2023-08-30",
          "buyExchange": "1400",
          "sellExchange": "1336",
          "exchangeCountry": "미국 달러"
      }
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
