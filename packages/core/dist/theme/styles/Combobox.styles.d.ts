declare const comboboxStyles: {
    base: (props?: ({
        color?: "blue" | "purple" | "gray" | "dark" | "black" | null | undefined;
        size?: "sm" | "md" | "lg" | "xs" | null | undefined;
        tone?: "solid" | "light" | "transparent" | null | undefined;
        radius?: "none" | "sm" | "base" | "md" | "lg" | null | undefined;
        shadow?: "none" | "sm" | "base" | "md" | "lg" | null | undefined;
        hasLeftIcon?: boolean | null | undefined;
        hasRightIcon?: boolean | null | undefined;
        hasLeftElement?: boolean | null | undefined;
        hasRightElement?: boolean | null | undefined;
        validation?: "none" | "valid" | "invalid" | "warning" | null | undefined;
        withRing?: boolean | null | undefined;
        disabled?: boolean | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
    wrapper: (props?: ({
        disabled?: boolean | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
    noResults: (props?: ({
        size?: "sm" | "md" | "lg" | "xs" | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
    list: (props?: ({
        overflown?: boolean | null | undefined;
        open?: boolean | null | undefined;
        size?: "sm" | "md" | "lg" | "xs" | null | undefined;
        mode?: "tight" | "spacey" | null | undefined;
        radius?: "none" | "sm" | "base" | "md" | "lg" | "full" | null | undefined;
        shadow?: "none" | "sm" | "base" | "md" | "lg" | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
    icon: (props?: ({
        tone?: "solid" | "light" | "transparent" | null | undefined;
        size?: "sm" | "md" | "lg" | "xs" | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
    leftIconWrapper: (props?: ({
        size?: "sm" | "md" | "lg" | "xs" | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
    rightIconWrapper: (props?: ({
        size?: "sm" | "md" | "lg" | "xs" | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
    group: (props?: ({
        hidden?: boolean | null | undefined;
        mode?: "tight" | "spacey" | null | undefined;
        weight?: "black" | "light" | "bold" | "thin" | "extraLight" | "normal" | "medium" | "semiBold" | "extraBold" | null | undefined;
        size?: "sm" | "md" | "lg" | "xs" | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
};
declare const comboboxOptionStyles: {
    button: (props?: ({
        hidden?: boolean | null | undefined;
        optionColor?: "blue" | "red" | "green" | "yellow" | "purple" | "gray" | "dark" | "black" | null | undefined;
        mode?: "tight" | "spacey" | null | undefined;
        radius?: "none" | "sm" | "base" | "md" | "lg" | null | undefined;
        size?: "sm" | "md" | "lg" | "xs" | null | undefined;
        selected?: boolean | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
    optionWrapper: (props?: import("class-variance-authority/dist/types").ClassProp | undefined) => string;
    infoWrapper: (props?: import("class-variance-authority/dist/types").ClassProp | undefined) => string;
    label: (props?: ({
        disabled?: boolean | null | undefined;
        selected?: boolean | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
    description: (props?: ({
        disabled?: boolean | null | undefined;
        selected?: boolean | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
    optionIcon: (props?: ({
        size?: "sm" | "md" | "lg" | "xs" | null | undefined;
    } & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
};
export { comboboxStyles, comboboxOptionStyles };
//# sourceMappingURL=Combobox.styles.d.ts.map