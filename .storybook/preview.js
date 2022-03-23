import { ThemeProvider } from "styled-components";
import { themes } from "@storybook/theming";
import { DocsPage, DocsContainer } from "@storybook/addon-docs";
import { defaultTheme } from "../src/utils/theme";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    theme: themes.dark,
    container: DocsContainer,
    page: DocsPage,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
