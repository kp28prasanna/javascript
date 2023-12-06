function counter() {
  let count = 0;
  document.getElementById("click").addEventListener("click", function () {
    console.log(++count);
  });
}
counter()