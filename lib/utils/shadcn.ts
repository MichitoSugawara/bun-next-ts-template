import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * 入力されたクラス値をマージして返します。
 * @param {ClassValue[]} inputs - マージするクラス値の配列
 * @returns {string} マージされたクラス値
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
