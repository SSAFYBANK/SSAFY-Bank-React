/* Import */
import styled from "@emotion/styled";
import Theme from "@assets/styles/Theme";
import useRouter from "@hooks/useRouter";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";

// ----------------------------------------------------------------------------------------------------

/* Variables */
const { primary } = Theme.colors;

// ----------------------------------------------------------------------------------------------------

/* Login Page */
function Login() {
    const { routeTo } = useRouter();

    const handleLoginClick = () => {
        routeTo("/signup");
    };

    return (
        <LoginContainer>
            <Header />
            <TitleBox>
                <TitleWrapper>로그인</TitleWrapper>
                <DescWrapper>SSAFY Bank 오픈 API를 이용하기 위해 로그인하세요.</DescWrapper>
            </TitleBox>
            <LoginBox>
                <LoginButton onClick={handleLoginClick}>카카오톡 로그인</LoginButton>
            </LoginBox>
            <Footer />
        </LoginContainer>
    );
}

// ----------------------------------------------------------------------------------------------------

/* Styles */
const LoginContainer = styled("div")`
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

const LoginBox = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 400px;
    border-radius: 20px;
    gap: 25px;
`;

const LoginButton = styled("button")``;

// ----------------------------------------------------------------------------------------------------

/* Export */
export default Login;
