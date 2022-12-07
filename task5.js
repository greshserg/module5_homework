let arr = [1,2,3, 'f', 'g'];
let result = arr.map(function(item, index, array) {
  console.log(item)
  return item + 1
});