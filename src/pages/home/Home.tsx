/* Import */
import styled from "@emotion/styled";
import Theme from "@assets/styles/Theme";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";

// ----------------------------------------------------------------------------------------------------

/* Variables */
const { secondary, distinctgray } = Theme.colors;

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
            <div>홈페이지입니다.</div>
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
