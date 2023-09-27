import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';

import {
	DropdownSize,
	DropdownTone,
} from '@components/Dropdown/Dropdown.types';

export type DropdownItemColor =
	| 'blue'
	| 'red'
	| 'green'
	| 'yellow'
	| 'purple'
	| 'gray'
	| 'dark'
	| 'black';

export interface DropdownItemProps extends ComponentPropsWithRef<'button'> {
	color?: DropdownItemColor;
	size?: DropdownSize;
	tone?: DropdownTone;
	tabIndex?: number;
}

export type DropdownItemComponent =
	ForwardRefExoticComponent<DropdownItemProps> & {
		displayName?: string;
	};
