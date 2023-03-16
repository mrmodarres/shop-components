/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "register-bg": "url('assets/image/register-image.svg')",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        "form-shadow": "0px 3px 5px #00000073",
      },
      colors: {
        // 'accent-hover': withOpacity('--color-accent-hover'),
        // 'accent-50': withOpacity('--color-accent-50'),
        // 'accent-100': withOpacity('--color-accent-100'),
        // 'accent-200': withOpacity('--color-accent-200'),
        // 'accent-300': withOpacity('--color-accent-300'),
        // 'accent-400': withOpacity('--color-accent-400'),
        // 'accent-500': withOpacity('--color-accent-500'),
        // 'accent-600': withOpacity('--color-accent-600'),
        // 'accent-700': withOpacity('--color-accent-700'),
        "btn-start-color": "#FFB82B",
        "btn-end-color": "#FF692B",
      },
    },
  },
  plugins: [],
};
