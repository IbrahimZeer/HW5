const addBtn = document.querySelector(".form");
const htmlList = document.querySelector(".card .lists");
let list = [];
addBtn.onsubmit = (event) => {
  event.preventDefault();
  const elements = event.target.elements[0].value;
  list += `
    <div class="list" onclick="addClass(this)">
      <input type="checkbox"/>
      <span>${elements}</span>
    </div>
  `;
  htmlList.innerHTML = list;
};

addClass = (c) => {
  c.classList.toggle("clicked");
};
