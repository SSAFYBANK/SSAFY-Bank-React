/* Import */
import styled from "@emotion/styled";
import Theme from "@assets/styles/Theme";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import InfoKey from "@components/info/InfoKey";

// ----------------------------------------------------------------------------------------------------

/* Variables */
const { primary } = Theme.colors;

// ----------------------------------------------------------------------------------------------------

/* Info Page */
function Info() {
    return (
        <InfoContainer>
            <Header />
            <TitleBox>
                <TitleWrapper>나의 API</TitleWrapper>
                <DescWrapper>내가 이용 중인 API를 확인하고 설정을 관리할 수 있습니다.</DescWrapper>
            </TitleBox>
            <InfoKey />
            <Footer />
        </InfoContainer>
    );
}

// ----------------------------------------------------------------------------------------------------

/* Styles */
const InfoContainer = styled("div")`
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
    background-color: ${primary};
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

// ----------------------------------------------------------------------------------------------------

/* Export */
export default Info;
