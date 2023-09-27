import * as React from 'react';

import { Checkbox, CheckboxProps } from '@almond-ui/core';

export const CheckboxCode = (props: any) => {
	const { size, color, disabled, description, error, tone, radius, withRing } =
		props;

	const defaultProps = {
		color: 'dark',
		disabled: false,
		error: '',
		description: '',
		radius: 'md',
		size: 'md',
		tone: 'solid',
		withRing: true,
	};

	const attributes = [
		'label="Click me!"',
		color !== defaultProps.color ? `color="${color}"` : null,
		error !== defaultProps.error ? `error="${error}"` : null,
		description !== defaultProps.description
			? `description="${description}"`
			: null,
		tone !== defaultProps.tone ? `tone="${tone}"` : null,
		radius !== defaultProps.radius ? `radius="${radius}"` : null,
		size !== defaultProps.size ? `size="${size}"` : null,
		disabled !== defaultProps.disabled ? `disabled={${disabled}}` : null,
		withRing !== defaultProps.withRing ? `withRing={${withRing}}` : null,
	];

	return `import { Checkbox } from '@almond-ui/core';

function App() {
  return (
    <Checkbox ${attributes.filter(Boolean).join(' ')} />
  );
}
`.trim();
};

export const CheckboxExample = (props: CheckboxProps) => {
	return <Checkbox label='Click me!' {...props} />;
};
