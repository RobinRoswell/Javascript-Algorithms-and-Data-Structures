function convertToRoman(num) {
 num = num.toString()
 let arr = num.split("")
 let output = []
 const tho = [null, "M", "MM", "MMM"]
 const hun = [null, "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
 const ten = [null, "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
 const one = [null, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
 if (arr.length == 4) {
   output.push(tho[arr[0]])
   output.push(hun[arr[1]])
   output.push(ten[arr[2]])
   output.push(one[arr[3]])
 }
 if (arr.length == 3) {
   output.push(hun[arr[0]])
   output.push(ten[arr[1]])
   output.push(one[arr[2]])
 }
 if (arr.length == 2) {
   output.push(ten[arr[0]])
   output.push(one[arr[1]])
 }
 if (arr.length == 1) {
   output.push(one[arr[0]])
 }
 return output.join("")
}
