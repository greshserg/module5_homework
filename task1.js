let num = +prompt()
if (typeof num == "number" && isNaN(num) === false)  {
  if (num % 2 === 0) {
    alert("четное")
  }
  else {
    alert("нечетное")
  }
}
else {
  alert('Упс, кажется, вы ошиблись')
}