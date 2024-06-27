import _ from "lodash";
import "./style.css";
import rasm1 from "./budget.png";
import data from "./data.json";

console.log(data);

function getComponent() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Apple", "Banana", "Apelsin"], ", ");
  element.classList.add("big");

  const myImage = new Image();
  myImage.src = rasm1;

  element.appendChild(myImage);
  return element;
}

const getListUsers = () => {
  const list = document.createElement("ul");
  list.classList = "list"

  data.users.map((user, index) => {
    const item = document.createElement("li");
    item.innerHTML = `${index + 1}. ${user.name}`;

    list.appendChild(item);
  });
  return list;
};

document.body.appendChild(getComponent());

document.body.appendChild(getListUsers());
