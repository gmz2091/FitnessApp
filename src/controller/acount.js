import views from "../view/acount.html";
import firebase from "firebase/app";
import "firebase/firebase-firestore";

const AcountView = async (user) => {
  const divElement = document.createElement("div");
  divElement.classList = "flex flex-wrap ";
  divElement.innerHTML = views;
  //await activeUser();
  if (user) {
    await userData(user);
    const logOut = divElement.querySelector("#logOut");
    logOut.classList.remove("hidden");

    logOut.addEventListener("click", signOut);
    //return divElement;
  }
  return divElement;
};

export default AcountView;

/*const displayHidden = divForm.querySelector(".block");
const buttonDisplayHidden = divForm.querySelector(".hidden");
displayHidden.classList.remove("block");
displayHidden.classList = "hidden";
buttonDisplayHidden.classList.remove("hidden");
displayHidden.classList = "block";
await SignUpView(user);*/

const signOut = async () => {
  const auth = firebase.auth();
  window.location.reload();
  return await auth
    .signOut()
    .then(() => {
      // Sign-out successful.
      alert("Sign-out successful.");
    })
    .catch((err) => {
      // An error happened.
      alert(err);
    });
};

const userData = async (user) => {
  const detailsAcount = document.createElement("div");
  const displayViewDetails = document.querySelector(".displayView");
  const db = firebase.firestore();
  const userCollection = (
    await db.collection("users").doc(user.uid).get()
  ).data();

  const htmlView = `
      <p>${user.email}</p>
      <p>${userCollection.name}</p>
    <p>${userCollection.lastname}</p>
      `;
  detailsAcount.innerHTML = htmlView;
  displayViewDetails.appendChild(detailsAcount);
  return detailsAcount;
};