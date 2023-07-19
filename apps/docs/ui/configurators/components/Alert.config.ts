import { AlertCode, AlertExample } from '@/ui/configurators/components/Alert.example';

export const AlertConfig = {
  example: AlertExample,
  default: AlertCode,
  state: {
    accent: 'none',
    color: 'dark',
    dismissable: false,
    dismissableAnimation: true,
    radius: 'md',
    shadow: 'none',
    shadowColor: 'none',
    size: 'sm',
    tone: 'light',
    title: '',
  },
  options: [
    {
      label: 'Tone',
      name: 'tone',
      type: 'select',
      options: ['solid', 'light', 'outline'],
    },
    {
      label: 'Accent',
      name: 'accent',
      type: 'select',
      options: ['none', 'top', 'bottom', 'left', 'right'],
    },
    {
      label: 'Color',
      name: 'color',
      type: 'color',
      colors: ['white', 'blue', 'red', 'green', 'yellow', 'purple', 'gray', 'dark', 'black'],
    },
    {
      label: 'Size',
      name: 'size',
      type: 'selector',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    {
      label: 'Shadow',
      name: 'shadow',
      type: 'select',
      options: ['none', 'sm', 'base', 'md', 'lg', 'xl'],
    },
    {
      label: 'Shadow Color',
      name: 'shadowColor',
      type: 'color',
      colors: ['white', 'blue', 'red', 'green', 'yellow', 'purple', 'gray', 'dark', 'black'],
    },
    {
      label: 'Radius',
      name: 'radius',
      type: 'select',
      options: ['none', 'sm', 'base', 'md', 'lg', 'full'],
    },
    {
      label: 'Dismissable',
      name: 'dismissable',
      type: 'switch',
    },
    {
      label: 'Dismissable animation',
      name: 'dismissableAnimation',
      type: 'switch',
    },
    {
      label: 'Title',
      name: 'title',
      type: 'input',
    },
  ],
};
