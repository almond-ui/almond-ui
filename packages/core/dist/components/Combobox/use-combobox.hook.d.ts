/// <reference types="react" />
import { ComboboxProps } from '../Combobox/Combobox.types';
export declare function useCombobox({ offset }: Partial<ComboboxProps>): {
    x: number;
    y: number;
    reference: ((node: import("@floating-ui/react-dom").ReferenceType | null) => void) & ((node: import("@floating-ui/react").ReferenceType | null) => void);
    floating: ((node: HTMLElement | null) => void) & ((node: HTMLElement | null) => void);
    strategy: import("@floating-ui/react").Strategy;
    getFloatingProps: Record<string, unknown>;
    getReferenceProps: Record<string, unknown>;
    open: boolean;
    setOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
};
//# sourceMappingURL=use-combobox.hook.d.ts.map