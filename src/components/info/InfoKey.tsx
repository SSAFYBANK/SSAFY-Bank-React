/* Import */
import styled from "@emotion/styled";
import Theme from "@assets/styles/Theme";
import axios from "axios";
import { useState, useEffect } from "react";

// ----------------------------------------------------------------------------------------------------

/* Variables */
const { secondary, distinctgray, primarydark } = Theme.colors;

// ----------------------------------------------------------------------------------------------------

/* Info Key Component */
function InfoKey() {
    const [token, setToken] = useState(sessionStorage.getItem("Authorization"));

    useEffect(() => {
        setToken(sessionStorage.getItem("Authorization"));
    }, []);
    async function reIssueToken() {
        try {
            const oldToken = sessionStorage.getItem("Authorization");
            const response = await axios.post(
                `http://52.78.102.165:8081/v1/member/reissue`,
                {},
                {
                    headers: {
                        Authorization: oldToken,
                    },
                },
            );

            if (response.data.code === 1) {
                const newToken = response.data.data;
                sessionStorage.setItem("Authorization", newToken);
                setToken(newToken); // 상태 업데이트로 재랜더링을 유발
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response?.data.code === -1) {
                    alert(error.response.data.msg);
                }
            }
            console.error("An error occurred:", error);
        }
    }
    return (
        <>
            <InfoKeyContainer>
                <SubTitleWrapper>사용자 AccessToken</SubTitleWrapper>
                <KeyWrapper>{token}</KeyWrapper>
                <ReissueButton onClick={reIssueToken}>토큰 재발급</ReissueButton>
            </InfoKeyContainer>
        </>
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

const KeyWrapper = styled("div")`
    display: block;
    box-sizing: border-box;
    width: 50%;
    padding: 3vh;
    word-wrap: break-word;
    border-radius: 10px;
    background-color: ${distinctgray};
    color: white;
    font-family: Consolas, monospace;
    font-size: 16px;
    line-height: 1.5;
`;

const ReissueButton = styled("button")`
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

// ----------------------------------------------------------------------------------------------------

/* Export */
export default InfoKey;
