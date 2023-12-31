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
        tableheader: string;
    };
};

const theme: Theme = {
    colors: {
        primary: "#1BB1E7",
        primarydeep: "#1281FF",
        primarydeeper: "#1140F5",
        primarydark: "#0D5069",
        secondary: "#1481A8",
        tertiary: "#12FEFF",
        whitegray: "#F2F2F2",
        faintgray: "#CCCDCF",
        distinctgray: "#392F31",
        kakaotalk: "#FAE100",
        tableheader: "#445182",
    },
};

// ----------------------------------------------------------------------------------------------------

/* Export */
export default theme;
