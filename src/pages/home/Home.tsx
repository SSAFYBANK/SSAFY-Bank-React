/* Import */
import styled from "@emotion/styled";
import Theme from "@assets/styles/Theme";
import Header from "@components/header/Header";
import Table from "@components/table/Table";
import { TableProps } from "@/customTypes/PropsTypes";

// ----------------------------------------------------------------------------------------------------

/* Variables */
const { secondary } = Theme.colors;
const serviceList: TableProps = {
    headers: ["API명", "설명"],
    contents: [
        ["예금주 생성", "사용자별로 예금주를 최대 3개까지 생성할 수 있습니다."],
        ["예금주 전체 조회", "사용자별로 생성한 예금주 리스트를 조회할 수 있습니다."],
        [
            "예금주 삭제",
            "특정 예금주를 삭제할 수 있습니다. 삭제된 예금주는 더 이상 조회할 수 없습니다.",
        ],
        ["계좌 생성", "예금주별로 계좌를 최대 5개까지 생성할 수 있습니다."],
        ["계좌 삭제", "특정 계좌를 삭제할 수 있습니다. 삭제된 계좌는 더 이상 조회할 수 없습니다."],
        ["계좌 비밀번호 찾기", "특정 계좌의 비밀번호를 조회할 수 있습니다."],
        ["계좌 잔액 조회", "특정 계좌의 현재 잔액을 조회할 수 있습니다."],
        ["사용자별 계좌 목록 조회", "특정 사용자의 모든 계좌 목록을 조회할 수 있습니다."],
        ["예금주별 계좌 목록 조회", "특정 예금주에 연결된 모든 계좌 목록을 조회할 수 있습니다."],
        ["계좌 이체", "두 개의 계좌 간에 자금 이체를 진행할 수 있습니다."],
        ["이체 내역 조회", "특정 계좌의 이체 내역을 조회할 수 있습니다."],
        [
            "이체 내역 삭제",
            "특정 이체 내역을 삭제할 수 있습니다. 삭제된 이체 내역은 더 이상 조회할 수 없습니다.",
        ],
        ["은행 전체 목록 조회", "모든 은행의 목록을 조회할 수 있습니다."],
        ["환율 조회", "매일 오전 9시에 업데이트되는 환율 정보를 조회할 수 있습니다."],
    ],
};

// ----------------------------------------------------------------------------------------------------

/* Home Page */
function Home() {
    return (
        <HomeContainer>
            <Header />
            <TitleBox>
                <TitleWrapper>서비스 소개</TitleWrapper>
                <DescWrapper>
                    SSAFY Bank에서 제공하는 다양한 서비스와 콘텐츠를 소개합니다.
                </DescWrapper>
            </TitleBox>
            <TableWrapper>
                <Table headers={serviceList.headers} contents={serviceList.contents} />
            </TableWrapper>
        </HomeContainer>
    );
}

// ----------------------------------------------------------------------------------------------------

/* Styles */
const HomeContainer = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const TitleBox = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 25vh;
    background-color: ${secondary};
    color: white;
`;

const TitleWrapper = styled("div")`
    display: flex;
    margin-bottom: 3vh;
    font-size: 45px;
    font-weight: 800;
`;

const DescWrapper = styled("div")`
    font-size: 20px;
    font-weight: 500;
`;

const TableWrapper = styled("div")`
    margin-top: 5vh;
    margin-bottom: 5vh;
    width: 60%;
`;

// ----------------------------------------------------------------------------------------------------

/* Export */
export default Home;
