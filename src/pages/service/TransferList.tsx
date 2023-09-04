import styled from "@emotion/styled";

function AccountList() {
    return (
        <AccountListContainer>
            <AccountListTitle>이체 내역 조회</AccountListTitle>
            <AccountListDetail>기본 정보</AccountListDetail>
            <AccountListDetailContent>
                <ul>
                    <ListItem>
                        <BulletPoint>&#9679;</BulletPoint> 기능 : 이체 내역 조회
                    </ListItem>
                    <ListItem>
                        <BulletPoint>&#9679;</BulletPoint> 메서드 : POST
                    </ListItem>
                    <ListItem>
                        <BulletPoint>&#9679;</BulletPoint> 호출정보 :
                        http://www.ssafybank.com:8081/v1/transfer/getList/&#123;페이지 번호 - 시작
                        번호: 0&#125;
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
                            <td>accountNum</td>
                            <td>계좌번호</td>
                            <td>숫자 13자리</td>
                            <td>O</td>
                        </tr>
                        <tr>
                            <td>accountPassword</td>
                            <td>계좌 비밀번호</td>
                            <td>숫자 4자리</td>
                            <td>O</td>
                        </tr>
                        <tr>
                            <td>page</td>
                            <td>페이지</td>
                            <td>숫자 1자리</td>
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
                            <td>transferDate</td>
                            <td>이체 일자</td>
                            <td>날짜</td>
                        </tr>
                        <tr>
                            <td>flag</td>
                            <td>입출금 구분</td>
                            <td>텍스트(입금/출금)</td>
                        </tr>
                        <tr>
                            <td>content</td>
                            <td>출금 내용</td>
                            <td>텍스트</td>
                        </tr>
                        <tr>
                            <td>afterAmount</td>
                            <td>출금 후 잔액</td>
                            <td>숫자</td>
                        </tr>
                        <tr>
                            <td>transferUuid</td>
                            <td>이체 UUID</td>
                            <td>이체 토큰</td>
                        </tr>
                    </tbody>
                </ListTable>
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
      "accountNum" : "1234567890123" 
      "accountPassword" : "1234" 
    }

          `}
                </Code>
            </CodeContainer>
            <CodeContainer>
                <TextTitle>Response example</TextTitle>
                <Code>
                    {`
    {   
      "code": 1,
      "msg": "성공",
      "data": {
          "transfer": [
              {
                  "transferDate": "2023-09-03T15:16:01.570326", 
                  "flag": "출금",
                  "amount": 1000,
                  "content": "이순신", 
                  "afterAmount": 999000,
                  "transferUuid": "0968ca21-2549-4f5c-b407-467324609f99" 
              }
          ],
          "pageInfo": {
              "totalCnt": 1,
              "next": false
          }
      }
    }
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
