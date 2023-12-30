const input = document.querySelector("footer .boxEmail input");
const btn = document.querySelector("footer .boxEmail button");
const jsP = document.querySelector(".jsP");

btn.addEventListener("click", function () {
  const value = input.value;
  let bool = false;
  for (let i = 0; i < value.length; i++) {
    if ("@" === value[i]) {
      bool = true;
      break;
    }
  }
  if (!bool) {
    jsP.textContent = "Please enter a valid email address";
  } else {
    jsP.textContent = "";
  }
  input.value = "";
});
