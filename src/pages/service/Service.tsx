/* Import */
import styled from "@emotion/styled";
import Theme from "@assets/styles/Theme";
import Header from "@components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

// ----------------------------------------------------------------------------------------------------

/* Variables */
const { secondary } = Theme.colors;

// ----------------------------------------------------------------------------------------------------

/* Service Page */
function Service() {
    return (
        <ServiceContainer>
            <Header />
            <TitleBox>
                <TitleWrapper>API 소개</TitleWrapper>
                <DescWrapper>
                    SSAFY Bank 오픈 API를 이용해 창의적인 애플리케이션을 제작해 보세요.
                </DescWrapper>
            </TitleBox>
            <WrapSideBar>
                <Sidebar />
                <Content>
                    <Outlet />
                </Content>
            </WrapSideBar>
        </ServiceContainer>
    );
}

// ----------------------------------------------------------------------------------------------------

/* Styles */
const ServiceContainer = styled("div")`
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

const WrapSideBar = styled("div")`
    display: flex;
    width: 100%;
`;

const Content = styled("div")`
    width: 100%;
    margin-top: 60px;
    height: 100vh; // 원하는 높이로 설정
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none; // Chrome, Safari를 위한 설정
    }
`;

// ----------------------------------------------------------------------------------------------------

/* Export */
export default Service;
