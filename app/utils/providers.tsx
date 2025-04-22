"use client";
import { FC, memo, PropsWithChildren } from "react";
import { UIProvider, extendTheme } from "@yamada-ui/react";

const customTheme = extendTheme({
  // semantics: {
  //   colors: {
  //     primary: "pink.500",
  //   },
  //   colorSchemes: {
  //     primary: "pink",
  //   },
  // },
  spaces: {
    xs: "1rem",
    sm: "1.25rem",
    md: "1.5rem",
    lg: "1.75rem",
    xl: "2rem",
  },
})();

export const Providers: FC<PropsWithChildren> = memo(({ children }) => {
  return <UIProvider theme={customTheme}>{children}</UIProvider>;
});

Providers.displayName = "Providers";
