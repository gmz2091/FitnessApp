import HomeUi from "../controller/index";
import AcountView from "../controller/acount";
import LoginForm from "../controller/loginForm";
import SignUpView from "../controller/signup";
import Error404 from "../controller/Error404";
import getHash from "./getHash.routes";
import ResolveRoutes from "./resolveR.routes";
import DetailsFoods from "../controller/detailsFoods";

const routes = {
  "/": HomeUi(),
  login: LoginForm(),
  signup: SignUpView(),
  acount: AcountView(),
  "/:fdcId": DetailsFoods(),
  404: Error404(),
};

const Routes = async () => {
  let main = null || document.getElementById("main");
  main.innerHTML = "";

  let hash = getHash();
  let route = await ResolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  main.appendChild(await render);
};

export default Routes;
