import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    tokens: {
      fonts: {
        heading: { value: `'Figtree', sans-serif` },
        body: { value: `'Figtree', sans-serif` },
      },
      colors: {
        tealBlue: { value: "#002626" },
        snowWhite: { value: "#B9B8B6" },
        orange: { value: "#FFA500" },
        darkBronze: { value: "#805300" },
      },
    },
  },
});
