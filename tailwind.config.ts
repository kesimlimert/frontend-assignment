import { plugin } from "postcss";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#1C3988",
      secondary: "#6E8AE9",
      light: "#F3F3FA",
      darkGray: "#DDDDDD",
      dark: "#091638",
	  lightBlue: "#141B2D",
    },
    fontSize: {
      // Mobile
      xs: ["16px", { lineHeight: "24px" }],
      sm: ["18px", { lineHeight: "24px" }],
      md: ["21px", { lineHeight: "27.9px" }],
      lg: ["24px", { lineHeight: "31.9px" }],
      xl: ["28px", { lineHeight: "37.2px" }],
      "2xl": ["32px", { lineHeight: "38.4px" }],
      "3xl": ["36px", { lineHeight: "43.9px" }],
      subheader: ["21.25px", { lineHeight: "28.3px" }],
      // Tablet
      "md-xs": ["17px", { lineHeight: "25.5px" }],
      "md-sm": ["17px", { lineHeight: "25.5px" }],
      "md-md": ["21.5px", { lineHeight: "28.3px" }],
      "md-lg": ["26.56px", { lineHeight: "35.3px" }],
      "md-xl": ["33.203px", { lineHeight: "44.2px" }],
      "md-2xl": ["41.5px", { lineHeight: "55.2px" }],
      "md-3xl": ["51.88px", { lineHeight: "69px" }],
      "md-subheader": ["21.25px", { lineHeight: "28.3px" }],
      // Desktop
      "lg-xs": ["17px", { lineHeight: "25.5px" }],
      "lg-sm": ["21.5px", { lineHeight: "28.3px" }],
      "lg-md": ["26.56px", { lineHeight: "35.3px" }],
      "lg-lg": ["33.203px", { lineHeight: "44.2px" }],
      "lg-xl": ["41.5px", { lineHeight: "55.2px" }],
      "lg-2xl": ["51.88px", { lineHeight: "69px" }],
      "lg-3xl": ["64.85px", { lineHeight: "86.3px" }],
      "lg-subheader": ["21.25px", { lineHeight: "28.3px" }],
      anchor: ["17px", { lineHeight: "15px" }],
    },
    extend: {},
  },
  plugins: [
    function ({ addComponents }: { addComponents: (components: any) => void }) {
      addComponents({
        ".btn": {
          padding: "0.5rem 1rem",
          borderRadius: "0.375rem",
          fontWeight: "500",
          "&:focus": {
            outline: "none",
            ringWidth: "2px",
            ringOpacity: "0.75",
          },
        },
        ".btn-primary": {
		  padding: "0.7rem 1.2rem",
          backgroundColor: "#1C3988",
		  borderRadius: "0.375rem",
		  fontWeight: "700",
		  fontSize: "16px",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#6E8AE9",
          },
        },
        ".btn-secondary": {
          backgroundColor: "transparent",
          padding: "0.5rem 1rem",
          borderColor: "#1C3988",
          borderWidth: "1px",
		  fontWeight: "700",
		  fontSize: "16px",
		  borderRadius: "0.375rem",
          color: "#1C3988",
          "&:hover": {
            backgroundColor: "#6E8AE9",
			borderColor: "#6E8AE9",
            color: "#FFFFFF",
          },
        },
      });
    },
  ],
};
export default config;
