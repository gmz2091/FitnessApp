import viewNav from "../view/navbar.html";

const Navbar = async () => {
  const navView = document.querySelector("#navBar");
  navView.setAttribute("id", "nav");
  navView.classList = "bg-gray-800";
  navView.innerHTML = viewNav;

  return navView;
};

export default Navbar;
