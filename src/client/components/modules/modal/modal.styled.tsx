import styled from "styled-components";

export const StyledModal = styled.div<{isVisible: boolean;}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    display: ${({isVisible}) => isVisible ? "block" : "none"};
`;

export const StyledModalBack = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({theme}) => theme.modalBg};
`;

export const StyledModalContent = styled.div`
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    max-width: 400px;
    width: calc(100vw - 40px);
    transform: translate(-50%, -50%);
    background-color: ${({theme}) => theme.white};
    color: ${({theme}) => theme.darkText};
    border-radius: 10px;
    padding: 20px;
`;

export const StyledModalHeader = styled.div`
    font-size: 32px;
    text-transform: uppercase;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const StyledModalCancel = styled.button`
    background: none;
    border: none;
    width: 25px;
    height: 25px;
    position: relative;
    cursor: pointer;
    padding: 0;
    transform: rotate(45deg);
    overflow: hidden;
    opacity: 0.7;
    transition: 0.3s;
    &:after,
    &:before {
        content: "";
        width: 25px;
        height: 2px;
        background-color: ${({theme}) => theme.darkText};
        display: block;
        border-radius: 3px;
        transform:translate(-50%, -50%);
        position: absolute;
        top: 50%;
        left: 50%;
    }
    &:after {
        transform: translate(-50%, -50%) rotate(90deg);
    }
    &:hover {
        transform: rotate(135deg);
    }
`;
