import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges multiple Tailwind classes with conflict resolution.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Conditionally returns a class string.
 */
export function conditionalClass(
  condition: boolean,
  trueClass: string,
  falseClass: string = ""
): string {
  return condition ? trueClass : falseClass;
}

/**
 * Joins non-null or non-undefined class names.
 */
export function joinClass(...classes: (string | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Toggles a class name inside a class string.
 */
export function toggleClass(
  base: string,
  condition: boolean,
  toggledClass: string
): string {
  return condition ? `${base} ${toggledClass}` : base;
}

/**
 * Converts a class string into an array of unique class names.
 */
export function classListToArray(classString: string): string[] {
  return [...new Set(classString.split(/\s+/).filter(Boolean))];
}

/**
 * Removes a specific class from a class string.
 */
export function removeClass(classString: string, classToRemove: string): string {
  return classListToArray(classString).filter(cls => cls !== classToRemove).join(" ");
}

/**
 * Appends a class to a class string if it is not already present.
 */
export function appendClass(classString: string, newClass: string): string {
  const classList = classListToArray(classString);
  if (!classList.includes(newClass)) {
    classList.push(newClass);
  }
  return classList.join(" ");
}

/**
 * Prepends a class to a class string if it is not already present.
 */
export function prependClass(classString: string, newClass: string): string {
  const classList = classListToArray(classString);
  if (!classList.includes(newClass)) {
    classList.unshift(newClass);
  }
  return classList.join(" ");
}

/**
 * Checks if a class exists in a class string.
 */
export function hasClass(classString: string, className: string): boolean {
  return classListToArray(classString).includes(className);
}

/**
 * Toggles a class on/off within a class string.
 */
export function toggleClassValue(classString: string, className: string): string {
  const classList = classListToArray(classString);
  if (classList.includes(className)) {
    return classList.filter(cls => cls !== className).join(" ");
  }
  return [...classList, className].join(" ");
}

/**
 * Merges multiple class strings with conflict resolution.
 */
export function mergeClassSet(...classStrings: string[]): string {
  return [...new Set(classStrings.flatMap(cls => cls.split(/\s+/)).filter(Boolean))].join(" ");
}

// Added a helper function to toggle class visibility based on a condition

/**
 * Toggles class visibility based on a boolean condition.
 */
export function toggleClassVisibility(
  classString: string,
  condition: boolean,
  className: string
): string {
  return condition ? `${classString} ${className}` : classString;
}
// Added a function to remove multiple classes from a class string

/**
 * Removes multiple classes from a class string.
 */
export function removeClasses(classString: string, classesToRemove: string[]): string {
  const classList = classListToArray(classString);
  return classList.filter(cls => !classesToRemove.includes(cls)).join(" ");
}

// Added function to merge class strings while handling duplicates

/**
 * Merges multiple class strings while removing duplicates.
 */
export function mergeClassStrings(...classStrings: string[]): string {
  const uniqueClasses = new Set(classStrings.flatMap(cls => cls.split(/\s+/)).filter(Boolean));
  return Array.from(uniqueClasses).join(" ");
}
