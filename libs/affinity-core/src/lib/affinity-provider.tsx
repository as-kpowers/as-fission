import { ThemeProvider } from 'styled-components';

interface ThemeConfig {
  color: string;
  space?: number;
}

const defaultTheme: ThemeConfig = {
  color: 'wow!',
};

const AffinityProvider = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme?: ThemeConfig;
}) => {
  // TODO: Proper theme merge
  return (
    <ThemeProvider
      theme={{
        ...defaultTheme,
        ...theme,
      }}
    >
      {children}
    </ThemeProvider>
  );
};
