const splitString = (digits: string, start: number) => {
  let res = digits.slice(0, start)

  while(digits.length > start) {
    const end = start + 3

    res += ' ' + digits.slice(start, end)

    start = end
  }

  return res
}

export const formatPhoneNumber = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 12)

  if (!digits && !value.startsWith('+')) return ''

  let result = '+'
  const countryCodeLength = digits.length <= 10 ? 1 : digits.length === 11 ? 2 : 3

  result += splitString(digits, countryCodeLength)

  return result
}