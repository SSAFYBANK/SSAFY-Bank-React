import React from "react";
import styled from "@emotion/styled";
import useRouter from "@hooks/useRouter";
import { useState } from "react";
import Theme from "@assets/styles/Theme";
import LogoImage from "@assets/images/Service-Logo-White.png";

// ----------------------------------------------------------------------------------------------------

/* Variables */

// ----------------------------------------------------------------------------------------------------

/* Header Component */
const Sidebar = React.memo(() => {
    const { routeTo } = useRouter();
    const [activeMenu, setActiveMenu] = useState("");
    const [activeBigMenu, setBigActiveMenu] = useState("");

    return (
        <SidebarContainer>
            <MenuButton
                active={activeBigMenu === "/login"}
                onClick={() => {
                    setBigActiveMenu("/login");
                    //   routeTo("/login");
                }}
            >
                로그인
            </MenuButton>
            <SmallWrap show={activeBigMenu === "/login"}>
                <SmallContent
                    active={activeMenu === "/login"}
                    onClick={() => {
                        setActiveMenu("/login");
                        routeTo("/login");
                    }}
                >
                    dd
                </SmallContent>
                <SmallContent
                    active={activeMenu === "/login"}
                    onClick={() => {
                        setActiveMenu("/login");
                        routeTo("/login");
                    }}
                >
                    dd
                </SmallContent>
                <SmallContent
                    active={activeMenu === "/login"}
                    onClick={() => {
                        setActiveMenu("/login");
                        routeTo("/login");
                    }}
                >
                    dd
                </SmallContent>
                <SmallContent
                    active={activeMenu === "/login"}
                    onClick={() => {
                        setActiveMenu("/login");
                        routeTo("/login");
                    }}
                >
                    dd
                </SmallContent>
            </SmallWrap>
            <MenuButton
                active={activeMenu === "/"}
                onClick={() => {
                    setActiveMenu("/");
                    routeTo("/");
                }}
            >
                서비스 소개
            </MenuButton>
            <MenuButton
                active={activeMenu === "/service"}
                onClick={() => {
                    setActiveMenu("/service");
                    routeTo("/service");
                }}
            >
                API 소개
            </MenuButton>
            <MenuButton
                active={activeMenu === "/info"}
                onClick={() => {
                    setActiveMenu("/info");
                    routeTo("/info");
                }}
            >
                나의 API
            </MenuButton>
        </SidebarContainer>
    );
});

const SidebarContainer = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35vh;
    height: 100vh;
    background-color: #eeeeee;
    // margin-left: 150px;
`;

const MenuButton = styled("div")<{ active: boolean }>`
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    width: 25%;
    height: 7%;
    min-width: 100px;
    color: #777777;
    font-size: 17px;
    font-weight: 500;
    color: ${(props) => (props.active ? "black" : "#777777")};
    font-weight: ${(props) => (props.active ? "700" : "500")};
    &:hover {
        color: black;
        font-weight: 700;
    }
`;
const SmallWrap = styled("div")<{ show: boolean }>`
    visibility: ${(props) => (props.show ? "visible" : "hidden")};
    max-height: ${(props) => (props.show ? "500px" : "0")};
    opacity: ${(props) => (props.show ? "1" : "0")};
    overflow: hidden;
    transition:
        max-height 0.5s ease-in-out,
        opacity 0.5s ease-in-out,
        visibility 0.5s ease-in-out;
    flex-direction: column;
    align-items: center;
`;
const SmallContent = styled("div")<{ active: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 25%;
    min-width: 100px;
    color: #777777;
    font-size: 15px;
    font-weight: 500;
    &:hover {
        color: black;
        font-weight: 700;
    }
`;
export default Sidebar;
