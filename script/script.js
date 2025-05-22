const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const selectWinkel = document.getElementById("selectWinkel");
const taken = [
  // lijst voor de taken
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
  //lijst voor de winkels
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
let lijst = [];
winkels.forEach((winkel) => {
  // opties maken van de winkels
  const winkelOptions = document.createElement("option");
  winkelOptions.innerText = winkel.winkel;
  winkelOptions.value = winkel.winkel;
  selectWinkel.appendChild(winkelOptions);
});
function winkelSelecteeren() {
  //Selecteren van winkel en bij toevoegen van taak de winkel zien
  // je zal de winkel pas kunnen zien als je eerst de winkel aldi of carfour neemt.
  selectWinkel.addEventListener("change", function (e) {
    const target = e.target;
    lijst.push(target.value);
    console.log(lijst);
  });
}
winkelSelecteeren();
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = input.value.trim();
  if (text !== "") {
    const li = document.createElement("li");
    li.textContent = `${text} [${lijst}]`;
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
    list.appendChild(li);
    input.value = "";
    lijst = [];
  }
  console.log(lijst);
});

taken.forEach((taak) => {
  // tonen van taken die vooraf zijn gemaakt.
  const taakLi = document.createElement("li");
  taakLi.innerText = taak.taak;
  taakLi.value = taak.taak;
  list.appendChild(taakLi);
  taakLi.addEventListener("click", function () {
    taakLi.classList.toggle("completed");
  });
});
