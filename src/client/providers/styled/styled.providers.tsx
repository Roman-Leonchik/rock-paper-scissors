import React from "react"
import { StyledGlobal } from "./styled.styled"
import {
    ThemeProvider as StyledThemeProvider,
    StyleSheetManager,
} from "styled-components"

import { useTheme } from "../theme/theme.hooks"

interface IProps {
    children: JSX.Element
}

const StyledProvider: React.FC<IProps> = ({ children }) => {
    const { themeProps } = useTheme()
    return (
        <StyleSheetManager>
            <StyledThemeProvider theme={themeProps}>
                <>
                    <StyledGlobal />
                    {children}
                </>
            </StyledThemeProvider>
        </StyleSheetManager>
    )
}

export default StyledProvider
