import HomeUi from "../controller";
import AcountView from "../controller/acount";
import LoginForm from "../controller/loginForm";
import SignUpView from "../controller/signup";

let main = document.getElementById("main");

const Routes = async (route) => {
  main.innerHTML = "";
  switch (route) {
    case "#/":
      main.appendChild(await HomeUi());
      return;
    case "#/login":
      //return console.log("Login");
      return main.appendChild(await LoginForm());
    case "#/signup":
      console.log("SignUp");
      //return main.appendChild(await SignUpView());
      return;
    case "#/acount":
      console.log(await AcountView());
      return main.appendChild(await AcountView());
    default:
      console.log("Error 404");
      break;
  }
};

export default Routes;
