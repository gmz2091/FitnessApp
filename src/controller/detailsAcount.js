import firebase from "firebase/app";
import "firebase/firebase-firestore";
import DataFood from "./dataFood";

const DetailsAcount = async (user) => {
  const dataFood = document.getElementById("dataFood");
  dataFood.appendChild(await DataFood());

  await userData(user);
};

export default DetailsAcount;

const userData = async (user) => {
  //const detailsAcount = document.createElement("div");
  const acountDetails = document.querySelector("#acountDetails");
  const db = firebase.firestore();
  const userCollection = (
    await db.collection("users").doc(user.uid).get()
  ).data();

  const htmlView = `
  <button class="w-1/6 right-5 top-20 absolute p-4 bg-green-600 text-white cursor-pointer focus:outline-none rounded"
  id="logOut">Salir
  </button>
  <p>${user.email}</p>
  <p>${userCollection.name}</p>
  <p>${userCollection.lastname}</p>
        `;
  acountDetails.innerHTML = htmlView;
  const logOut = acountDetails.querySelector("#logOut");
  logOut.addEventListener("click", signOut);
  //acountDetails.appendChild(detailsAcount);
};

const signOut = async () => {
  const auth = firebase.auth();
  window.location.reload();
  return await auth
    .signOut()
    .then(() => {
      // Sign-out successful.
      window.location.href = "/";
      alert("Sign-out successful.");
    })
    .catch((err) => {
      // An error happened.
      alert(err);
    });
};
