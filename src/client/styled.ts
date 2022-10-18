import styled from "styled-components";
import { Device } from "./lib/standarts";

export const StyledPage = styled.div`
    padding: 45px 0 20px;
    min-height: 100vh;
    position: relative;
    color: ${({theme}) => theme.white};
    background: linear-gradient(${({theme}) => theme.bgPage});
    display: flex;
    overflow: hidden;
`;

export const StyledContainer = styled.div`
    padding: 0 15px 70px;
    margin: 0 auto;
    max-width: 1200px;
    flex: 1;
    position: relative;
`;

export const StyledLogo= styled.img`
    padding-top: 5px;
    @media ${Device.tablet} {
        max-width: 120px;
    }
`;

export const StyledScoreWrapp = styled.div`
    max-width: 700px;
    margin: 0 auto 70px;
    padding: 20px 20px 20px 30px;
    border: 3px solid ${({theme}) => theme.рeaderOutline};
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    @media ${Device.tablet} {
        padding: 10px;
        gap: 10px;
    }
`;

export const StyledScoreList = styled.div`
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    @media ${Device.tablet} {
        gap: 10px;
        flex-wrap: wrap;
    }
`;

export const StyledScore = styled.div`
    background-color: ${({theme}) => theme.white};
    padding: 15px 10px;
    border-radius: 10px;
    min-width: 150px;
    text-align: center;
    @media ${Device.tablet} {
        padding: 10px 5px;
        min-width: 100px;
    }
`;

export const StyledScoreText = styled.div`
    color: ${({theme}) => theme.scoreText};
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2.5px;
    @media ${Device.tablet} {
        font-size: 14px;
        letter-spacing: 1.5px;
    }
`;

export const StyledScoreNumber = styled.div`
    font-weight: 700;
    color: ${({theme}) => theme.darkText};
    font-size: 62px;
    line-height: 1;
    @media ${Device.tablet} {
        font-size: 40px;
    }
`;

export const StyledButtonChoice = styled.div`
    display: flex;
    justify-content: center;
    max-width: 500px;
    margin: 0 auto;
    flex-wrap: wrap;
    gap: 25px 80px;
    justify-content: center;
    background-image: url(${require("@assets/img/bg-triangle.svg")});
    background-position: 50% 62%;
    background-repeat: no-repeat;
    @media ${Device.tablet} {
        background-size: 240px;
    }
`;

export const StyledRulesButton = styled.button`
    border-radius: 10px;
    border: 1px solid ${({theme}) => theme.white};
    color: ${({theme}) => theme.white};
    cursor: pointer;
    background-color: rgba(255,255,255,0);
    padding: 5px;
    position: absolute;
    bottom: 0;
    right: 15px;
    text-transform: uppercase;
    height: 40px;
    min-width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    letter-spacing: 2px;
    transition: 0.3s;
    font-weight: 600;
    &:hover {
        color: ${({theme}) => theme.darkText};
        background-color: ${({theme}) => theme.white};
    }
    @media ${Device.tablet} {
        right: 15px;
        left: 15px;
        margin: 0 auto;
        max-width: 200px;
    }
`;

export const StyledRulesImage = styled.img`
    margin: 0 auto;
    display: block;
    max-width: 100%;
`;
