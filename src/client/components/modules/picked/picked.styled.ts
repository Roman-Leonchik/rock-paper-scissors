import styled from "styled-components";
import { Device } from "../../../lib/standarts";

interface IProps {
    isVisible: boolean;
}

export const StyledPickedWrapp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
    @media ${Device.tabletM} {
        display: grid;
        gap: 20px;
        grid-template-areas:
        "itemUser itemBot"
        "result result";
    }
    @media ${Device.mobile} {
        grid-template-areas:
        "itemUser"
        "itemBot"
        "result";
    }
`;

export const StyledPickedText = styled.p`
    font-size: 24px;
    margin: 0 auto 60px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 3px;
    @media ${Device.tabletM} {
        margin-bottom: 40px;
    }
    @media ${Device.tablet} {
        font-size: 20px;
        margin-bottom: 20px;
    }
`;

export const StyledPickedItem = styled.div`
    padding: 0 15px;
    min-width: 380px;
    grid-area: itemUser;
    @media ${Device.tabletM} {
        min-width: 300px;
    }
    @media ${Device.tablet} {
        min-width: 200px;
    }
`;

export const StyledPickedItemBot = styled(StyledPickedItem)`
    grid-area: itemBot;
`;

export const StyledResultContainer = styled.div<IProps>`
    display: flex;
    flex-direction: column;
    gap: 20px;
    transition: 0.5s;
    width: ${({isVisible}) => isVisible ? "300px" : "0"};
    opacity: ${({isVisible}) => isVisible ? "1" : "0"};
    pointer-events: ${({isVisible}) => isVisible ? "auto" : "none"};
    white-space: pre;
    grid-area: result;
    margin: 0 auto;
`;

export const StyledResultText = styled.p`
    text-transform: uppercase;
    font-size: 48px;
    font-weight: 600;
    margin: 0;
    @media ${Device.tablet} {
        font-size: 36px;
    }
`;

export const StyledResultButton = styled.button`
    padding: 5px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s;
    color: ${({theme}) => theme.darkText};
    &:hover {
        color: ${({theme}) => theme.resultButton};
    }
`;
