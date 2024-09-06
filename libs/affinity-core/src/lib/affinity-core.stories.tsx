import type { Meta, StoryObj } from '@storybook/react';
import { AffinityCore } from './affinity-core';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof AffinityCore> = {
  component: AffinityCore,
  title: 'AffinityCore',
};
export default meta;
type Story = StoryObj<typeof AffinityCore>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to AffinityCore!/gi)).toBeTruthy();
  },
};
