import React from "react";
import { StyledTitle } from "./title.styled";

interface IProps {
    title?: string;
}

export const Title: React.FC<IProps> = ({ title }) => {
    return <StyledTitle>{title}</StyledTitle>;
};
