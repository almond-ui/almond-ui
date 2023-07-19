import * as styles from './styles';
import { Provider } from 'react';
export type Theme = {
    components: ThemeComponents;
};
type ThemeComponents = {
    Accordion: {
        base: typeof styles.accordionStyles.base;
        body: typeof styles.accordionStyles.body;
        header: typeof styles.accordionStyles.header;
        icon: typeof styles.accordionStyles.icon;
    };
    Alert: {
        base: typeof styles.alertStyles.base;
        infoWrapper: typeof styles.alertStyles.infoWrapper;
        iconWrapper: typeof styles.alertStyles.iconWrapper;
        dismissIcon: typeof styles.alertStyles.dismissIcon;
        title: typeof styles.alertStyles.title;
        text: typeof styles.alertStyles.text;
    };
    Avatar: {
        base: typeof styles.avatarStyles.base;
        status: typeof styles.avatarStyles.status;
        image: typeof styles.avatarStyles.image;
        group: typeof styles.avatarStyles.group;
    };
    Badge: typeof styles.badgeStyles.base;
    Button: {
        base: typeof styles.buttonStyles.base;
        chevron: typeof styles.buttonStyles.chevron;
        spinner: typeof styles.buttonStyles.spinner;
    };
    Card: {
        base: typeof styles.cardStyles.base;
        body: typeof styles.cardStyles.body;
        header: typeof styles.cardStyles.header;
        image: typeof styles.cardStyles.image;
        footer: typeof styles.cardStyles.footer;
    };
    Checkbox: {
        base: typeof styles.checkBoxStyles.base;
        label: typeof styles.checkBoxStyles.label;
        description: typeof styles.checkBoxStyles.description;
        error: typeof styles.checkBoxStyles.error;
    };
    Combobox: {
        base: typeof styles.comboboxStyles.base;
        wrapper: typeof styles.comboboxStyles.wrapper;
        noResults: typeof styles.comboboxStyles.noResults;
        list: typeof styles.comboboxStyles.list;
        icon: typeof styles.comboboxStyles.icon;
        leftIconWrapper: typeof styles.comboboxStyles.leftIconWrapper;
        rightIconWrapper: typeof styles.comboboxStyles.rightIconWrapper;
        group: typeof styles.comboboxStyles.group;
        button: typeof styles.comboboxOptionStyles.button;
        optionIcon: typeof styles.comboboxOptionStyles.optionIcon;
        optionWrapper: typeof styles.comboboxOptionStyles.optionWrapper;
        infoWrapper: typeof styles.comboboxOptionStyles.infoWrapper;
        label: typeof styles.comboboxOptionStyles.label;
        description: typeof styles.comboboxOptionStyles.description;
    };
    Drawer: typeof styles.drawerStyles.base;
    Dropdown: {
        base: typeof styles.dropdownStyles.base;
        arrow: typeof styles.dropdownStyles.arrow;
        content: typeof styles.dropdownStyles.content;
        divider: typeof styles.dropdownStyles.divider;
        item: typeof styles.dropdownStyles.item;
        label: typeof styles.dropdownStyles.label;
    };
    FormControl: {
        base: typeof styles.formControlStyles.base;
        label: typeof styles.formControlStyles.label;
        text: typeof styles.formControlStyles.text;
    };
    Image: {
        base: typeof styles.imageStyles.base;
        caption: typeof styles.imageStyles.caption;
        wrapper: typeof styles.imageStyles.wrapper;
    };
    Input: {
        base: typeof styles.inputStyles.base;
        wrapper: typeof styles.inputStyles.wrapper;
        icon: typeof styles.inputStyles.icon;
        leftIconWrapper: typeof styles.inputStyles.leftIconWrapper;
        rightIconWrapper: typeof styles.inputStyles.rightIconWrapper;
    };
    InputGroup: {
        base: typeof styles.inputGroupStyles.base;
        text: typeof styles.inputGroupStyles.text;
    };
    Modal: typeof styles.modalStyles.base;
    Overlay: typeof styles.overlayStyles.base;
    Popover: {
        base: typeof styles.popoverStyles.base;
        arrow: typeof styles.popoverStyles.arrow;
    };
    Progress: {
        base: typeof styles.progressStyles.base;
        bar: typeof styles.progressStyles.bar;
        wrapper: typeof styles.progressStyles.wrapper;
        label: typeof styles.progressStyles.label;
        description: typeof styles.progressStyles.description;
        stripe: typeof styles.progressStyles.stripe;
    };
    Radio: {
        base: typeof styles.radioStyles.base;
        label: typeof styles.radioStyles.label;
        description: typeof styles.radioStyles.description;
        error: typeof styles.radioStyles.error;
        group: typeof styles.radioStyles.group;
    };
    Ribbon: typeof styles.ribbonStyles.base;
    Select: {
        base: typeof styles.selectStyles.base;
        wrapper: typeof styles.selectStyles.wrapper;
        icon: typeof styles.selectStyles.icon;
        leftIconWrapper: typeof styles.selectStyles.leftIconWrapper;
        rightIconWrapper: typeof styles.selectStyles.rightIconWrapper;
    };
    Selector: {
        base: typeof styles.selectorStyles.base;
        separator: typeof styles.selectorStyles.separator;
        tab: typeof styles.selectorStyles.tab;
        wrapper: typeof styles.selectorStyles.wrapper;
    };
    Spinner: typeof styles.spinnerStyles.base;
    Switch: {
        base: typeof styles.switchStyles.base;
        inner: typeof styles.switchStyles.inner;
        label: typeof styles.switchStyles.label;
        description: typeof styles.switchStyles.description;
        error: typeof styles.switchStyles.error;
    };
    Table: {
        wrapper: typeof styles.tableStyles.wrapper;
        table: typeof styles.tableStyles.table;
        tbody: typeof styles.tableStyles.tbody;
        thead: typeof styles.tableStyles.thead;
        tfoot: typeof styles.tableStyles.tfoot;
        tr: typeof styles.tableStyles.tr;
        td: typeof styles.tableStyles.td;
        th: typeof styles.tableStyles.th;
    };
    Tabs: {
        wrapper: typeof styles.tabStyles.wrapper;
        tab: typeof styles.tabStyles.tab;
        list: typeof styles.tabStyles.list;
    };
    Text: typeof styles.textStyles.base;
    Textarea: typeof styles.textareaStyles.base;
    Tooltip: {
        base: typeof styles.tooltipStyles.base;
        arrow: typeof styles.tooltipStyles.arrow;
    };
};
export type ThemeContextType = {
    theme: Theme;
};
export declare const ThemeProvider: Provider<ThemeContextType>;
export declare function useTheme(): Theme;
export declare function useComponentTheme<C extends keyof ThemeComponents>(component: C): ThemeComponents[C];
export {};
//# sourceMappingURL=theme.context.d.ts.map