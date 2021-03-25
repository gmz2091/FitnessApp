import Home from "./controller/home";

const App = () => {
  renderApp();
};

const renderApp = async ()  => {
  const main = null || document.getElementById("main");
  main.appendChild(await Home());
};

window.addEventListener("load", App);
