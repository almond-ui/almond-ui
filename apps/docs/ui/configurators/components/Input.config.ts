import {
  InputCode,
  InputExample,
} from '@/ui/configurators/components/Input.example';

export const InputConfig = {
  example: InputExample,
  default: InputCode,
  state: {
    color: 'dark',
    disabled: false,
    loading: false,
    placeholder: 'This is just a placeholder...',
    radius: 'md',
    shadow: 'none',
    size: 'md',
    tone: 'light',
    type: 'text',
    validation: 'none',
    withRing: true,
  },
  options: [
    {
      label: 'Tone',
      name: 'tone',
      type: 'select',
      options: ['solid', 'light', 'transparent'],
    },
    {
      label: 'Color',
      name: 'color',
      type: 'color',
      colors: ['blue', 'purple', 'gray', 'dark', 'black'],
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
      options: ['none', 'sm', 'base', 'md'],
    },
    {
      label: 'Radius',
      name: 'radius',
      type: 'select',
      options: ['none', 'sm', 'base', 'md', 'lg', 'full'],
    },
    {
      label: 'Type',
      name: 'type',
      type: 'select',
      options: [
        'color',
        'datetime-local',
        'date',
        'email',
        'file',
        'number',
        'password',
        'range',
        'search',
        'text',
        'time',
      ],
    },
    {
      label: 'Disabled',
      name: 'disabled',
      type: 'switch',
    },
    {
      label: 'Loading',
      name: 'loading',
      type: 'switch',
    },
    {
      label: 'With ring',
      name: 'withRing',
      type: 'switch',
    },
    {
      label: 'Validation',
      name: 'validation',
      type: 'selector',
      options: ['none', 'invalid', 'valid', 'warning'],
    },
    {
      label: 'Placeholder',
      name: 'placeholder',
      type: 'input',
      placeholder: 'Input placeholder...',
    },
  ],
};
