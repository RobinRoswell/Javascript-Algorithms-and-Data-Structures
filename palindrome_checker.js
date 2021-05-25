function palindrome(str) {
  let s = str
    .toLowerCase()
    .replace(/\W/g, "")
    .replace(/_/g, "")
  let a = s
    .split("")
    .reverse()
    .join("")
  if (a == s) {
    return true
  } else {
    return false
  }
}
