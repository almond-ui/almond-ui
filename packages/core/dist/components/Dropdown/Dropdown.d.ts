/// <reference types="react" />
import { DropdownProps } from '../Dropdown/Dropdown.types';
declare const Dropdown: import("react").ForwardRefExoticComponent<DropdownProps> & {
    displayName?: string | undefined;
} & {
    Trigger: import("./DropdownTrigger/DropdownTrigger.types").DropdownTriggerComponent;
    Content: import("./DropdownContent/DropdownContent.types").DropdownContentComponent;
    Label: import("./DropdownLabel/DropdownLabel.types").DropdownLabelComponent;
    Divider: (props: import("./DropdownDivider/DropdownDivider.types").DropdownDividerProps) => JSX.Element;
    Item: import("./DropdownItem/DropdownItem.types").DropdownItemComponent;
};
export default Dropdown;
//# sourceMappingURL=Dropdown.d.ts.map