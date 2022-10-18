import React, { useState, useEffect } from "react";
import { choiceTypes, resultTypes } from "../../../lib/types";
import { PickedBot } from "../../elements/picked-bot/picket-bot.element";
import {
    StyledPickedWrapp,
    StyledPickedText,
    StyledPickedItem,
    StyledResultContainer,
    StyledResultText,
    StyledResultButton,
    StyledPickedItemBot,
} from "./picked.styled";

interface IProps {
    type: choiceTypes;
    picked: choiceTypes;
    result: resultTypes;
    onResult: () => void;
    onScore: (result: resultTypes) => void;
}

export const Picked: React.FC<IProps> = ({ type, picked, result, onResult, onScore }) => {
    const [counter, setCounter] = useState(3);

    useEffect(() => {
        if(counter > 0) {
            setTimeout(() => {setCounter(counter-1)}, 1000)
        } else {
            onScore(result);
        }
    }, [counter]);

    const textResult = (result: resultTypes) => {
        switch(result) {
            case resultTypes.WINS: return "You wins";
            case resultTypes.DRAW: return "Sorry, draw";
            case resultTypes.LOSE: return "You lose";
        }
    }

    return(
        <StyledPickedWrapp>
            <StyledPickedItem>
                <StyledPickedText>You picked</StyledPickedText>
                <PickedBot
                    current={counter}
                    type={type}
                    result={result === resultTypes.WINS}
                    isUser
                />
            </StyledPickedItem>
            <StyledResultContainer isVisible={counter === 0}>
                <StyledResultText>{textResult(result)}</StyledResultText>
                <StyledResultButton onClick={onResult}>play again</StyledResultButton>
            </StyledResultContainer>
            <StyledPickedItemBot>
                <StyledPickedText>The bot picked</StyledPickedText>
                <PickedBot
                    current={counter}
                    type={picked}
                    result={result === resultTypes.LOSE}
                />
            </StyledPickedItemBot>
        </StyledPickedWrapp>
    )
}