const color = {
    white: "255, 255, 255",
    black: "0, 0, 0"
}

const dark = {
    primary: "55, 59, 68",
    text: "236, 239, 244"
}

const light = {
    primary: "139, 207, 177",
    text: "46, 52, 64"
}

export const DarkTheme = {
    background: dark.primary,
    textColor: dark.text,
    borderColor: light.primary,
    boxShadow: color.white
};

export const LightTheme = {
    background: light.primary,
    textColor: light.text,
    borderColor: dark.primary,
    boxShadow: color.black
};