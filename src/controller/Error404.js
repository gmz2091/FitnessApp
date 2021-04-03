import view from "../view/404.html";

const Error404 = () => {
  const div = document.createElement("div");
  div.innerHTML = view;
  return div;
};

export default Error404;
