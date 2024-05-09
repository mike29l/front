document
  .getElementById('newUserForm')
  .addEventListener('submit', async function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    // Obtener valores de los campos del formulario
    const name = document.getElementById('usuario').value;
    const email = document.getElementById('email').value;

    // Crear un objeto con los datos del nuevo usuario
    const newUser = {
      name,
      email,
    };

    // Realizar una solicitud POST a tu backend
    try {
      const response = await fetch('http://localhost:3001/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      // Verificar si la respuesta no fue exitosa
      if (!response.ok) {
        throw new Error('La solicitud no pudo ser procesada.');
      }

      // Obtener la respuesta en formato JSON
      const data = await response.json();
      // Mostrar la respuesta en la página
      showMessage('success', `Usuario creado con éxito: ${data.name}`);
    } catch (error) {
      // Mostrar el error en la página
      showMessage('error', `Error: ${error.message}`);
    }

  });

function showMessage(type, message) {
  // Mostrar el mensaje en la página
  const responseDiv = document.getElementById('response');
  responseDiv.innerText = message;
  responseDiv.className = type;

  // Animación para mostrar el mensaje
  responseDiv.style.opacity = '1';
}

  // Obtener el botón por su ID
  const redirectButton = document.getElementById('bbb');

  // Agregar un event listener para el clic en el botón
  redirectButton.addEventListener('click', function() {
    // Redireccionar a la página deseada
    window.location.href = 'http://localhost:51437/monorepo-microa/apps/frontend/';
  });