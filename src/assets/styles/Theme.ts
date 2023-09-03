/* Theme Object */
type Theme = {
    colors: {
        primary: string;
        primarydeep: string;
        primarydeeper: string;
        primarydark: string;
        secondary: string;
        tertiary: string;
        whitegray: string;
        faintgray: string;
        distinctgray: string;
        kakaotalk: string;
    };
};

const theme: Theme = {
    colors: {
        primary: "#1BB1E7",
        primarydeep: "#1281FF",
        primarydeeper: "#1140F5",
        primarydark: "#0D5069",
        secondary: "#11F5B5",
        tertiary: "#12FEFF",
        whitegray: "#F2F2F2",
        faintgray: "#CCCDCF",
        distinctgray: "#392F31",
        kakaotalk: "#FAE100",
    },
};

// ----------------------------------------------------------------------------------------------------

/* Export */
export default theme;
