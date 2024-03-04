document.addEventListener('DOMContentLoaded', function () {
  const openModalButton = document.getElementById('open-modal');
  const closeModalButton = document.getElementById('close-modal');
  const termsModal = document.getElementById('terms-modal');
  const submitButton = document.getElementById('submit-button');


  function showConfirmation() {
    if (closeModalButton.click) {
      alert("Gracias por revisar los Términos y Condiciones. Puedes continuar con el formulario.");
     } else {
      alert("Por favor, acepta los Terminos y condiciones ");
    }
  }

  openModalButton.addEventListener('click', function () {
    termsModal.style.display = 'block';
  });

  closeModalButton.addEventListener('click', function () {
    termsModal.style.display = 'none';
  });

  window.onclick = function (event) {
    if (event.target === termsModal) {
      termsModal.style.display = 'none';
    }
  };

  submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    showConfirmation();
  });
});
// Obtener referencias a los elementos del formulario
const form = document.getElementById('adoptionForm');
const submitButton = document.getElementById('submit-button');

window.onload = function() {
loadFormData();
};

function saveFormData() {
  const formData = {};
  const formElements = document.getElementById('adoptionForm').elements;

  for (let i = 0; i < formElements.length; i++) {
    const element = formElements[i];
    if (element.name) {
      formData[element.name] = element.value;
    }
  }

  localStorage.setItem('formData', JSON.stringify(formData));
}


function loadFormData() {

const savedFormData = localStorage.getItem('formData');

if (savedFormData) {
  const parsedData = JSON.parse(savedFormData);
  document.getElementById('nombre').value = parsedData.nombre;
  document.getElementById('apellidoPaterno').value = parsedData.apellidoPaterno;
  document.getElementById('apellidoMaterno').value = parsedData.apellidoMaterno;
  document.getElementById('telefono').value = parsedData.telefono;
  document.getElementById('telefonoFijo').value = parsedData.telefonoFijo;
  document.getElementById('correo').value = parsedData.correo;
  document.getElementById('correo2').value = parsedData.correoAd;
  document.getElementById('calle').value = parsedData.calle;
  document.getElementById('colonia').value = parsedData.colonia;
  document.getElementById('codigoPostal').value = parsedData.codigoP;
  document.getElementById('referencia').value = parsedData.referencia;
  document.getElementById('nombreA').value = parsedData.nombreAni;
  document.getElementById('EdadA').value = parsedData.edad;
  document.getElementById('RazaA').value = parsedData.razaA;
  document.getElementById('vacunas').value = parsedData.vacunas
  document.getElementById('cualesEnfermades').value = parsedData.cualesEnfermades;
  document.getElementById('enfermedad').value = parsedData.enfermedad;
  document.getElementById('discapacidad').value = parsedData.discapacidad;
  document.getElementById('imagenes').value = parsedData.imagenes;
  document.getElementById('datosAdicionales').value = parsedData.datosAdi;
}
}

function submitForm() {

saveFormData();

// Agrega aquí el código para enviar el formulario al servidor si es necesario
}

// Asigna el evento click al botón de enviar
submitButton.addEventListener('click', submitForm);