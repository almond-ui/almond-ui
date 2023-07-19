import { ReactNode } from 'react';
export declare function createIndependentContext<ContextValue>(): readonly [({ children, value }: {
    value: ContextValue;
    children: ReactNode;
}) => JSX.Element, () => ContextValue];
//# sourceMappingURL=use-independent-context.hook.d.ts.map