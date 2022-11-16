import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
  },

  typography: {
    fontFamily: [
      "Roboto",
      "Arial",
      "Sans-serif",
      "Baskerville Old Face",
      "Segoe UI",
      "FZ Shuti",
      "Times New Roman",
      "Bauhaus 93",
      "Broadway",
      "Britannic Bold",
      "Rockwell",
      "Forte",
      "Poppins",
    ].join(","),

    h1: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "30px",
      lineHeight: "40px",
    },

    h2: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "24px",
      lineHeight: "24px",
    },

    h3: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "18px",
      lineHeight: "20px",
    },

    h4: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "18px",
      lineHeight: "20px",
    },

    h5: {
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "16px",
    },

    sh: {
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "12px",
      lineHeight: "16px",
    },

    p: {
      fontStyle: "normal",
      fontWeight: "300",
      fontSize: "12px",
      lineHeight: "16px",
    },
  },
});

export default theme;
