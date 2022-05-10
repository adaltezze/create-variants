/**
 * @template T
 * @typedef {{ [key: string]: T }} Dictionary
 */

/**
 * @param {string} variantPropName
 * @param {Dictionary<((props: any) => any)|any>} variants
 * @return {(props: Object) => Object}
 * @example```
 * const variants = createVariants('variant', {
 *   primary: { color: '#fff' },
 *   secondary: { color: '#eee' },
 *   danger: { color: '#0ff' },
 * });
 *
 * const variants = createVariants('variant', {
 *   primary: ({ theme }) => ({ color: theme.palette.color1 }),
 *   secondary: ({ theme }) => ({ color: theme.palette.color2 }),
 *   danger: ({ theme }) => ({ color: theme.palette.color3 }),
 * });
 * ```
 */
export const createVariants = (variantPropName, variants) => {
  return props => {
    const variant = props[variantPropName];
    return typeof variants[variant] === 'function'
      ? variants[variant](props)
      : variants[variant];
  };
};
