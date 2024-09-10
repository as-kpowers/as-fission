import type { Meta, StoryObj } from '@storybook/react';
import { AffinityStorybook } from './affinity-storybook';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof AffinityStorybook> = {
  component: AffinityStorybook,
  title: 'AffinityStorybook',
};
export default meta;
type Story = StoryObj<typeof AffinityStorybook>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to AffinityStorybook!/gi)).toBeTruthy();
  },
};
