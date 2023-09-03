/* Import */
import styled from "@emotion/styled";
import Theme from "@assets/styles/Theme";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import Table from "@components/table/Table";
import { TableProps } from "@customTypes/TableProps";

// ----------------------------------------------------------------------------------------------------

/* Variables */
const { secondary, distinctgray } = Theme.colors;
const serviceList: TableProps = {
    headers: ["API명", "설명"],
    contents: [
        ["예금주 생성", "사용자별로 예금주를 최대 3개까지 생성 가능"],
        ["예금주 전체 조회", "사용자별로 생성한 예금주 리스트 조회"],
        ["예금주 삭제하기", "특정 예금주 삭제, 삭제된 예금주는 더 이상 조회 불가"],
        ["계좌 등록", "예금주별로 계좌를 최대 5개까지 생성 가능"],
        ["계좌 삭제", "특정 계좌 삭제"],
        ["은행 전체 목록", "모든 은행 목록 조회"],
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
            <Footer />
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
    color: ${distinctgray};
`;

const TableWrapper = styled("div")`
    width: 50%;
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

// ----------------------------------------------------------------------------------------------------

/* Export */
export default Home;
