document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  // Cordova is now initialized. Have fun!

  console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);
  document.getElementById("deviceready").classList.add("ready");
}
const form = document.getElementById("studentForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(form); //crea el form data mediante el formulario
  saveToArray(formData);
  form.reset(); //formatea el formulario
});
