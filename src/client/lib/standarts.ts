const deviceSize = {
    desktop: "1440px",
    tabletM: "1024px",
    tablet: "768px",
    mobile: "480px",
};

export const Device = {
    desktop: `(max-width: ${deviceSize.desktop})`,
    tabletM: `(max-width: ${deviceSize.tabletM})`,
    tablet: `(max-width: ${deviceSize.tablet})`,
    mobile: `(max-width: ${deviceSize.mobile})`,
};
