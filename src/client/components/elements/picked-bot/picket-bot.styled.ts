import styled, { keyframes, css } from "styled-components";
import RockIcon from "../../../assets/img/icon-rock.svg";
import PaperIcon from "../../../assets/img/icon-paper.svg";
import ScissorsIcon from "../../../assets/img/icon-scissors.svg";
import { Device } from "../../../lib/standarts";

const scaleAnimation = keyframes`
    0% {
        transform: translate(-50%, -50%) scale(0.5);
    }

    50% {
        transform: translate(-50%, -50%) scale(1);
    }

    100% {
        transform: translate(-50%, -50%) scale(0.5);
    }
`;

const imageAnimation = keyframes`
    0% {
        background-image: url(${RockIcon});
    }

    50% {
        background-image: url(${PaperIcon});
    }

    100% {
        background-image: url(${ScissorsIcon});
    }
`;

const roundCSS = css`
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(1);
    background-color: rgba(255,255,255, 0.05);
`;

interface IProps {
    isVisible: boolean;
}

interface IContent extends IProps {
    type: string;
}

interface IRound extends IProps {
    isAnimation: boolean;
}

export const StyledPickedBotContent = styled.div`
    background-color: ${({theme}) => theme.white};
    box-shadow: ${({theme}) => `inset 0 6px 6px rgb(${theme.рeaderOutlineRGB} / 50%)`};
    position: absolute;
    z-index: 2;
    top: 30px;
    bottom: 30px;
    left: 30px;
    right: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.5s ease-in-out;
    @media ${Device.tabletM} {
        top: 15px;
        bottom: 15px;
        left: 15px;
        right: 15px;
    }
`;

export const StyledImage = styled.img`
    transition: 0.3s;
    @media ${Device.tabletM} {
        max-width: 50%;
    }
`;

export const StyledPickedBot = styled.div<IContent>`
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 150px;
    font-weight: bold;
    border-radius: 50%;
    position: relative;
    z-index: 2;
    ${({theme, type, isVisible}) => isVisible && `background: linear-gradient(${theme[type]})`};
    ${({isVisible}) => isVisible && "box-shadow: inset 0 -10px 3px rgb(0 0 0 / 50%)"};
    @media ${Device.tabletM} {
        width: 200px;
        height: 200px;
    }
    @media ${Device.tablet} {
        width: 120px;
        height: 120px;
    }
`;

export const StyledPickedBotContainer = styled.div`
    width: 300px;
    height: 300px;
    margin: 0 auto;
    position: relative;
    @media ${Device.tabletM} {
        width: 200px;
        height: 200px;
    }
    @media ${Device.tablet} {
        width: 120px;
        height: 120px;
    }
`;

export const StyledAnimationContainer = styled.div<IRound>`
    ${roundCSS};
    z-index: 1;
    width: 200%;
    height: 200%;
    pointer-events: none;
    transition: 0.3s;
    opacity:  ${({isVisible}) => isVisible ? 1 : 0};
    ${({isAnimation}) => isAnimation && css`animation: ${scaleAnimation} 3s linear infinite`};  
    animation-delay: 1.5s;
    &:before {
        content: "";
        width: 85%;
        height: 85%;
        ${roundCSS};
    }
    &:after {
        content: "";
        width: 70%;
        height: 70%;
        ${roundCSS};
    }
`;

export const StyledPickedPreloader = styled.div`
    width: 100px;
    height: 120px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    animation: ${imageAnimation} 0.5s linear infinite;
    @media ${Device.tabletM} {
        width: 80px;
        height: 96px;
    }
    @media ${Device.tablet} {
        width: 50px;
        height: 60px;
    }
`;
