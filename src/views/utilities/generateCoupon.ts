export const generateCoupon = (length: number) => {
  let key = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  const array = new Uint8Array(length);
  window.crypto.getRandomValues(array);

  for (let i = 0; i < length; i++) {
    key += characters[array[i] % charactersLength];
  }
  return key;
};
