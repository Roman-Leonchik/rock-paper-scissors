import React from "react";
import { choiceTypes } from "../../../lib/types";
import {
    StyledPickedBot,
    StyledImage,
    StyledPickedBotContent,
    StyledPickedBotContainer,
    StyledAnimationContainer,
    StyledPickedPreloader,
} from "./picket-bot.styled";

interface IProps {
    current: number;
    type: choiceTypes;
    result: boolean;
    isUser?: boolean;
}

export const PickedBot: React.FC<IProps> = ({current, type, result, isUser}) => {
    return (
        <StyledPickedBotContainer>
            <StyledAnimationContainer isAnimation={result} isVisible={result && current === 0} />
            <StyledPickedBot isVisible={isUser || current === 0} type={type}>
                <StyledPickedBotContent>
                    {isUser ?
                        <StyledImage
                            width={100}
                            src={require(`@assets/img/icon-${type}.svg`)}
                            alt={type}
                        />
                        : (
                            current > 0 ? 
                                    <StyledPickedPreloader />
                                : 
                                    <StyledImage
                                        width={100}
                                        src={require(`@assets/img/icon-${type}.svg`)}
                                        alt={type}
                                    />
                            )
                    }
                </StyledPickedBotContent>
            </StyledPickedBot>
        </StyledPickedBotContainer>
    )
}