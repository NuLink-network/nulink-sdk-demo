// eslint-disable-next-line
import { default as dayjs } from "dayjs";

export const formatDate = (date: number) => dayjs(date).format("MMMM D, YYYY h:mm A");

export const addUnitFormate = (amount: number | string = 0) => `${Number(amount) * 1.0 / 1e18} MATIC`;

export const toDisplayAddress = (address: string | null | undefined) => {
  if (!address) return '~'
  return `${address.substring(0, 4)}···${address.substring(
    address.length - 4
  )}`
}

/**
 * `0x345678901234567890` -> `0x34567....7890`
 * @param input 
 * @param number 
 * @returns 
 */
export const ellipsisFormat = (input: string | number, number = 7) => {
  var arr = String(input).split("");
  arr.splice(number, arr.length - number - 4, "....");
  return arr.join("");
};

export const trim = (input: string) => {
  return input.trim();
};

export const toDisplay = (num: string | number | null, fixed: number = 2) => {
  if (!num) return '~'
  num = num.toString()
  const index = num.indexOf('.')
  if (index !== -1) {
    num = num.substring(0, fixed + index + 1)
  } else {
    num = num.substring(0)
  }
  return Number(parseFloat(num).toFixed(fixed))
}
