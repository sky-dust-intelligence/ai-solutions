module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}'], // Paths to your files
  theme: {
    extend: {
      // Extend Tailwind theme here if necessary
      // ...
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: { // This is your custom theme
          "primary":    "#00f815",
          "secondary":  "#4f46e5",
          "accent":     "#22c55e",
          "neutral":    "#3d4451",
          "base-100":   "#ffffff",
          "info":       "#3b82f6",
          "success":    "#84cc16",
          "warning":    "#f59e0b",
          "error":      "#e11d48",
        }
      },
      // You can add more custom themes here if needed
    ],
    base: false, // Disables the default light and dark themes
  },
  plugins: [
    require('daisyui'), // Adding daisyUI plugin
    require('@tailwindcss/typography'), // Official Tailwind typography plugin
    // ... Add any other plugins here
  ],
  // Add any additional configuration that might be needed
};
