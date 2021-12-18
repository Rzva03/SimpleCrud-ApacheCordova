document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);
  document.getElementById("deviceready").classList.add("ready");
}
const form = document.getElementById("studentForm");
let ArrayStudent = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  if (formData.get("select-carreras") == "0") {
    alert("Complete los campos");
  } else {
    let studentObj = convertToObjet(formData);
    saveToArray(studentObj);
    form.reset();
  }
});

function convertToObjet(formData) {
  let control = formData.get("control");
  let name = formData.get("name");
  let carrera = formData.get("select-carreras");
  let semestre = formData.get("semestre");
  let grupo = formData.get("grupo");

  return {
    control: control,
    name: name,
    carrera: carrera,
    semestre: semestre,
    grupo: grupo,
  };
}

function saveToArray(studentObj) {
  ArrayStudent.push(studentObj);
  console.log(ArrayStudent);
}
