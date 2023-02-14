export interface menu {
  name: string;
  href: string;
}

interface CommonTheme {
  background?: string;
  color?: string;
}

export interface Theme {
  black: string;
  white: string;
  white50: string;
  white30: string;
  white20: string;
  white10: string;
  white5: string;

  primary: string;
  hover: string;
  area: string;
  font: string;
  main: CommonTheme;
  header: CommonTheme;
  headline: {
    [key: string]: string;
  };
  search: {
    [key: string]: string;
  };
  footer: {
    [key: string]: string;
  };
  movie: CommonTheme;
  skeleton: {
    background: string;
    from: string;
    between: string;
    to: string;
  };
}
