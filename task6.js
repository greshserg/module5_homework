let arr = ["B", "B", "B"];
let i = 0, j = 1
let ident = false
while (i <= arr.length - 1) {
  if (arr[i] == arr[j]) {
    ident = true;
  }
  i = j; j += 1;
}
console.log(ident)