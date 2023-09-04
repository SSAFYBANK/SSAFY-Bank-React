/* Import */
import React from "react";
import styled from "@emotion/styled";
import useRouter from "@hooks/useRouter";
import Theme from "@assets/styles/Theme";
import LogoImage from "@assets/images/Service-Logo-White.png";

// ----------------------------------------------------------------------------------------------------

/* Variables */
const { tertiary, primarydark } = Theme.colors;

// ----------------------------------------------------------------------------------------------------

/* Header Component */
const Header = React.memo(() => {
    const { routeTo } = useRouter();
    const authToken = sessionStorage.getItem("Authorization");

    // Execute Logout
    const handleLogout = () => {
        sessionStorage.removeItem("Authorization");
        routeTo("/");
    };

    // MyApi Menu Click
    const handleMyApiClick = () => {
        if (authToken) {
            routeTo("/info");
        } else {
            routeTo("/login");
        }
    };

    return (
        <HeaderContainer>
            <LogoWrapper>
                <Logo src={LogoImage} alt="싸피뱅크 로고" onClick={() => routeTo("/")} />
            </LogoWrapper>
            <NavigationBar>
                {authToken ? (
                    <MenuButton onClick={handleLogout}>로그아웃</MenuButton>
                ) : (
                    <MenuButton onClick={() => routeTo("/login")}>로그인</MenuButton>
                )}
                <MenuButton onClick={() => routeTo("/")}>서비스 소개</MenuButton>
                <MenuButton onClick={() => routeTo("/service/account-holder-create")}>
                    API 소개
                </MenuButton>
                <MenuButton onClick={handleMyApiClick}>나의 API</MenuButton>
            </NavigationBar>
        </HeaderContainer>
    );
});

// ----------------------------------------------------------------------------------------------------

/* Styles */
const HeaderContainer = styled("div")`
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 10vh;
    background-color: ${primarydark};
`;

const LogoWrapper = styled("div")`
    width: 12%;
    margin-left: 2em;
    cursor: pointer;
`;

const Logo = styled("img")`
    width: 100%;
`;

const NavigationBar = styled("nav")`
    display: flex;
    justify-content: space-between;
    width: 50%;
    height: 100%;
    margin-right: 2em;
`;

const MenuButton = styled("div")`
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    width: 25%;
    height: 100%;
    min-width: 100px;
    color: white;
    font-size: 18px;
    font-weight: 500;
    transition: 0.3s;
    &:hover {
        color: ${tertiary};
        font-weight: 700;
        border-bottom: solid 3px ${tertiary};
    }
`;

// ----------------------------------------------------------------------------------------------------

/* Export */
export default Header;
