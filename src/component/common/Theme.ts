import { Theme } from "../../interface/CommonInterface";

const defaultTheme = {
  black: "#0E111B",
  black60: "rgba(14,17,27,0.6)",
  black30: "rgba(14,17,27,0.3)",
  white: "#FFF",
  white50: "rgba(255, 255, 255, .5)",
  white30: "rgba(255, 255, 255, .3)",
  white20: "rgba(255, 255, 255, .3)",
  white10: "rgba(255, 255, 255, .1)",
  white5: "rgba(255, 255, 255, .05)",
};

const dark: Theme = {
  ...defaultTheme,
  main: {
    background: defaultTheme.black,
    color: defaultTheme.white,
  },
  headline: {
    color: defaultTheme.white30,
  },
  search: {
    color: defaultTheme.white,
    placeholder: defaultTheme.white30,
  },
  header: {
    background: "rgba(14, 17, 27, 0.9)",
    color: defaultTheme.white50,
  },
  footer: {
    color: defaultTheme.white20,
  },
  primary: "#FDC000",
  hover: "#F86A05",
  area: "#1C212E",
  font: defaultTheme.white,
};

const light: Theme = {
  ...defaultTheme,
  main: {
    background: defaultTheme.white,
    color: defaultTheme.black,
  },
  headline: {
    color: "rgba(48,48,48,0.9)",
  },
  header: {
    background: "rgba(245, 245, 245, 0.9)",
    color: defaultTheme.black60,
  },
  search: {
    color: defaultTheme.black60,
    placeholder: defaultTheme.black30,
  },
  footer: {
    color: defaultTheme.black60,
  },
  primary: "#68D97A",
  hover: "#367A77",
  area: "#E6E6E6",
  font: defaultTheme.black,
};

export default (isDark: boolean) => {
  return isDark ? dark : light;
};
