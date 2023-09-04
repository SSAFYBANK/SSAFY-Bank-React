/* Import */
import React from "react";
import styled from "@emotion/styled";
import useRouter from "@hooks/useRouter";
import { useState } from "react";
import Theme from "@assets/styles/Theme";

// ----------------------------------------------------------------------------------------------------

/* Variables */
const { primarydeeper, secondary, faintgray, distinctgray } = Theme.colors;

// ----------------------------------------------------------------------------------------------------

/* SideBar Component */
const Sidebar = React.memo(() => {
    const { routeTo } = useRouter();
    const [activeMenu, setActiveMenu] = useState<String>("");
    const [activeBigMenu, setBigActiveMenu] = useState<String>("");

    // 대분류 메뉴를 클릭했을 때 해당 대분류에 속한 소분류 메뉴를 열거나 닫을 수 있도록 설정
    const toggleSubMenu = (menu: any) => {
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
                        routeTo("/service/account-holder-create");
                    }}
                >
                    예금주 생성
                </SmallContent>
                <SmallContent
                    active={activeMenu === "/AccountHolderList"}
                    onClick={() => {
                        setActiveMenu("/AccountHolderList");
                        routeTo("/service/account-holder-list");
                    }}
                >
                    예금주 전체 조회
                </SmallContent>
                <SmallContent
                    active={activeMenu === "/AccountHolderDelete"}
                    onClick={() => {
                        setActiveMenu("/AccountHolderDelete");
                        routeTo("/service/account-holder-delete");
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
                        routeTo("/service/account-create");
                    }}
                >
                    계좌 생성
                </SmallContent>
                <SmallContent
                    active={activeMenu === "/AccountDelete"}
                    onClick={() => {
                        setActiveMenu("/AccountDelete");
                        routeTo("/service/account-delete");
                    }}
                >
                    계좌 삭제
                </SmallContent>
                <SmallContent
                    active={activeMenu === "/GetPassword"}
                    onClick={() => {
                        setActiveMenu("/GetPassword");
                        routeTo("/service/get-password");
                    }}
                >
                    계좌 비밀번호 찾기
                </SmallContent>
                <SmallContent
                    active={activeMenu === "/GetBalance"}
                    onClick={() => {
                        setActiveMenu("/GetBalance");
                        routeTo("/service/get-balance");
                    }}
                >
                    계좌 잔액 조회
                </SmallContent>
                <SmallContent
                    active={activeMenu === "/GetAccountList"}
                    onClick={() => {
                        setActiveMenu("/GetAccountList");
                        routeTo("/service/get-account-list");
                    }}
                >
                    사용자별 계좌 목록 조회
                </SmallContent>
                <SmallContent
                    active={activeMenu === "/GetAccountHolderList"}
                    onClick={() => {
                        setActiveMenu("/GetAccountHolderList");
                        routeTo("/service/get-account-holder-list");
                    }}
                >
                    예금주별 계좌 목록 조회
                </SmallContent>
            </SmallWrap>
            <MenuButton
                active={activeBigMenu === "/transfer"}
                onClick={() => toggleSubMenu("/transfer")}
            >
                계좌 이체 관리
            </MenuButton>
            <SmallWrap show={activeBigMenu === "/transfer"}>
                <SmallContent
                    active={activeMenu === "/TransferDeposit"}
                    onClick={() => {
                        setActiveMenu("/TransferDeposit");
                        routeTo("/service/transfer-deposit");
                    }}
                >
                    계좌 이체
                </SmallContent>
                <SmallContent
                    active={activeMenu === "/TransferList"}
                    onClick={() => {
                        setActiveMenu("/TransferList");
                        routeTo("/service/transfer-list");
                    }}
                >
                    이체 내역 조회
                </SmallContent>
                <SmallContent
                    active={activeMenu === "/TransferDelete"}
                    onClick={() => {
                        setActiveMenu("/TransferDelete");
                        routeTo("/service/transfer-delete");
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
                        routeTo("/service/bank-list");
                    }}
                >
                    은행 전체 목록 조회
                </SmallContent>
                <SmallContent
                    active={activeMenu === "/ExchangeRate"}
                    onClick={() => {
                        setActiveMenu("/ExchangeRate");
                        routeTo("/service/exchange-rate");
                    }}
                >
                    환율 조회
                </SmallContent>
            </SmallWrap>
        </SidebarContainer>
    );
});

// ----------------------------------------------------------------------------------------------------

const SidebarContainer = styled("div")`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25vh;
    border-right: 1px solid ${faintgray};
`;

const MenuButton = styled("div")<{ active: boolean }>`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    width: 100%;
    height: 5vh;
    min-width: 100px;
    font-size: 18px;
    color: ${(props) => (props.active ? secondary : "black")};
    font-weight: ${(props) => (props.active ? "700" : "500")};
    &:hover {
        color: ${secondary};
        font-weight: 700;
    }
`;

const SmallWrap = styled("div")<{ show: boolean }>`
    visibility: ${(props) => (props.show ? "visible" : "hidden")};
    max-height: ${(props) => (props.show ? "500px" : "0")};
    opacity: ${(props) => (props.show ? "1" : "0")};
    overflow: hidden;
    transition:
        max-height 0.3s ease-in-out,
        opacity 0.3s ease-in-out,
        visibility 0.3s ease-in-out;
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
    font-size: 14px;
    color: ${(props) => (props.active ? primarydeeper : distinctgray)};
    font-weight: ${(props) => (props.active ? "700" : "500")};
    &:hover {
        color: ${primarydeeper};
        font-weight: 700;
    }
`;

// ----------------------------------------------------------------------------------------------------

/* Export */
export default Sidebar;
