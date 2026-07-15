import { twMerge } from "tailwind-merge";
import clsx from "clsx";

/**
 * Combines class names and merges Tailwind classes intelligently.
 * @param  {...any} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
