import view from "../view/dataFood.html";
import getData from "../utils/getData";

const DataFood = async (user) => {
  const divElement = document.createElement("div");
  divElement.classList = "mx-4 xs:mx-4";
  divElement.innerHTML = view;
  const searchFood = divElement.querySelector("#searchFood");

  searchFood.addEventListener("submit", (e) => {
    e.preventDefault();
    foodData();
  });

  return divElement;
};

export default DataFood;

const foodData = async () => {
  //e.preventDefault();
  let inputNamas = document.querySelector("#name");

  if (inputNamas.value === "") {
    console.error("El Campo esta vacio");
    return;
  }
  const foodName = inputNamas.value.replaceAll(" ", "$20");
  let fooData = document.querySelector("#dataFoods");
  const data = await getData(foodName);
  fooData.innerHTML = "";

  const view = `
  ${data
    .map(
      (elements) =>
        `
        <figure class="relative border-b border-gray-200 w-auto md:flex md:p-0">
          <div class="text-blue-600 pt-8 pb-4 text-left">
            <blockquote>
              <a id="aFoods" href="#/${
                elements.fdcId
              }" class="text-lg font-semibold">${elements.description}</a>
            </blockquote>
            <figcaption class="font-light text-sm">
          <div id="foods" class="text-black">
          <p>Calorías: ${elements.foodNutrients
            .map((names) =>
              names.unitName.indexOf("KCAL") !== -1 ? names.amount : ""
            )
            .join("")}kcal</p>
            <p>Carbohidratos: ${elements.foodNutrients
              .map((names) =>
                names.name.indexOf("Carbohydrate, by difference") !== -1
                  ? names.amount
                  : ""
              )
              .join("")}gr</p>
          <p>Grasa: ${elements.foodNutrients
            .map((names) =>
              names.name.indexOf("Total lipid (fat)") !== -1 ? names.amount : ""
            )
            .join("")}gr</p>
          <p>Proteína: ${elements.foodNutrients
            .map((names) =>
              names.name.indexOf("Protein") !== -1 ? names.amount : ""
            )
            .join("")}gr</p>
            </div>
          </figcaption>
        </div>
      </figure>`
    )
    .join("")}`;
  fooData.innerHTML = view;
  inputNamas.value = "";
  return view;
};
