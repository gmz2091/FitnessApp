import views from "../view/index.html";
import "tailwindcss/tailwind.css";
import FirebaseApp from "../utils/firebase.config";

const HomeUi = async (user) => {
  FirebaseApp()
  //console.log(nav)

  const section = document.createElement("section");
  const divElement = document.createElement("div");
  divElement.innerHTML = views;


  return divElement;
};

export default HomeUi;