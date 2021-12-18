document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  // Cordova is now initialized. Have fun!

  console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);
  document.getElementById("deviceready").classList.add("ready");
}
const firebaseConfig = {
  apiKey: "AIzaSyBWKUojeZPeALweilAOIheNqgyrQrYGU8o",
  authDomain: "crud-cf57a.firebaseapp.com",
  projectId: "crud-cf57a",
  storageBucket: "crud-cf57a.appspot.com",
  messagingSenderId: "415923140860",
  appId: "1:415923140860:web:ac5244a4b4dc13564d7f79",
};
const app = initializeApp(firebaseConfig);
const form = document.getElementById("studentForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = form["name"].value;
  console.log(nombre);
});
