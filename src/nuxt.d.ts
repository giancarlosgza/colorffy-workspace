import { NuxtModule } from '@nuxt/schema';
import { ColorffyLabelsInput } from './types/config';
export interface ModuleOptions {
    /**
     * BCP 47 locale for dates and numbers.
     * @default null
     */
    locale?: string | null;
    /**
     * A shipped language pack (`'en'`, `'es'`) or your own texts.
     * @default null
     */
    labels?: string | ColorffyLabelsInput | null;
}
declare const _default: NuxtModule<ModuleOptions, ModuleOptions, false>;
export default _default;
//# sourceMappingURL=nuxt.d.ts.map