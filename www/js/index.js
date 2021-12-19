document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);
  document.getElementById("deviceready").classList.add("ready");
}
const form = document.getElementById("studentForm");
const btnConsult = document.getElementById("btnConsult");
let ArrayStudent = [];
let boolStudent = false;
let nombre = document.getElementById("textNombre"),
  carrera = document.getElementById("select-carreras"),
  semestre = document.getElementById("semestre"),
  grupo = document.getElementById("grupo"),
  control = document.getElementById("controlValue");
let opts = carrera.options;

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
btnConsult.addEventListener("click", (e) => {
  const controlValue = document.getElementById("controlValue").value;
  e.preventDefault();
  if (controlValue == "") {
    alert("Inserte un número de control para continuar");
  } else {
    searchStudent(controlValue);
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

function searchStudent(controlValue) {
  ArrayStudent.forEach((element) => {
    if (element.control == controlValue) {
      control.value = element.control;
      nombre.value = element.name;
      //   carrera.setAttribute("selected");
      for (let opt, j = 0; (opt = opts[j]); j++) {
        if (opt.value == "informatica") {
          carrera.selectedIndex = j;
          break;
        }
      }

      //   carrera = element.carrera;
      semestre.value = element.semestre;
      grupo.value = element.grupo;
      boolStudent = true;
    }
  });
  if (!boolStudent) {
    alert("No existe alumno");
  } else {
    boolStudent = false;
    console.log("falso");
  }
}
