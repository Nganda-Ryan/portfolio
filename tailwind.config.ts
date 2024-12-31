import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'xs': '512px',
        'xxs': '384px',
      },
      rotate: {
        '25': '25deg',
        '15': '15deg',
        '35': '35deg',
      },
      maxWidth: {
        '1/3': '33.333333%',
        '1/2': '50%',
        '4/5': '80%',
        '3/5': '60%',
        '3/4': '75%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '11/12': '91.666667%',
      },
      minWidth: {
        '1/3': '33.333333%',
        '1/2': '50%',
        '4/5': '80%',
        '3/5': '60%',
        '3/4': '75%',
        '4/6': '66.666667%',
      },
      width: {
        '22': '5.625rem',
      },
      height: {
        '22': '5.625rem',
      }
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('@tailwindcss/line-clamp'),
  ],
} satisfies Config;
