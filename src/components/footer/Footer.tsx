/* Import */
import styled from "@emotion/styled";
import Theme from "@assets/styles/Theme";
import LogoImage from "@assets/images/Service-Logo-Black.png";

// ----------------------------------------------------------------------------------------------------

/* Variables */
const { faintgray } = Theme.colors;

// ----------------------------------------------------------------------------------------------------

/* Footer Component */
function Footer() {
    return (
        <FooterContainer>
            <LogoWrapper>
                <Logo src={LogoImage} alt="싸피뱅크 로고" />
            </LogoWrapper>
            <FooterContent>
                Copyright 2023. <span>Park Hyun-cheol, Oh You-jung, Go Geon</span>. All Rights
                Reserved.
            </FooterContent>
        </FooterContainer>
    );
}

// ----------------------------------------------------------------------------------------------------

/* Styles */
const FooterContainer = styled("div")`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0.5vh;
    width: 100%;
    height: 5em;
    border-top: solid 1px ${faintgray};
`;

const LogoWrapper = styled("div")`
    width: 8%;
    margin-top: 0.4em;
`;

const Logo = styled("img")`
    width: 100%;
`;

const FooterContent = styled("div")`
    font-size: 14px;
    span {
        font-size: 14px;
        font-weight: 700;
    }
`;

// ----------------------------------------------------------------------------------------------------

/* Export */
export default Footer;
