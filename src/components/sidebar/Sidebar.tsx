import React from "react";
import styled from "@emotion/styled";
import useRouter from "@hooks/useRouter";
import { useState } from "react";

// ----------------------------------------------------------------------------------------------------

/* Variables */

// ----------------------------------------------------------------------------------------------------

/* Header Component */
const Sidebar = React.memo(() => {
    const { routeTo } = useRouter();
    const [activeMenu, setActiveMenu] = useState("");
    const [activeBigMenu, setBigActiveMenu] = useState("");

    // 대분류 메뉴를 클릭했을 때 해당 대분류에 속한 소분류 메뉴를 열거나 닫을 수 있도록 설정
    const toggleSubMenu = (menu) => {
        if (activeBigMenu === menu) {
            setBigActiveMenu(""); // 이미 열려 있는 대분류 메뉴를 다시 클릭하면 닫음
        } else {
            setBigActiveMenu(menu); 
        }
    };
    return (
            <SidebarContainer>
                <MenuButton
                    active={activeBigMenu === "/login"}
                    onClick={() => toggleSubMenu("/login")}
                >
                예금주 관리
                </MenuButton>
                <SmallWrap show={activeBigMenu === "/login"}>
                    <SmallContent
                        active={activeMenu === "/login"}
                        onClick={() => {
                            setActiveMenu("/login");
                            routeTo("/login");
                        }}
                    >
                        예금주 생성
                    </SmallContent>
                    <SmallContent
                        active={activeMenu === "/login"}
                        onClick={() => {
                            setActiveMenu("/login");
                            routeTo("/login");
                        }}
                    >
                        예금주 전체 조회
                    </SmallContent>
                    <SmallContent
                        active={activeMenu === "/login"}
                        onClick={() => {
                            setActiveMenu("/login");
                            routeTo("/login");
                        }}
                    >
                        예금주 삭제
                    </SmallContent>
                </SmallWrap>
                <MenuButton
                    active={activeBigMenu === "/"}
                    onClick={() => toggleSubMenu("/")} 
                >
                    계좌 관리
                </MenuButton>
                <SmallWrap show={activeBigMenu === "/"}>
                    <SmallContent
                        active={activeMenu === "/"}
                        onClick={() => {
                            setActiveMenu("/");
                            routeTo("/");
                        }}
                    >
                        계좌 등록
                    </SmallContent>
                    <SmallContent
                        active={activeMenu === "/"}
                        onClick={() => {
                            setActiveMenu("/");
                            routeTo("/");
                        }}
                    >
                        계좌 삭제
                    </SmallContent>
                    <SmallContent
                        active={activeMenu === "/"}
                        onClick={() => {
                            setActiveMenu("/");
                            routeTo("/");
                        }}
                    >
                        계좌 비밀번호 찾기
                    </SmallContent>
                    <SmallContent
                        active={activeMenu === "/"}
                        onClick={() => {
                            setActiveMenu("/");
                            routeTo("/");
                        }}
                    >
                        계좌 잔액 조회
                    </SmallContent>
                    <SmallContent
                        active={activeMenu === "/"}
                        onClick={() => {
                            setActiveMenu("/");
                            routeTo("/");
                        }}
                    >
                        사용자별 계좌 목록 조회
                    </SmallContent>
                    <SmallContent
                        active={activeMenu === "/"}
                        onClick={() => {
                            setActiveMenu("/");
                            routeTo("/");
                        }}
                    >
                        예금주별 계좌 목록 조회
                    </SmallContent>
                </SmallWrap>
                <MenuButton
    active={activeMenu === "/service"}
    onClick={() => toggleSubMenu("/service")} 
>
    계좌 이체 관리
</MenuButton>
<SmallWrap show={activeBigMenu === "/service"}>
    <SmallContent
        active={activeMenu === "/service"}
        onClick={() => {
            setActiveMenu("/service");
            routeTo("/service");
        }}
    >
        계좌 이체
    </SmallContent>
    <SmallContent
        active={activeMenu === "/service"}
        onClick={() => {
            setActiveMenu("/service");
            routeTo("/service");
        }}
    >
        이체 내역 조회
    </SmallContent>
    <SmallContent
        active={activeMenu === "/service"}
        onClick={() => {
            setActiveMenu("/service");
            routeTo("/service");
        }}
    >
        이체 내역 삭제
    </SmallContent>
</SmallWrap>
<MenuButton
    active={activeMenu === "/financial"}
    onClick={() => toggleSubMenu("/financial")}
>
    금융 정보
</MenuButton>
<SmallWrap show={activeBigMenu === "/financial"}>
    <SmallContent
        active={activeMenu === "/financial"}
        onClick={() => {
            setActiveMenu("/financial");
            routeTo("/financial");
        }}
    >
        은행 전체 목록
    </SmallContent>
    <SmallContent
        active={activeMenu === "/financial"}
        onClick={() => {
            setActiveMenu("/financial");
            routeTo("/financial");
        }}
    >
        환율 조회
    </SmallContent>
</SmallWrap>

        </SidebarContainer>
    );
});

const SidebarContainer = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40vh;
    height: 100vh;
    background-color: #eeeeee;
    overflow-y: auto; // 스크롤바를 표시할 수 있도록 설정
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
    padding-bottom: 10px;
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
