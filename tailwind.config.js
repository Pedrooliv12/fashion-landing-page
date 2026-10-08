const plugin = require("tailwindcss/plugin");

/**
 * Tokens da paleta: Constituição v1.1.0, Princípio II.
 * Não adicione cores fora desta lista (ver research.md §2).
 *
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ["./site/**/*.{html,js}"],
  future: {
    // `hover:` só vale em dispositivos com hover real; no toque, nada fica "preso" no hover
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        surface: "#F5F5F4",
        line: "#E7E5E4",
        muted: "#57534E",
        brand: {
          DEFAULT: "#DC2626",
          dark: "#B91C1C",
          light: "#EF4444",
        },
        whatsapp: "#25D366",
      },
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [
    // Dispositivos com mouse/trackpad: o botão "Garantir" desliza sobre a imagem (contracts §6)
    plugin(({ addVariant }) => {
      addVariant("pointer-fine", "@media (hover: hover) and (pointer: fine)");
    }),
  ],
};
