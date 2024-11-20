import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 *
 * @param {ClassValue[]} inputs - The classes to merge.
 * @return {string} The merged classes.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
