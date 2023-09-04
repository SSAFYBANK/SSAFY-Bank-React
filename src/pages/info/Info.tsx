/* Import */
import styled from "@emotion/styled";
import Theme from "@assets/styles/Theme";
import Header from "@components/header/Header";
import InfoKey from "@components/info/InfoKey";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "@components/modal/Modal";
import Modal2 from "@components/modal/Modal2";
import Modal3 from "@components/modal/Modal3";
import Modal4 from "@components/modal/Modal4";

// ----------------------------------------------------------------------------------------------------

/* Variables */
const { primary, primarydark, secondary } = Theme.colors;

// ----------------------------------------------------------------------------------------------------
interface AccountDetail {
    accountHolderName: string;
    bankName: string;
    accountNum: string;
    balance: number;
}

interface AccountDetailsMap {
    [key: string]: AccountDetail[];
}
/* Info Page */
function Info() {
    //예금주 전체 가져오기
    const [data, setData] = useState<
        Array<{ accountHolderName: string; accountHolderUuid: string }>
    >([]);
    async function fetchData() {
        try {
            const token = sessionStorage.getItem("Authorization");
            const response = await axios.get(
                "http://52.78.102.165:8081/v1/account-holder/getList",
                {
                    headers: {
                        Authorization: token, // 헤더에 토큰 정보 추가
                    },
                },
            );

            if (response.data.code === 1) {
                setData(response.data.data);
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                if (error.response?.data.code === -1) {
                    alert(error.response.data.msg);
                }
            }
            console.error("An error occurred:", error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    // 예금주별 계좌정보 가져오기
    const [accountDetails, setAccountDetails] = useState<AccountDetailsMap>({});
    async function fetchAccountDetails(uuid: string) {
        try {
            const token = sessionStorage.getItem("Authorization");
            const response = await axios.get(
                `http://52.78.102.165:8081/v1/account/getHolderAccountList/${uuid}/0`,
                {
                    headers: {
                        Authorization: token,
                    },
                },
            );

            if (response.data.code === 1) {
                setAccountDetails((prevDetails) => ({
                    ...prevDetails,
                    [uuid]: response.data.data.accounts,
                }));
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                if (error.response?.data.code === -1) {
                    alert(error.response.data.msg);
                }
            }
            console.error("An error occurred:", error);
        }
    }
    //예금주별 계좌보기 드롭다운
    const [dropdownStatus, setDropdownStatus] = useState<Record<string, boolean>>({});
    const toggleDropdown = (uuid: string) => {
        setDropdownStatus((prevStatus) => ({
            ...prevStatus,
            [uuid]: !prevStatus[uuid],
        }));
        if (!dropdownStatus[uuid]) {
            fetchAccountDetails(uuid);
        }
    };
    //예금주 추가하기
    const [accountHolderName, setAccountHolderName] = useState("");

    const handleAddAccountHolder = async () => {
        try {
            const response = await axios.post(
                "http://52.78.102.165:8081/v1/account-holder/create", // 실제 API 주소로 변경
                {
                    accountHolderName: accountHolderName, // 실제로는 사용자 입력 값을 넣어야 함
                },
                {
                    headers: {
                        Authorization: sessionStorage.getItem("Authorization"), // 헤더 정보
                    },
                },
            );

            if (response.data.code === 1) {
                console.log("성공");
                fetchData();
                // 성공 시 처리 로직
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                if (error.response?.data.code === -1) {
                    alert(error.response.data.msg);
                }
            }
            console.error("An error occurred:", error);
        }
    };
    //모달
    const [showModal, setShowModal] = useState(false);
    const [modalUuid, setModalUuid] = useState<string | null>(null);
    const [modalHolderName, setmodalHolderName] = useState<string | null>(null);

    const handleShowDeleteModal = (uuid: string, name: string) => {
        setModalUuid(uuid);
        setmodalHolderName(name);
        setShowModal(true);
    };

    //예금주 삭제하기
    const handleDeleteAccountHolder = async () => {
        try {
            console.log(modalHolderName);
            console.log(modalUuid);
            if (modalUuid) {
                const response = await axios.post(
                    "http://52.78.102.165:8081/v1/account-holder/delete",
                    {
                        accountHolderName: modalHolderName,
                        accountHolderToken: modalUuid,
                    },
                    {
                        headers: {
                            Authorization: sessionStorage.getItem("Authorization"),
                        },
                    },
                );

                if (response.data.code === 1) {
                    console.log("삭제 성공");
                    // 성공 시 처리 로직 (예: 데이터 리프레쉬)
                    fetchData();
                    setShowModal(false);
                }
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                if (error.response?.data.code === -1) {
                    alert(error.response.data.msg);
                }
            }
            console.error("An error occurred:", error);
        }
    };
    //계좌 생성하기
    const [showModal2, setShowModal2] = useState(false);
    const handleShowCreateModal = (uuid: string) => {
        setModalUuid(uuid);
        setShowModal2(true);
    };
    const [accountPassword, setAccountPassword] = useState("");
    const [bankCode, setBankCode] = useState("");

    const handleCreateAccountHolder = async () => {
        try {
            const token = sessionStorage.getItem("Authorization");
            const response = await axios.post(
                "http://52.78.102.165:8081/v1/account/create",
                {
                    bankCode: bankCode,
                    accountHolderUuid: modalUuid,
                    accountPassword: accountPassword,
                },
                {
                    headers: {
                        Authorization: token,
                    },
                },
            );

            if (response.data.code === 1) {
                console.log("계좌 생성 성공");
                // 성공 시 처리 로직 (예: 데이터 리프레쉬)
                if (modalUuid) {
                    fetchAccountDetails(modalUuid);
                } else {
                    console.error("modalUuid is null or undefined");
                }
                setShowModal2(false); // Modal2를 닫음
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                if (error.response?.data.code === -1) {
                    alert(error.response.data.msg);
                }
            }
            console.error("An error occurred:", error);
        }
    };
    //계좌번호 모달들
    const [showTransferModal, setShowTransferModal] = useState(false);
    const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);
    const [showTransactionHistoryModal, setShowTransactionHistoryModal] = useState(false);
    const [ModalAccount, setModalAccount] = useState<string | null>(null);

    // 계좌 이체하기 모달 표시
    const handleShowTransferModal = (accountNum: string, accountHolderUuid: string) => {
        setModalAccount(accountNum);
        setModalUuid(accountHolderUuid);
        setShowTransferModal(true);
    };

    // 계좌 삭제하기 모달 표시
    const handleShowDeleteAccountModal = (accountNum: string, accountHolderUuid: string) => {
        setModalAccount(accountNum);
        setModalUuid(accountHolderUuid);
        setShowDeleteAccountModal(true);
    };

    // 거래 내역 보기 모달 표시
    const handleShowTransactionHistoryModal = (accountNum: string) => {
        setModalAccount(accountNum);
        setShowTransactionHistoryModal(true);
    };

    // 계좌삭제하기
    const handleDeleteAccount = async () => {
        try {
            const token = sessionStorage.getItem("Authorization");
            const response = await axios.post(
                "http://52.78.102.165:8081/v1/account/delete",
                {
                    bankCode: bankCode,
                    accountHolderUuid: modalUuid,
                    accountPassword: accountPassword,
                    accountNum: ModalAccount,
                },
                {
                    headers: {
                        Authorization: token,
                    },
                },
            );

            if (response.data.code === 1) {
                console.log("계좌 삭제 성공");
                if (modalUuid) {
                    fetchAccountDetails(modalUuid);
                } else {
                    console.error("modalUuid is null or undefined");
                } // 데이터 리프레쉬
                setShowDeleteAccountModal(false); // 모달 닫기
            } else {
                console.log("계좌 삭제 실패");
                // 실패 시 처리 로직 (예: 알림 메시지)
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                if (error.response?.data.code === -1) {
                    alert(error.response.data.msg);
                }
            }
            console.error("An error occurred:", error);
        }
    };
    //계좌이체하기
    const [accountNum, setAccountNum] = useState("");
    const [amount, setAmount] = useState("");
    const [senderContent, setSenderContent] = useState("");
    const [receiverContent, setReceiverContent] = useState("");
    const handleTransferAccount = async () => {
        try {
            const token = sessionStorage.getItem("Authorization");
            const response = await axios.post(
                "http://52.78.102.165:8081/v1/transfer/deposit",
                {
                    senderAccountNum: ModalAccount,
                    senderAccountPassword: accountPassword,
                    receiverBankCode: bankCode,
                    receiverAccountNum: accountNum,
                    depositAmount: amount,
                    senderContent: senderContent,
                    receiverContent: receiverContent,
                },
                {
                    headers: {
                        Authorization: token,
                    },
                },
            );

            if (response.data.code === 1) {
                console.log("계좌 이체 성공");
                if (modalUuid) {
                    fetchAccountDetails(modalUuid);
                } else {
                    console.error("modalUuid is null or undefined");
                }
                setShowTransferModal(false); // 모달 닫기
            } else {
                console.log("계좌 이체 실패");
                // 실패 시 처리 로직 (예: 알림 메시지)
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                if (error.response?.data.code === -1) {
                    alert(error.response.data.msg);
                }
            }
            console.error("An error occurred:", error);
        }
    };
    //거래내역 가져오기
    const [page, setPage] = useState(0);
    const [pageInfo, setPageInfo] = useState({ totalCnt: 0, next: false });
    // input 값을 페이지 상태 변수에 저장
    const handlePageChange = (e: any) => {
        setPage(e.target.value);
    };
    const [transferHistory, setTransferHistory] = useState<
        Array<{
            transferDate: string;
            flag: string;
            amount: number;
            content: string;
            afterAmount: number;
            transferUuid: string;
        }>
    >([]);

    async function fetchTrnsferHistory() {
        try {
            const token = sessionStorage.getItem("Authorization");
            const response = await axios.post(
                `http://52.78.102.165:8081/v1/transfer/getList/${page}`,
                {
                    accountNum: ModalAccount,
                    accountPassword: accountPassword,
                },
                {
                    headers: {
                        Authorization: token,
                    },
                },
            );

            if (response.data.code === 1) {
                setTransferHistory(response.data.data.transfer);
                setPageInfo(response.data.data.pageInfo);
            }
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                if (error.response?.data.code === -1) {
                    alert(error.response.data.msg);
                }
            }
            console.error("An error occurred:", error);
        }
    }
    //시간변경
    function formatDateTime(dateTimeStr: any) {
        const dateTime = new Date(dateTimeStr);
        const year = dateTime.getFullYear();
        const month = String(dateTime.getMonth() + 1).padStart(2, "0"); // Month is zero-based
        const day = String(dateTime.getDate()).padStart(2, "0");
        const hour = String(dateTime.getHours()).padStart(2, "0");
        const minute = String(dateTime.getMinutes()).padStart(2, "0");

        return `${year}-${month}-${day} ${hour}:${minute}`;
    }
    return (
        <InfoContainer>
            <Header />
            <TitleBox>
                <TitleWrapper>나의 API</TitleWrapper>
                <DescWrapper>내가 이용 중인 API를 확인하고 설정을 관리할 수 있습니다.</DescWrapper>
            </TitleBox>
            <InfoKey />
            <ContainerTitleWrapper>
                <CenterText>예금주 목록 - 최대 3명 등록 가능</CenterText>
                <InputBox
                    type="text"
                    placeholder="예금주 이름을 입력하세요."
                    value={accountHolderName}
                    onChange={(e) => setAccountHolderName(e.target.value)}
                />
                <AddButton onClick={handleAddAccountHolder}>예금주 추가하기</AddButton>
            </ContainerTitleWrapper>
            <Container>
                {data.map((item, index) => (
                    <AccountHolder key={index}>
                        <AccountHolderTop>
                            <Title>{item.accountHolderName}</Title>
                            <span>예금주 토큰: {item.accountHolderUuid}</span>
                            <DetailsDiv
                                onClick={() => handleShowCreateModal(item.accountHolderUuid)}
                            >
                                계좌 등록
                            </DetailsDiv>
                            <DetailsDiv
                                onClick={() =>
                                    handleShowDeleteModal(
                                        item.accountHolderUuid,
                                        item.accountHolderName,
                                    )
                                }
                            >
                                예금주 삭제
                            </DetailsDiv>
                            <DetailsDiv onClick={() => toggleDropdown(item.accountHolderUuid)}>
                                계좌 현황
                            </DetailsDiv>
                        </AccountHolderTop>
                        {dropdownStatus[item.accountHolderUuid] && (
                            <AccountInfo>
                                {accountDetails[item.accountHolderUuid]?.map((account, i) => (
                                    <AccountInfoOne key={i}>
                                        <Label>은행 : </Label> <Data> {account.bankName} </Data>
                                        <Label>계좌번호 : </Label>
                                        <Data>{account.accountNum}</Data>
                                        <Label>잔액 : </Label>
                                        <Data>{account.balance} 원</Data>
                                        <DetailsDiv
                                            onClick={() =>
                                                handleShowTransferModal(
                                                    account.accountNum,
                                                    item.accountHolderUuid,
                                                )
                                            }
                                        >
                                            이체하기
                                        </DetailsDiv>
                                        <DetailsDiv
                                            onClick={() =>
                                                handleShowDeleteAccountModal(
                                                    account.accountNum,
                                                    item.accountHolderUuid,
                                                )
                                            }
                                        >
                                            계좌 삭제
                                        </DetailsDiv>
                                        <DetailsDiv
                                            onClick={() =>
                                                handleShowTransactionHistoryModal(
                                                    account.accountNum,
                                                )
                                            }
                                        >
                                            거래내역
                                        </DetailsDiv>
                                    </AccountInfoOne>
                                ))}
                            </AccountInfo>
                        )}
                    </AccountHolder>
                ))}
            </Container>

            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <TextModal>예금주를 정말로 삭제하시겠습니까?</TextModal>
                <WarpBtnModal>
                    <DetailsDiv2 onClick={handleDeleteAccountHolder}>삭제</DetailsDiv2>
                    <DetailsDiv2 onClick={() => setShowModal(false)}>취소</DetailsDiv2>
                </WarpBtnModal>
            </Modal>

            <Modal2 show={showModal2} onClose={() => setShowModal2(false)}>
                <TextModal>계좌는 예금주당 최대 5개까지 등록 가능합니다.</TextModal>
                <WrapModal2>
                    <div>
                        <label>은행 코드(메인 코드 목록 참조):</label>
                        <InputBox
                            type="text"
                            value={bankCode}
                            onChange={(e) => setBankCode(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>패스워드(4자리):</label>
                        <InputBox
                            type="password"
                            value={accountPassword}
                            onChange={(e) => setAccountPassword(e.target.value)}
                        />
                    </div>
                </WrapModal2>
                <WarpBtnModal>
                    <DetailsDiv2 onClick={handleCreateAccountHolder}>등록</DetailsDiv2>
                    <DetailsDiv2 onClick={() => setShowModal2(false)}>취소</DetailsDiv2>
                </WarpBtnModal>
            </Modal2>

            <Modal2 show={showDeleteAccountModal} onClose={() => setShowDeleteAccountModal(false)}>
                <TextModal>계좌를 정말로 삭제하시겠습니까?</TextModal>
                <WrapModal2>
                    <div>
                        <label>은행 코드(메인 코드 목록 참조):</label>
                        <InputBox
                            type="text"
                            value={bankCode}
                            onChange={(e) => setBankCode(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>패스워드(4자리):</label>
                        <InputBox
                            type="password"
                            value={accountPassword}
                            onChange={(e) => setAccountPassword(e.target.value)}
                        />
                    </div>
                </WrapModal2>
                <WarpBtnModal>
                    <DetailsDiv2 onClick={handleDeleteAccount}>삭제</DetailsDiv2>
                    <DetailsDiv2 onClick={() => setShowDeleteAccountModal(false)}>취소</DetailsDiv2>
                </WarpBtnModal>
            </Modal2>

            <Modal3 show={showTransferModal} onClose={() => setShowTransferModal(false)}>
                <TextModal>계좌이체</TextModal>
                <WrapModal2>
                    <div>
                        <label>은행 코드(메인 코드 목록 참조):</label>
                        <InputBox
                            type="text"
                            value={bankCode}
                            onChange={(e) => setBankCode(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>계좌번호:</label>
                        <InputBox
                            type="text"
                            value={accountNum}
                            onChange={(e) => setAccountNum(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>이체금액:</label>
                        <InputBox
                            type="text"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>입금통장인자(상대방 계좌에 남음):</label>
                        <InputBox
                            type="text"
                            value={receiverContent}
                            onChange={(e) => setReceiverContent(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>출금통장인자(내 계좌에 남음):</label>
                        <InputBox
                            type="text"
                            value={senderContent}
                            onChange={(e) => setSenderContent(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>패스워드(4자리):</label>
                        <InputBox
                            type="password"
                            value={accountPassword}
                            onChange={(e) => setAccountPassword(e.target.value)}
                        />
                    </div>
                </WrapModal2>
                <WarpBtnModal>
                    <DetailsDiv2 onClick={handleTransferAccount}>이체하기</DetailsDiv2>
                    <DetailsDiv2 onClick={() => setShowTransferModal(false)}>취소</DetailsDiv2>
                </WarpBtnModal>
            </Modal3>

            <Modal4
                show={showTransactionHistoryModal}
                onClose={() => setShowTransactionHistoryModal(false)}
            >
                <TextModal>거래내역 보기</TextModal>
                <WrapModal2>
                    <div>
                        <label>페이지(0부터 시작합니다.):</label>
                        <InputBox type="text" value={page} onChange={handlePageChange} />
                    </div>
                    <div>
                        <label>패스워드(4자리):</label>
                        <InputBox
                            type="password"
                            value={accountPassword}
                            onChange={(e) => setAccountPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <div>
                            <TransactionLabel>검색 결과:</TransactionLabel>
                            <TransactionData>{pageInfo.totalCnt}</TransactionData>
                        </div>
                        <div>
                            <TransactionLabel>다음 페이지 여부:</TransactionLabel>
                            <TransactionData>{pageInfo.next ? "Yes" : "No"}</TransactionData>
                        </div>
                        <h3>거래 내역 : 갱신을 위해 반드시 '보기'를 눌러주세요!</h3>
                        <div>
                            {transferHistory.map((item, index) => (
                                <TransactionItem key={index}>
                                    <div>
                                        <TransactionLabel>날짜:</TransactionLabel>
                                        <TransactionData>
                                            {formatDateTime(item.transferDate)}
                                        </TransactionData>
                                    </div>
                                    <div>
                                        <TransactionLabel>구분:</TransactionLabel>
                                        <TransactionData>{item.flag}</TransactionData>
                                    </div>
                                    <div>
                                        <TransactionLabel>금액:</TransactionLabel>
                                        <TransactionData>{item.amount}</TransactionData>
                                    </div>
                                    <div>
                                        <TransactionLabel>내용:</TransactionLabel>
                                        <TransactionData>{item.content}</TransactionData>
                                    </div>
                                    <div>
                                        <TransactionLabel>잔액:</TransactionLabel>
                                        <TransactionData>{item.afterAmount}</TransactionData>
                                    </div>
                                </TransactionItem>
                            ))}
                        </div>
                    </div>
                </WrapModal2>
                <WarpBtnModal>
                    <DetailsDiv2 onClick={fetchTrnsferHistory}>보기</DetailsDiv2>
                    <DetailsDiv2 onClick={() => setShowTransactionHistoryModal(false)}>
                        취소
                    </DetailsDiv2>
                </WarpBtnModal>
            </Modal4>
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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 75%;
`;

const AccountHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 5px;
`;

const AccountHolderTop = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
    align-items: center;
`;

const AccountInfo = styled.div`
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    margin-bottom: 15px;
    width: 100%;
`;

const AccountInfoOne = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 12px;
    align-items: center;
`;

const DetailsDiv = styled("button")`
    cursor: pointer;
    margin-top: 3vh;
    padding: 1.5vh 3vh;
    background-color: ${primarydark};
    border-radius: 10px;
    border: none;
    font-weight: 700;
    color: white;
    &:hover {
        background-color: ${secondary};
    }
`;

const DetailsDiv2 = styled("button")`
    cursor: pointer;
    padding: 1.5vh 3vh;
    background-color: ${primarydark};
    border-radius: 10px;
    border: none;
    font-weight: 700;
    color: white;
    &:hover {
        background-color: ${secondary};
    }
`;

const WarpBtnModal = styled("div")`
    justify-content: space-evenly;
    margin-top: 57px;
    display: flex;
`;

const TextModal = styled.div`
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
`;
const Label = styled.span`
    font-size: 1.1em;
    font-weight: bold;
`;

const Data = styled.span`
    font-size: 1em;
`;
const Title = styled.span`
    font-size: 1.1em;
    font-weight: bold;
`;
const WrapModal2 = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    justify-content: center;
`;

const AddButton = styled.div`
    background-color: ${primarydark};
    color: white;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;
    margin-left: 20px;
    font-weight: 700;
    &:hover {
        background-color: ${primary};
    }
`;

const ContainerTitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 71%;
    margin-bottom: 18px;
`;

const CenterText = styled.div`
    padding-left: 16px;
    flex: 1;
    font-size: 1.4em;
    font-weight: bold;
`;

const InputBox = styled.input`
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    margin-right: 10px;
    &:focus {
        border-color: #007bff;
    }
`;

const TransactionItem = styled.div`
    margin: 10px 0;
    padding: 10px;
    border-bottom: 1px solid gray;
    display: flex;
    justify-content: space-between;
`;

const TransactionLabel = styled.span`
    font-weight: bold;
`;

const TransactionData = styled.span`
    margin-left: 5px;
`;

// ----------------------------------------------------------------------------------------------------

/* Export */
export default Info;
