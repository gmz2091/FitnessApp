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

export default Routes;
