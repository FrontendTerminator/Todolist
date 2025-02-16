import { css } from "styled-components";

export const theme = {
  colors: {
    primary: "#3498db",
  },
  breakpoints: {
    phone: 500,
    tablet: 900,
  },
};

const createMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

export const media = Object.keys(theme.breakpoints).reduce(
  (acc, label) => ({
    ...acc,
    [label]: (...args: Parameters<typeof css>) => css`
      ${createMediaQuery(
        theme.breakpoints[label as keyof typeof theme.breakpoints]
      )} {
        ${css(...args)}
      }
    `,
  }),
  {} as Record<
    keyof typeof theme.breakpoints,
    (...args: Parameters<typeof css>) => ReturnType<typeof css>
  >
);
