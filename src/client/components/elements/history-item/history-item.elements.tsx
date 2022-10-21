import React from "react";
import { resultTypes, choiceTypes } from "../../../lib/types";
import {
    StyledHistory,
    StyledHistoryImage,
    StyledHistoryResult,
    StyledHistoryItem,
    StyledHistoryNumber,
}from "./history-item.styled";

export interface IHistory {
    result: resultTypes,
    user: choiceTypes,
    bot: choiceTypes,
    index: number,
}

export const HistoryItem: React.FC<IHistory> = ({result, user, bot, index}) => {
    return (
        <StyledHistory>
            <StyledHistoryNumber>{index}</StyledHistoryNumber>
            <StyledHistoryItem type={user}>
                <StyledHistoryImage
                    width={100}
                    src={require(`@assets/img/icon-${user}.svg`)}
                    alt={user}
                />
            </StyledHistoryItem>
            <StyledHistoryResult>{result}</StyledHistoryResult>
            <StyledHistoryItem type={bot}>
                <StyledHistoryImage
                    width={100}
                    src={require(`@assets/img/icon-${bot}.svg`)}
                    alt={bot}
                />
            </StyledHistoryItem>
        </StyledHistory>
    )
}
