export const isDisabledOption = (
  option: string,
  options: string[],
  max: number,
): boolean => {
  if (options) {
    const found = options.find((r: string) => r === option)

    if (found) {
      return false
    }

    if (options.length >= max) {
      return true
    } else {
      return false
    }
  }

  return false
}
