type InputType<T extends string> = {
  type?: 'select';
  options?: string | string[] | readonly string[];
  description?: string;
  defaultValue?: T;
};

type ArgTypes<K> = Partial<Record<keyof K, any>>;

export const generateStorybookControl = <
  ComponentProps extends ArgTypes<ComponentProps>,
  DefaultValue extends readonly string[] = readonly string[]
>(
  componentProps: keyof ComponentProps,
  { type, options, defaultValue, description }: InputType<DefaultValue[number]>
) => ({
  [componentProps]: {
    control: {
      type,
    },
    options,
    defaultValue,
    description,
  },
});
