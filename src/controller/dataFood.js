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
    const foodName = inputNamas.value.replaceAll(" ", "%20");
    const fooData = divElement.querySelector("#dataFood");
    const data = await getData(foodName);
    while (data == null) {
      const view = `<div id="cargando" style="display: block;" class="border border-light-blue-300 shadow rounded-md ml-5 p-4 w-full">
      <div class="animate-pulse flex space-x-4">
        <div class="rounded-full bg-blue-500 h-12 w-12"></div>
        <div class="flex-1 space-y-4 py-1">
          <div class="h-4 bg-blue-500 rounded w-3/4"></div>
          <div class="space-y-2">
            <div class="h-4 bg-blue-500 rounded"></div>
            <div class="h-4 bg-blue-500 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>`;
    fooData.innerHTML = view;
    inputNamas.value = "";
    return fooData;
    }
    const nutrients = data.foodNutrients 
    const view = `
     ${data
       .map(
         (element) => `         
         <figure class="relative w-auto md:flex bg-gray-100 rounded-md p-8 md:p-0">
          <div class="text-blue-600 pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-lg font-semibold">${element.description}</p>
            </blockquote>
            <figcaption class="font-light">
              <div class="text-black">1 cup, pieces</div>
              <div class="text-black">
                Calorías: 60 •Carbohidratos: 15 g •Grasa: 0 g •Proteína: 1 g
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
          ${console.log(nutrients)}
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

const chartGenerate = () => {
  const ctx = fooData.querySelector("#myChart").getContext("2d");
  var data = {
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

  var option = {
    responsive: true,
  };

  const myChart = new Chart(ctx, {
    type: "doughnut",
    options: option,
    data: data,
  });

  console.log(myChart);
};
