import styled from "@emotion/styled";

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
            <td>exchangeDate</td>
            <td>검색일</td>
            <td>날짜(YY-mm-dd)</td>
            <td>O</td>
          </tr>
          <tr>
            <td>buyExchange</td>
            <td>전산환(송금) 보낼때</td>
            <td>숫자</td>
            <td>O</td>
          </tr>
          <tr>
            <td>sellExchange</td>
            <td>종료일</td>
            <td>숫자</td>
            <td>O</td>
          </tr>
          <tr>
            <td>exchangeCountry</td>
            <td>국가명</td>
            <td>국가이름</td>
            <td>O</td>
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
background-color:#2E2E2E;
  border: 1px solid #2E2E2E;
  border-radius: 8px;
  color: white;
  display: block;
  padding: 10px;
  margin: 20px 0;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 14px;
  white-space: pre-wrap;
  line-height: 1.5;
  overflow-x: auto;
  padding-bottom: 20px;
`

const CodeContainer= styled("div")`
    padding-bottom: 50px;
`
// ----------------------------------------------------------------------------------------------------

/* Export */
export default AccountList;
