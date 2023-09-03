/* Import */
import styled from "@emotion/styled";
import Theme from "@assets/styles/Theme";

// ----------------------------------------------------------------------------------------------------

/* Variables */
const { primary, whitegray } = Theme.colors;

// ----------------------------------------------------------------------------------------------------

/* Info Key Component */
function InfoKey() {
    return (
        <InfoKeyContainer>
            <SubTitleWrapper>나의 API 키 확인</SubTitleWrapper>
            <KeyHeader>나의 API 키</KeyHeader>
            <KeyWrapper>{sessionStorage.getItem("Authorization")}</KeyWrapper>
        </InfoKeyContainer>
    );
}

// ----------------------------------------------------------------------------------------------------

/* Styles */
const InfoKeyContainer = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 55vh;
`;

const SubTitleWrapper = styled("div")`
    display: flex;
    margin-bottom: 3vh;
    font-size: 30px;
    font-weight: 700;
`;

const KeyHeader = styled("div")`
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    padding: 3vh;
    width: 50%;
    background-color: ${primary};
    color: white;
    font-size: 20px;
    font-weight: 700;
`;

const KeyWrapper = styled("div")`
    width: 50%;
    box-sizing: border-box;
    padding: 3vh;
    word-wrap: break-word;
    background-color: ${whitegray};
`;

// ----------------------------------------------------------------------------------------------------

/* Export */
export default InfoKey;
