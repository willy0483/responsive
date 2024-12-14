export const theme = {
  color: {
    primary: "#333",
    secondary: "#f2f2f2",
    accent: "#ff0000",
    white: "#fff",
    black: "#000",
    red: "red",
  },
  grid: {
    breakpoints: {
      xs: "320px",
      s: "480px",
      m: "768px",
      l: "992px",
      xl: "1200px",
    },
    mobile: {
      primary: {
        rows: "1fr 1fr 9fr 1fr",
        columns: "5fr 1fr",
        areas: `
                "header navbar"
                "sidebar sidebar"
                "main main"
                "footer footer"
            `,
      },
    },
    tablet: {
      primary: {
        rows: "1fr 10fr 1fr",
        columns: "repeat(6,1fr)",
        areas: `
                "header header header header navbar navbar"
                "sidebar main main main main main"
                "footer footer footer footer footer footer"
            `,
      },
    },
    desktop: {
      primary: {
        rows: "1fr 10fr 1fr",
        columns: "repeat(6,1fr)",
        areas: `
                "header header navbar navbar navbar navbar"
                "main main main main main sidebar"
                "footer footer footer footer footer footer"
            `,
      },
    },
  },
};

export default theme;
