import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

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
  
const formDataRef = ref(database, 'formularios');

// Recupera los datos del formulario desde Firebase
get(formDataRef).then((snapshot) => {
  const formData = snapshot.val();
  // Verifica si los datos existen antes de intentar acceder a ellos
  if (formData !== null) {
    // Rellena tus campos de formulario con los datos recuperados
    document.getElementById('nombreA').value = formData.nombreA || '';
    document.getElementById('EdadA').value = formData.EdadA || '';
    document.getElementById('RazaA').value = formData.razaA || '';
    document.getElementById('vacunas').value = formData.vacunas || '';
    document.getElementById('cualesEnfermedades').value = formData.cualesEnfermadades || '';
    document.getElementById('enfermedad').value = formData.enfermedad || '';
    document.getElementById('discapacidad').value = formData.discapacidad || '';
    document.getElementById('datosAdicionales').value = formData.datosAdicionales || '';
  } else {
    console.log('No hay datos en la referencia formularios.');
  }
}).catch((error) => {
  console.error('Error al recuperar datos desde Firebase:', error);
});

document.querySelector('.btnno').addEventListener('click', function () {
  // Redirige a la página de formulario para permitir al usuario modificar los datos
  window.location.href = "/Formulario/Formulario.html";
});