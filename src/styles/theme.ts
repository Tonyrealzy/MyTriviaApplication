import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    breakpoints: {
      base: '0px',
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
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
