/* Import */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import Theme from "@assets/styles/Theme";
import useRouter from "@hooks/useRouter";
import Header from "@components/header/Header";
import axios from "axios";
import KakaoTalkLogoBlack from "@assets/images/Kakaotalk-Logo-Black.png";
import KakaoTalkLogoWhite from "@assets/images/Kakaotalk-Logo-White.png";

// ----------------------------------------------------------------------------------------------------

/* Variables */
const { primary, secondary, kakaotalk } = Theme.colors;
const { VITE_KAKAO_CLIENT_ID, VITE_KAKAO_REDIRECT_URI } = import.meta.env;

// ----------------------------------------------------------------------------------------------------

/* Login Page */
function Login() {
    const { routeTo } = useRouter();
    const location = useLocation();

    const authenticateUser = (code: string) => {
        axios
            .post("http://52.78.102.165:8081/auth/login", { code })
            .then((response) => {
                console.log(response.data);
                const authToken = response.headers["authorization"];
                if (authToken) {
                    sessionStorage.setItem("Authorization", authToken);
                }
                routeTo("/");
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
        const KAKAO_BASE_URL = "https://kauth.kakao.com/oauth/authorize";
        window.location.href =
            KAKAO_BASE_URL +
            `?client_id=${VITE_KAKAO_CLIENT_ID}&redirect_uri=${VITE_KAKAO_REDIRECT_URI}&response_type=code`;
    };

    return (
        <LoginContainer>
            <Header />
            <TitleBox>
                <TitleWrapper>로그인</TitleWrapper>
                <DescWrapper>SSAFY Bank 오픈 API를 이용하기 위해 로그인하세요.</DescWrapper>
            </TitleBox>
            <LoginBox>
                <LoginButton onClick={handleLoginClick}>
                    <KakaoTalkLogo />
                    카카오톡 로그인
                </LoginButton>
            </LoginBox>
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

const LoginBox = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 55vh;
`;

const LoginButton = styled("button")`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1vh;
    width: 30%;
    height: 10vh;
    background-color: ${kakaotalk};
    border-radius: 10px;
    border: none;
    font-size: 30px;
    font-weight: 700;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
        background-color: ${primary};
        color: white;
        img {
            content: url(${KakaoTalkLogoWhite});
        }
    }
`;

const KakaoTalkLogo = styled("img")`
    height: 5vh;
    content: url(${KakaoTalkLogoBlack});
`;

// ----------------------------------------------------------------------------------------------------

/* Export */
export default Login;
