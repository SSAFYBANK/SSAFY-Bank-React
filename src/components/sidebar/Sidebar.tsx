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

    // 대분류 메뉴를 클릭했을 때 해당 대분류에 속한 소분류 메뉴를 열거나 닫을 수 있도록 설정
    const toggleSubMenu = (menu : any) => {
        if (activeBigMenu === menu) {
            setBigActiveMenu(""); // 이미 열려 있는 대분류 메뉴를 다시 클릭하면 닫음
        } else {
            setBigActiveMenu(menu); 
        }
    };
    return (
            <SidebarContainer>
                <MenuButton
                    active={activeBigMenu === "/accountHolder"}
                    onClick={() => toggleSubMenu("/accountHolder")}
                >
                예금주 관리
                </MenuButton>
                <SmallWrap show={activeBigMenu === "/accountHolder"}>
                    <SmallContent
                        active={activeMenu === "/AccountHolderCreate"}
                        onClick={() => {
                            setActiveMenu("/AccountHolderCreate");
                            routeTo("/service/AccountHolderCreate");
                        }}
                    >
                        예금주 생성
                    </SmallContent>
                    <SmallContent
                        active={activeMenu === "/AccountHolderList"}
                        onClick={() => {
                            setActiveMenu("/AccountHolderList");
                            routeTo("/service/AccountHolderList");
                        }}
                    >
                        예금주 전체 조회
                    </SmallContent>
                    <SmallContent
                        active={activeMenu === "/AccountHolderDelete"}
                        onClick={() => {
                            setActiveMenu("/AccountHolderDelete");
                            routeTo("/service/AccountHolderDelete");
                        }}
                    >
                        예금주 삭제
                    </SmallContent>
                </SmallWrap>
                <MenuButton
                    active={activeBigMenu === "/account"}
                    onClick={() => toggleSubMenu("/account")} 
                >
                    계좌 관리
                </MenuButton>
                <SmallWrap show={activeBigMenu === "/account"}>
                    <SmallContent
                        active={activeMenu === "/AccountCreate"}
                        onClick={() => {
                            setActiveMenu("/AccountCreate");
                            routeTo("/service/AccountCreate");
                        }}
                    >
                        계좌 생성
                    </SmallContent>
                    <SmallContent
                        active={activeMenu === "/AccountDelete"}
                        onClick={() => {
                            setActiveMenu("/AccountDelete");
                            routeTo("/service/AccountDelete");
                        }}
                    >
                        계좌 삭제
                    </SmallContent>
                    <SmallContent
                        active={activeMenu === "/GetPassword"}
                        onClick={() => {
                            setActiveMenu("/GetPassword");
                            routeTo("/service/GetPassword");
                        }}
                    >
                        계좌 비밀번호 찾기
                    </SmallContent>
                    <SmallContent
                        active={activeMenu === "/GetBalance"}
                        onClick={() => {
                            setActiveMenu("/GetBalance");
                            routeTo("/service/GetBalance");
                        }}
                    >
                        계좌 잔액 조회
                    </SmallContent>
                    <SmallContent
                        active={activeMenu === "/GetAccountList"}
                        onClick={() => {
                            setActiveMenu("/GetAccountList");
                            routeTo("/service/GetAccountList");
                        }}
                    >
                        사용자별 계좌 목록 조회
                    </SmallContent>
                    <SmallContent
                        active={activeMenu === "/GetAccountHolderList"}
                        onClick={() => {
                            setActiveMenu("/GetAccountHolderList");
                            routeTo("/service/GetAccountHolderList");
                        }}
                    >
                        예금주별 계좌 목록 조회
                    </SmallContent>
                </SmallWrap>
                <MenuButton
                active={activeBigMenu === "/transfer"}
                onClick={() => toggleSubMenu("/transfer")}>
                계좌 이체 관리
                 </MenuButton>
                <SmallWrap show={activeBigMenu === "/transfer"}>
                    <SmallContent
                        active={activeMenu === "/TransferDeposit"}
                        onClick={() => {
                            setActiveMenu("/TransferDeposit");
                            routeTo("/service/TransferDeposit");
                        }}
                    >
                        계좌 이체
                    </SmallContent>
                    <SmallContent
                        active={activeMenu === "/TransferList"}
                        onClick={() => {
                            setActiveMenu("/TransferList");
                            routeTo("/service/TransferList");
                        }}
                    >
                        이체 내역 조회
                    </SmallContent>
                    <SmallContent
                        active={activeMenu === "/TransferDelete"}
                        onClick={() => {
                            setActiveMenu("/TransferDelete");
                            routeTo("/service/TransferDelete");
                        }}
                    >
                        이체 내역 삭제
                    </SmallContent>
                </SmallWrap>
                <MenuButton
                    active={activeBigMenu === "/financial"}
                    onClick={() => toggleSubMenu("/financial")}
                >
                    금융 정보
                </MenuButton>
                <SmallWrap show={activeBigMenu === "/financial"}>
                    <SmallContent
                        active={activeMenu === "/BankList"}
                        onClick={() => {
                            setActiveMenu("/BankList");
                            routeTo("/service/BankList");
                        }}
                    >
                        은행 전체 목록
                    </SmallContent>
                    <SmallContent
                        active={activeMenu === "/ExchangeRate"}
                        onClick={() => {
                            setActiveMenu("/ExchangeRate");
                            routeTo("/service/ExchangeRate");
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
    width: 25vh;
    background-color: #eeeeee;
    overflow-y: auto; // 스크롤바를 표시할 수 있도록 설정
    // margin-left: 150px;
    
`;

const MenuButton = styled("div")<{ active: boolean }>`
    display: flex;
    margin-top : 50px;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    width: 100%;
    height: 7%;
    min-width: 100px;
    color: #777777;
    font-size: 17px;
    font-weight: 500;
    color: ${(props) => (props.active ? "black" : "#777777")};
    font-weight: ${(props) => (props.active ? "700" : "600")};
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

    font-size: 15px;

    color: ${(props) => (props.active ? "black" : "#777777")};
    font-weight: ${(props) => (props.active ? "700" : "600")};
    &:hover {
        color: black;
        font-weight: 700;
    }
`;
export default Sidebar;
