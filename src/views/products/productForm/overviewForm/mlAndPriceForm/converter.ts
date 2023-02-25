export function convertMLAndPriceDara(data: any) {
  return data.reduce((a: any, b: any) => ({...a, [b.ml]: b}), {});
}