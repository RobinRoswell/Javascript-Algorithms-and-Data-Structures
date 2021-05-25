function rot13(str) {
  const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const k = "NOPQRSTUVWXYZABCDEFGHIJKLM"
  var output = []
  for (let char of str) {
    if (a.indexOf(char) != -1) {
    output.push(k[a.indexOf(char)])
    }
    if (a.indexOf(char) == -1) {
    output.push(char)
    }
  }
  output = output.join("")
  return output;
}
