import localFont from "next/font/local"

export const boschIconFont = localFont({
  src: [
    {
      path: "../public/fonts/bosch_icon.woff2"
    }
  ],
  display: "swap",
  variable: "--font-bosch-icon"
})

export const boschUiIconFont = localFont({
  src: [
    {
      path: "../public/fonts/bosch_ui_icon.woff2"
    },
    {
      path: "../public/fonts/bosch_ui_icon_rtl.woff2"
    },
    {
      path: "../public/fonts/bosch_ui_icon.woff"
    },
    {
      path: "../public/fonts/bosch_ui_icon_rtl.woff"
    }
  ],
  display: "swap",
  variable: "--font-bosch-ui-icon"
})

export const boschsans = localFont({
  src: [
    {
      path: "../public/fonts/boschsans_regular.woff2",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/boschsans_regularItalic.woff2",
      weight: "400",
      style: "italic"
    },
    {
      path: "../public/fonts/boschsans_bold.woff2",
      weight: "700",
      style: "normal"
    },
    {
      path: "../public/fonts/boschsans_boldItalic.woff2",
      weight: "700",
      style: "italic"
    },
    {
      path: "../public/fonts/boschsans_regular.woff",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/fonts/boschsans_regularItalic.woff",
      weight: "400",
      style: "italic"
    },
    {
      path: "../public/fonts/boschsans_bold.woff",
      weight: "700",
      style: "normal"
    },
    {
      path: "../public/fonts/boschsans_boldItalic.woff",
      weight: "700",
      style: "italic"
    }
  ],
  display: "swap",
  variable: "--font-bosch-sans"
})