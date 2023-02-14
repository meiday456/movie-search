export const omdbApiBaseUrl = `https://www.omdbapi.com`;
export const apiKey = `54a75085`;

export const myInfo = {
  email: "sjkang0228@gmail.com",
  blog: "https://www.notion.so/d4d44b8641cd417ab9ee7a1985f86f4a",
  github: "https://github.com/meiday456",
  repository: "movie-search",
};

export const isDark = () => {
  const hour = new Date().getHours();
  return hour >= 18 || hour <= 6;
};
