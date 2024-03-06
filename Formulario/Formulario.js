import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJOxMoaT97-Spf6RUaL322vjLv9022iKE",
  authDomain: "encantoanimal-2f00a.firebaseapp.com",
  databaseURL: "https://encantoanimal-2f00a-default-rtdb.firebaseio.com",
  projectId: "encantoanimal-2f00a",
  storageBucket: "encantoanimal-2f00a.appspot.com",
  messagingSenderId: "951365091155",
  appId: "1:951365091155:web:5d604c55da801b8a4a2ba6",
  measurementId: "G-Z8Z2X1G8H0"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

document.addEventListener('DOMContentLoaded', function () {
  const openModalButton = document.getElementById('open-modal');
  const closeModalButton = document.getElementById('close-modal');
  const termsModal = document.getElementById('terms-modal');
  const submitButton = document.getElementById('submit-button');
  const form = document.getElementById('adoptionForm');

  openModalButton.addEventListener('click', function () {
    termsModal.style.display = 'block';
  });

  closeModalButton.addEventListener('click', function () {
    termsModal.style.display = 'none';
    submitButton.disabled = false; // Habilitar el botón de envío
  });

  window.onclick = function (event) {
    if (event.target === termsModal) {
      termsModal.style.display = 'none';
    }
  };

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    saveFormData(event.target);
  });
});

function saveFormData(form) {
  const formData = new FormData(form);
  const data = {};

  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }

  const formDataRef = ref(database, 'formularios');
  push(formDataRef, data)
    .then(() => {
      alert("Formulario enviado exitosamente");
      window.location.href = "/Vista_Perfil/Vista_Perfil.html";
    })
    .catch((error) => {
      console.error("Error al guardar en Firebase:", error);
      alert("Ocurrió un error al enviar el formulario. Por favor, inténtalo de nuevo.");
    });
}
function updatePreview(animalData) {
  // Obtén el contenedor de la Vista Previa del Perfil
  const vistaPerfilContainer = document.getElementById('vistaPerfilContainer');

  // Obtén los elementos del contenedor para mostrar la información del animal
  const animalNombreElement = document.getElementById('animalNombre');
  const animalEdadElement = document.getElementById('animalEdad');
  const animalRazaElement = document.getElementById('animalRaza');
  // Obtén más elementos según sea necesario

  // Asigna los valores del animal a los elementos
  animalNombreElement.textContent = animalData.nombreA || 'No especificado';
  animalEdadElement.textContent = animalData.EdadA || 'No especificado';
  animalRazaElement.textContent = animalData.RazaA || 'No especificada';
  // Asigna más valores según sea necesario

  // Muestra la sección de información del animal
  const animalInfoContainer = document.getElementById('animalInfoContainer');
  animalInfoContainer.style.display = 'block';
}
