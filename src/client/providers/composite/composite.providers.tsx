import React from "react"
import StyledProvider from "../styled/styled.providers"
import ThemeProvider from "../theme/theme.provider"

interface IProps {
    children: JSX.Element
}

const CompositeProvider: React.FC<IProps> = ({ children }) => {
    return (
        <ThemeProvider>
            <StyledProvider>{children}</StyledProvider>
        </ThemeProvider>
    )
}

export default CompositeProvider
