import styled from "styled-components";
import { Device } from "../../../lib/standarts";

interface IProps {
    picked?: boolean;
}

interface IButtons extends IProps{
    color: string;
}


export const StyledButtonImage = styled.img`
    transition: 0.3s;
    @media ${Device.tablet} {
        max-width: 60%;
    }
`;

export const StyledButtonContent = styled.span<IProps>`
    display: block;
    background-color: ${({theme}) => theme.white};
    position: absolute;
    z-index: 2;
    top: ${({picked}) => picked ?  "30px" : "20px"};
    bottom: ${({picked}) => picked ?  "30px" : "20px"};
    left: ${({picked}) => picked ?  "30px" : "20px"};
    right: ${({picked}) => picked ?  "30px" : "20px"};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 6px 6px rgb(${({theme}) => theme.рeaderOutlineRGB} / 50%);
    transition: 0.3s;
    @media ${Device.tablet} {
        top: ${({picked}) => picked ?  "20px" : "15px"};
        bottom: ${({picked}) => picked ?  "20px" : "15px"};
        left: ${({picked}) => picked ?  "20px" : "15px"};
        right: ${({picked}) => picked ?  "20px" : "15px"};
    }
`;

export const StyledButton = styled.button<IButtons>`
    width: ${({picked}) => picked ?  "300px" : "200px"};
    height: ${({picked}) => picked ?  "300px" : "200px"};
    padding: 0;
    border: 2px solid;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    background: linear-gradient(${({theme, color}) => theme[color]});
    box-shadow: inset 0 -10px 3px rgb(0 0 0 / 50%);
    &:hover {
        ${StyledButtonContent} {
            box-shadow: inset 0 15px 6px rgb(${({theme}) => theme.рeaderOutlineRGB} / 50%);
        }
        ${StyledButtonImage} {
            transform: scale(1.2);
        }
    }
    @media ${Device.tablet} {
        width: ${({picked}) => picked ?  "200px" : "120px"};
        height: ${({picked}) => picked ?  "200px" : "120px"};
    }
`;
