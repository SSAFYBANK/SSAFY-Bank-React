/* Import */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import Theme from "@assets/styles/Theme";
import useRouter from "@hooks/useRouter";
import Header from "@components/header/Header";
import axios from "axios";
import Footer from "@components/footer/Footer";

// ----------------------------------------------------------------------------------------------------

/* Variables */
const { primary } = Theme.colors;

// ----------------------------------------------------------------------------------------------------

/* Login Page */
function Login() {
    const { routeTo } = useRouter();
    const location = useLocation();

    const authenticateUser = (code: string) => {
        axios
            .post("http://localhost:8081/auth/login", { code })
            .then((response) => {
                console.log(response.data);
                const authToken = response.headers["authorization"];
                if (authToken) {
                    sessionStorage.setItem("Authorization", authToken);
                }
                window.location.href = "http://localhost:5173";
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    };

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const code = params.get("code");
        console.log(code);

        // If code exists, authenticate the user
        if (code) {
            authenticateUser(code);
        }
    }, [location]);

    const handleLoginClick = () => {
        window.location.href =
            "https://kauth.kakao.com/oauth/authorize?client_id=e96444e9bce9fc9c391e1db8825252eb&redirect_uri=http://localhost:5173/login&response_type=code";
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
