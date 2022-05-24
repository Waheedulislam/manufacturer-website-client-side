module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#176F6B",

          "secondary": "#FFC000",

          "accent": "#FFEDD5",

          "neutral": "#F3F4F6",

          "base-100": "#1F2937",

          "info": "#98A8DD",

          "success": "#F59E0B",

          "warning": "#DF7E07",

          "error": "#FB7185",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
