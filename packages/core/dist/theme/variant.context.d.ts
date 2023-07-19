import { accordionVariants } from './variants/Accordion.variants';
import { alertVariants } from './variants/Alert.variants';
import { buttonVariants } from './variants/Button.variants';
import { Provider } from 'react';
import { badgeVariants, ribbonVariants, textVariants } from './variants';
export type Variant = {
    components: VariantComponents;
};
type VariantComponents = {
    Accordion: typeof accordionVariants;
    Alert: typeof alertVariants;
    Badge: typeof badgeVariants;
    Button: typeof buttonVariants;
    Text: typeof textVariants;
    Ribbon: typeof ribbonVariants;
};
export type VariantContextType = {
    variant: Variant;
};
export declare const VariantProvider: Provider<VariantContextType>;
export declare function useVariant(): Variant;
export declare function useComponentVariant<C extends keyof VariantComponents>(component: C, componentVariant?: keyof VariantComponents[C]): VariantComponents[C][keyof VariantComponents[C]] | {};
export {};
//# sourceMappingURL=variant.context.d.ts.map