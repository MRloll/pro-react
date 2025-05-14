/**
 * Truncates a given string to a given length, adding an ellipsis if necessary.
 * @param {string} text The string to truncate.
 * @param {number} maxLength The maximum length of the returned string.
 * @returns {string} The truncated string.
 */
export function textSlicer(text: string, maxLength: number) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}
