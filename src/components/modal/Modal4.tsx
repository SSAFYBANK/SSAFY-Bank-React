import { FC, ReactNode } from "react";
import styled from "@emotion/styled";

interface ModalProps {
    show: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: FC<ModalProps> = ({ show, onClose, children }) => {
    if (!show) return null;

    return (
        <ModalOverlay>
            <ModalContainer>
                <CloseButton onClick={onClose}>X</CloseButton>
                {children}
            </ModalContainer>
        </ModalOverlay>
    );
};

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContainer = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    width: 600px;
    height: 90%;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
`;

export default Modal;
