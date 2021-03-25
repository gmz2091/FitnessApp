import view from "../view/home.html";
import "tailwindcss/tailwind.css";
import getData from "../utils/getData";

const Home = () => {
  const divElement = document.createElement("div");

  divElement.classList = "container";
  divElement.innerHTML = view;

  const searchFood = divElement.querySelector('#searchFood')

  searchFood.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('Click')
  })

  getData()

  return divElement;
};

export default Home;