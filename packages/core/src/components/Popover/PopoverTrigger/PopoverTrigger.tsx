import { usePopoverContext } from '@components/Popover/Popover.context';
import {
  PopoverTriggerComponent,
  PopoverTriggerProps,
} from '@components/Popover/PopoverTrigger/PopoverTrigger.types';
import { useMergeRefs } from '@floating-ui/react';
import {
  Children,
  cloneElement,
  ForwardedRef,
  forwardRef,
  ReactElement,
} from 'react';

const PopoverTrigger: PopoverTriggerComponent = forwardRef<
  HTMLDivElement,
  PopoverTriggerProps
>((props: PopoverTriggerProps, ref?: ForwardedRef<HTMLDivElement>) => {
  const { children } = props;
  const { reference, getReferenceProps } = usePopoverContext();
  const child = Children.only(children) as ReactElement;
  const childRef = useMergeRefs([reference, ref || null]);

  const triggerElement = cloneElement(child, {
    ref: childRef,
    ...child.props,
    ...getReferenceProps,
  });

  return <>{triggerElement}</>;
});

PopoverTrigger.displayName = 'PopoverTrigger';

export { PopoverTrigger };
