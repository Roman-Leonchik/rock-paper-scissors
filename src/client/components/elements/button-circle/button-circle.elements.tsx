import React from "react";
import { choiceTypes } from "../../../lib/types";
import {
    StyledButton,
    StyledButtonContent,
    StyledButtonImage,
} from "./button-circle.styled";

export interface IButtons {
    type: choiceTypes;
    onClick: (type: choiceTypes) => void;
    picked?: boolean;
}

export const ButtonCircle: React.FC<IButtons> = ({ type, picked, onClick }) => {
    return (
        <StyledButton color={type} picked={picked} onClick={() => onClick(type)}>
            <StyledButtonContent picked={picked}>
                <StyledButtonImage
                    width={picked ? 100 : 70}
                    src={require(`@assets/img/icon-${type}.svg`)}
                    alt={type}
                />
            </StyledButtonContent>
        </StyledButton>
    )
}