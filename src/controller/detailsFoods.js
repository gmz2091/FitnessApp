import views from "../view/detailsFoods.html";
import getHash from "../routes/getHash.routes";
import getData from "../utils/getData";

const DetailsFoods = async () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = views;
  const divFoods = divElement.querySelector("#detailsFoods");
  divFoods.classList = "";
  const fdcId = getHash();
  const dataFood = await getData(fdcId);
  const data = Object.values(dataFood);

  const view = `
  ${data
    .map(
      (elements) =>
        `
      <div class="ml-10 mt-10 gap-4 md:w-1/2 h-44">
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
      </figure>    
    </div>
    `
    )
    .join("")}`;
  divFoods.innerHTML = view;
  divElement.appendChild(divFoods);
  return divElement;
};
export default DetailsFoods;
