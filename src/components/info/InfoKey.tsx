/* Import */
import styled from "@emotion/styled";
import Theme from "@assets/styles/Theme";
import axios from 'axios';
import React, { useState, useEffect } from 'react';

// ----------------------------------------------------------------------------------------------------

/* Variables */
const { primary, whitegray } = Theme.colors;

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
                `http://localhost:8081/v1/member/reissue`,
                {},
                {
                    headers: {
                        'Authorization': oldToken
                    }
                }
            );

            if (response.data.code === 1) {
                const newToken = response.data.data;
                sessionStorage.setItem("Authorization", newToken);
                setToken(newToken);  // 상태 업데이트로 재랜더링을 유발
            }

        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response?.data.code === -1) {
                    alert(error.response.data.msg);
                }
            }
            console.error('An error occurred:', error);
        }
    }
    return (
        <>
        <InfoKeyContainer>
            <SubTitleWrapper>나의 API 키 확인</SubTitleWrapper>
            <KeyHeader>나의 API 키</KeyHeader>
            <KeyWrapper>{token}</KeyWrapper>
         <DetailsDiv2 onClick={reIssueToken}>재발급</DetailsDiv2>
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
const DetailsDiv2 = styled.span`
margin-top : 20px;
  background-color: #ccc;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #aaa;
  }
`;

// ----------------------------------------------------------------------------------------------------

/* Export */
export default InfoKey;
