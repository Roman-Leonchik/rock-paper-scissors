import styled from "styled-components";

export const StyledHistory = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;

export const StyledHistoryResult = styled.div`
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

export const StyledHistoryNumber = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

export const StyledHistoryItem = styled.div<{type: string}>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: ${({theme, type}) => `linear-gradient(${theme[type]})`};
    box-shadow: inset 0 -10px 3px rgb(0 0 0 / 50%);
    &:before {
        content: "";
        position: absolute;
        top: 3px;
        bottom: 3px;
        left: 3px;
        right: 3px;
        background-color: ${({theme}) => theme.white};
        box-shadow: ${({theme}) => `inset 0 6px 6px rgb(${theme.рeaderOutlineRGB} / 50%)`};
        border-radius: 50%;
    }
`;

export const StyledHistoryImage = styled.img`
    max-width: 50%;
    position: relative;
    z-index: 2;
`;
