import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;
type StoryType = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: StoryType = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Default Button',
  },
};

export const Destructive: StoryType = {
  args: {
    variant: 'destructive',
    size: 'default',
    children: 'Destructive Button',
  },
};

export const Outline: StoryType = {
  args: {
    variant: 'outline',
    size: 'default',
    children: 'Outline Button',
  },
};

export const Secondary: StoryType = {
  args: {
    variant: 'secondary',
    size: 'default',
    children: 'Secondary Button',
  },
};

export const Ghost: StoryType = {
  args: {
    variant: 'ghost',
    size: 'default',
    children: 'Ghost Button',
  },
};

export const Link: StoryType = {
  args: {
    variant: 'link',
    size: 'default',
    children: 'Link Button',
  },
};

export const Small: StoryType = {
  args: {
    variant: 'default',
    size: 'sm',
    children: 'Small Button',
  },
};

export const Large: StoryType = {
  args: {
    variant: 'default',
    size: 'lg',
    children: 'Large Button',
  },
};

export const Icon: StoryType = {
  args: {
    variant: 'default',
    size: 'icon',
    children: 'Icon Button',
  },
};
