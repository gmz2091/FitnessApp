import HomeUi from "../controller/index";
import AcountView from "../controller/acount";
import LoginForm from "../controller/loginForm";
import SignUpView from "../controller/signup";
import Error404 from "../controller/Error404";
import getHash from "./getHash.routes";
import ResolveRoutes from "./resolveR.routes";

const routes = {
  "/": HomeUi(),
  login: LoginForm(),
  signup: SignUpView(),
  acount: AcountView(),
  404: Error404(),
};

const Routes = async () => {
  let main = null || document.getElementById("main");
  main.innerHTML = "";

  //main.appendChild(await HomeUi());
  //main.appendChild(await LoginForm());
  //main.appendChild(await SignUpView());

  let hash = getHash();
  let route = await ResolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  return main.appendChild(await render);
};
/*let main = null || document.getElementById("main");
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
};*/

export default Routes;
