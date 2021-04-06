import getHash from "../routes/getHash.routes";
import ResolveRoutes from "../routes/resolveR.routes";
import viewNav from "../view/navbar.html";

const Navbar = async () => {
  const navView = document.querySelector("#navBar");
  navView.setAttribute("id", "nav");
  navView.classList = "bg-gray-800";
  navView.innerHTML = viewNav;
  const showMenu = document.getElementById("showMenu");
  const userMenu = document.getElementById("user-menu");

  showMenu.addEventListener("click", showResponsiveMenu);
  userMenu.addEventListener("click", showResponsiveUserMenu);

  await modeActive();

  return navView;
};

export default Navbar;

function showResponsiveMenu() {
  const block = document.getElementById("block");
  const hidden = document.getElementById("hidden");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    block.classList.remove("block");
    block.classList = "hidden h-6 w-6";
    hidden.classList = "block h-6 w-6";
    //svg.classList = 'hidden'
  } else {
    block.classList.remove("hidden");
    block.classList = "block h-6 w-6";
    hidden.classList = "hidden h-6 w-6";
    hidden.classList.remove("block");
    mobileMenu.classList = "hidden";
  }
}

const showResponsiveUserMenu = () => {
  const userMenuBar = document.getElementById("userMenuBar");
  if (userMenuBar.classList.contains("hidden")) {
    userMenuBar.classList.remove("hidden");
  } else {
    userMenuBar.classList =
      "hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none";
  }
};

const modeActive = async () => {
  const hash = getHash();
  const route = await ResolveRoutes(hash);

  if (route == route) {
    return console.log(route);
  }
};
