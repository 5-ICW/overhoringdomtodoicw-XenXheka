const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const selectWinkel = document.getElementById("selectWinkel");
const taken = [
  {
    id: 1,
    taak: "Studeren",
  },
  {
    id: 2,
    taak: "Winkelen",
  },
  {
    id: 3,
    taak: "taken afwerken",
  },
];

const winkels = [
  {
    id: 1,
    winkel: "Delhaize",
  },
  {
    id: 2,
    winkel: "Aldi",
  },
  {
    id: 3,
    winkel: "Carfour",
  },
];

winkels.forEach((winkel) => {
  const winkelOptions = document.createElement("option");
  winkelOptions.innerText = winkel.winkel;
  selectWinkel.appendChild(winkelOptions);
});
const winkel = selectWinkel.addEventListener("change", function (e) {
  const target = e.target;
  console.log(target.value);
});
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = input.value.trim();
  if (text !== "") {
    const li = document.createElement("li");
    li.textContent = `${text} [${winkel}]`;
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
    list.appendChild(li);
    input.value = "";
  }
});

taken.forEach((taak) => {
  const taakLi = document.createElement("li");
  taakLi.innerText = taak.taak;
  taakLi.value = taak.taak;
  list.appendChild(taakLi);
  taakLi.addEventListener("click", function () {
    taakLi.classList.toggle("completed");
  });
});
