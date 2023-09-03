/* Import */
import { css } from "@emotion/react";

// ----------------------------------------------------------------------------------------------------

/* Global Style */
const GlobalStyle = css`
    @font-face {
        font-family: "Pretendard";
        font-weight: 100;
        src: url("src/assets/fonts/Pretendard-Thin.woff") format("woff");
    }

    @font-face {
        font-family: "Pretendard";
        font-weight: 200;
        src: url("src/assets/fonts/Pretendard-Extralight.woff") format("woff");
    }

    @font-face {
        font-family: "Pretendard";
        font-weight: 300;
        src: url("src/assets/fonts/Pretendard-Light.woff") format("woff");
    }

    @font-face {
        font-family: "Pretendard";
        font-weight: 400;
        font-style: normal;
        src: url("src/assets/fonts/Pretendard-Regular.woff") format("woff");
    }

    @font-face {
        font-family: "Pretendard";
        font-weight: 500;
        src: url("src/assets/fonts/Pretendard-Medium.woff") format("woff");
    }

    @font-face {
        font-family: "Pretendard";
        font-weight: 600;
        src: url("src/assets/fonts/Pretendard-Semibold.woff") format("woff");
    }

    @font-face {
        font-family: "Pretendard";
        font-weight: 700;
        font-style: bold;
        src: url("src/assets/fonts/Pretendard-Bold.woff") format("woff");
    }

    @font-face {
        font-family: "Pretendard";
        font-weight: 800;
        src: url("src/assets/fonts/Pretendard-ExtraBold.woff") format("woff");
    }

    @font-face {
        font-family: "Pretendard";
        font-weight: 900;
        src: url("src/assets/fonts/Pretendard-Black.woff") format("woff");
    }

    * {
        font-family: "Pretendard", sans-serif;
        font-size: 16px;
    }

    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
`;

// ----------------------------------------------------------------------------------------------------

/* Export */
export default GlobalStyle;
