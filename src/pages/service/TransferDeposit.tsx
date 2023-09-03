import styled from "@emotion/styled";

function AccountList() {
  return (
    <AccountListContainer>
      <AccountListTitle>계좌 이체</AccountListTitle>
      <AccountListDetail>기본 정보</AccountListDetail>
      <AccountListDetailContent>
        <ul>
          <ListItem>
            <BulletPoint>&#9679;</BulletPoint> 기능 : 계좌 이체
          </ListItem>
          <ListItem>
            <BulletPoint>&#9679;</BulletPoint> 메서드 : POST
          </ListItem>
          <ListItem>
            <BulletPoint>&#9679;</BulletPoint> 호출경로 : v1/transfer/deposit
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
            <td>senderAccountNum</td>
            <td>출금계좌번호</td>
            <td>숫자 13자리</td>
            <td>O</td>
          </tr>
          <tr>
            <td>senderAccountPassword</td>
            <td>출금계좌 비밀번호</td>
            <td>숫자 4자리</td>
            <td>O</td>
          </tr>
          <tr>
            <td>receiverBankCode</td>
            <td>입금계좌 은행</td>
            <td>숫자 2자리</td>
            <td>O</td>
          </tr>
          <tr>
            <td>receiverAccountNum</td>
            <td>입금계좌번호</td>
            <td>숫자 13자리</td>
            <td>O</td>
          </tr>
          <tr>
            <td>depositAmount</td>
            <td>이체 금액</td>
            <td>숫자</td>
            <td>O</td>
          </tr>
          <tr>
            <td>senderContent</td>
            <td>통장 출금 인자 내역</td>
            <td>텍스트</td>
            <td>O</td>
          </tr>
          <tr>
            <td>receiverContent</td>
            <td>통장 입금 인자 내역</td>
            <td>텍스트</td>
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
      "senderAccountNum" : "9811981293289",
      "senderAccountPassword" : "1234",
      "receiverBankCode" : "99",
      "receiverAccountNum" : "7411417385990",
      "depositAmount" : "5000",
      "senderContent" : "홍길동에게 입금",
      "receiverContent" : "이순신이 보낸 점심비용"
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
          "receiverName": "홍길동",
          "depositAmount": 5000
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