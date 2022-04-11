let cont = document.getElementById("cont");
let limit = 20;
let pagecount = 1;

function getList() {
  for (let i = 0; i <= limit; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "text");
    div.innerHTML = `Student ${i}`;
    cont.append(div);
  }
}

getList();

function showList() {
  setTimeout(() => {
    getList();
  }, 300);
}

window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  // console.log(scrollHeight, scrollTop, clientHeight)
  if (scrollTop + clientHeight >= scrollHeight) {
    console.log("Hi a m at bottom");
    showList();
  }
});
