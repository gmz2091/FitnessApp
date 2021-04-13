import HomeUi from "./controller";
import Navbar from "./controller/navbar";
import Routes from "./routes/routes";
import FirebaseApp from "./utils/firebase.config";
//import LoginForm from "./controller/loginForm";
//import Home from "./controller/home";

const App = async () => {
  await Routes(window.location.hash);
  Navbar();
};
window.addEventListener("hashchange", async () => {
  await Routes(window.location.hash);
});
window.addEventListener("load", App);
