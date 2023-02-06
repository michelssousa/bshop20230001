export const onlyNumbers = (str: string) => str.replace(/[^0-9]/g, '')

export const onlyText = (str: string) => str.replace(/^([a-zA-Z0-9\u0600-\u06FF\u0660-\u0669\u06F0-\u06F9 _.-]+)$/, '')

export function formatCurrency(
  value: number,
  locale = 'pt-BR',
  currency = 'BRL',
): string {
  const formattedCurrency = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value);

  return formattedCurrency;
}

export type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};


