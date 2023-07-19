import { ReactNode } from 'react';
export declare function createElementContext<ContextValue>(errorMessage: string): readonly [({ children, value }: {
    value: ContextValue;
    children: ReactNode;
}) => JSX.Element, () => ContextValue & ({} | undefined)];
//# sourceMappingURL=use-element-context.hook.d.ts.map