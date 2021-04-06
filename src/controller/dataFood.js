import view from "../view/dataFood.html";
import getData from "../utils/getData";
import { Chart, registerables } from "chart.js";

const DataFood = async (user) => {
  Chart.register(...registerables);
  const divElement = document.createElement("div");
  divElement.classList = "mx-4 xs:mx-4";
  divElement.innerHTML = view;
  const searchFood = divElement.querySelector("#searchFood");

  searchFood.addEventListener("submit", async (e) => {
    e.preventDefault();
    let inputNamas = divElement.querySelector("#name");

    if (inputNamas.value === "") {
      console.error("El Campo esta vacio");
      return;
    }
    const foodName = inputNamas.value.replaceAll(" ", "$20");
    const fooData = divElement.querySelector("#dataFood");
    const data = await getData(foodName);

    const view = `
    ${data
      .map(
        (elements) =>
          `
          <figure class="relative w-auto md:flex bg-gray-100 rounded-md p-8 md:p-0">
            <div class="text-blue-600 pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <p class="text-lg font-semibold">${elements.description}</p>
              </blockquote>
              <figcaption class="font-light">
              <div class="text-black">Food Nutrients</div>        
            <div id="foods" class="text-black">
            <p>•Calorías: ${elements.foodNutrients
              .map((names) =>
                names.name.indexOf("Energy") !== -1 ? names.amount : ""
              )
              .join("")}kcal</p>
            <p>•Carbohidratos: ${elements.foodNutrients
              .map((names) =>
                names.name.indexOf("Carbohydrate, by difference") !== -1
                  ? names.amount
                  : ""
              )
              .join("")}gr</p>
            <p>•Grasa: ${elements.foodNutrients
              .map((names) =>
                names.name.indexOf("Total lipid (fat)") !== -1
                  ? names.amount
                  : ""
              )
              .join("")}gr</p>
            <p>•Proteína: ${elements.foodNutrients
              .map((names) =>
                names.name.indexOf("Protein") !== -1 ? names.amount : ""
              )
              .join("")}gr</p>
              </div>
            </figcaption>
          </div>
          <div class="m-auto">
            <div
              class="recharts-responsive-container"
              style="width: 100%; height: 100%; min-height: 1px"
            >
              <div class="w-24 h-24">
                <canvas id="myChart"></canvas>
              </div>
            </div>
          </div>          
        </figure>`
      )
      .join("")}`;
    fooData.innerHTML = view;
    inputNamas.value = "";
    return fooData;
  });

  return divElement;
};

export default DataFood;

const chartGenerate = async (fooData) => {
  const ctx = fooData.querySelector("#myChart").getContext("2d");
  const data = {
    datasets: [
      {
        backgroundColor: [
          "rgba(235,90,90,0.5)",
          "rgba(006,022,044,0.5)",
          "rgba(015,178,061,0.5)",
        ],
        data: [15, 0, 1],
      },
    ],
  };

  const option = {
    responsive: true,
  };

  const myChart = new Chart(ctx, {
    type: "doughnut",
    options: option,
    data: data,
  });

  return myChart;
};
