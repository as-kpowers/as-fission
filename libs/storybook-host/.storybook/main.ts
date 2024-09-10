import type { StorybookConfig } from '@storybook/react-vite';
import { mainConfig } from '@as-fission/common-storybook';

const config: StorybookConfig = {
  ...mainConfig,
  stories: [
    '../src/lib/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    '../../affinity/core/src/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
  ],
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
