import { loader } from "./loader";
import "./css/style.css"

const username = "fate1424";
const role = "developer";

const getUser = () => `${username} is good ${role}`;

class User {
  showText() {
    console.log("hello world!!!");
  }
}

new User().showText();
console.log(getUser());
console.log(loader);
