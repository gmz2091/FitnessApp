import HomeUi from "./controller";
import Navbar from "./controller/navbar";
import Routes from "./routes/routes";
import FirebaseApp from "./utils/firebase.config";
//import LoginForm from "./controller/loginForm";
//import Home from "./controller/home";

const App = async () => {
  Routes(window.location.hash);
  Navbar();
};
window.addEventListener("hashchange", async () => {
  await Routes(window.location.hash);
});
window.addEventListener("load", App);

const renderApp = async () => {
  const main = null || document.getElementById("main");
  main.appendChild(await Routes(window.location.hash)); //Al terminar la prueba con el login, agregar de nuevo Home()
};
