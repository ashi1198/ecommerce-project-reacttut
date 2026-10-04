export function formatMoney(amountCents) {
  return `$${(amountCents.priceCents / 100).toFixed(2)}`;
}
//first dollar sign is for currency and second dollar sign is for string interpolation. toFixed(2) is used to round the number to 2 decimal places.
