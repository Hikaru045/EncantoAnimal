// Importa las funciones específicas de Firebase que necesitas
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { createUserWithEmailAndPassword, sendEmailVerification, getAuth } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

// Configuración de la aplicación Firebase
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

// Inicializa la aplicación Firebase
const app = initializeApp(firebaseConfig);

// Obtiene el objeto de autenticación de Firebase
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', function() {
  // Evento click del botón
  document.getElementById('crearCuentaBtn').addEventListener('click', async (e) => {
    // Obtiene los valores de los campos justo antes de crear el usuario
    const email = document.getElementById('txtEmailR').value;
    const password = document.getElementById('txtContraseña').value;

    try {
      // Crea el usuario con correo y contraseña
      const cred = await createUserWithEmailAndPassword(auth, email, password);

      // Muestra un mensaje de éxito
      alert("Usuario creado");

      // Cierra la sesión del usuario actual
      auth.signOut();

      // Envía un correo de verificación
      await sendEmailVerification(auth.currentUser);

      // Muestra un mensaje de éxito
      alert('Se ha enviado un correo de verificación');

      // Redirige a la página de inicio de sesión
      window.location.href = "/InicioSesión/inicio_sesion.html";
    } catch (error) {
      // Manejo de errores
      const errorCode = error.code;
      if (errorCode == 'auth/email-already-in-use') {
        alert('El correo ya está en uso');
      } else if (errorCode == 'auth/invalid-email') {
        alert('El correo no es válido');
      } else if (errorCode == 'auth/weak-password') {
        alert('La contraseña debe tener al menos 6 caracteres');
      }
    }
  });
});
