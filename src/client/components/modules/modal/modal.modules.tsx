import React from "react";
import {
    StyledModal,
    StyledModalBack,
    StyledModalContent,
    StyledModalHeader,
    StyledModalCancel,
} from "./modal.styled";

interface IProps {
    isVisible: boolean;
    onCancel: () => void;
    header?: string | JSX.Element;
    content?: JSX.Element;
};

export const Modal: React.FC<IProps> = ({ isVisible, onCancel, header, content }) => {
    return(
        <StyledModal isVisible={isVisible}>
            <StyledModalBack />
            <StyledModalContent>
                <StyledModalHeader>
                    {header ?  header : "Rules"}
                    <StyledModalCancel onClick={onCancel}/>
                </StyledModalHeader>
                {content}
            </StyledModalContent>
        </StyledModal>
    )
};