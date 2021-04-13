import view from "../view/slidenav.html";

const SlideNav = () => {
  const nav = document.createElement("nav");
  nav.classList = 'z-50'
  nav.innerHTML = view;
  console.log(nav)
  return nav
};

export default SlideNav;
