import { render } from '@testing-library/react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

// https://testing-library.com/docs/react-testing-library/setup/#custom-render

const theme: DefaultTheme = {
  colors: {
    background: '',
    text: '',
  },
};

const Providers: React.FC = props => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

const customRender = (ui: React.ReactElement) =>
  render(ui, { wrapper: Providers });

export * from '@testing-library/react';

export { customRender as render };
