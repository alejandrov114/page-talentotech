function mostrarGrafica(tipo) {
    const contenedor = document.getElementById('container' + capitalizar(tipo));
    contenedor.classList.toggle('d-none'); // Mostrar/Ocultar

    // Solo inicializa si no está ya creada
    if (!contenedor.dataset.iniciado) {
      crearGrafica(tipo);
      contenedor.dataset.iniciado = "true";
    }
  }

  function capitalizar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function crearGrafica(tipo) {
    const labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];
    let config;

    switch (tipo) {
      case 'eolica':
        config = {
          type: 'line',
          data: {
            labels,
            datasets: [{
              label: 'Energía Eólica',
              data: [120, 140, 110, 160, 150, 170],
              borderColor: 'blue',
              backgroundColor: 'lightblue',
              fill: true
            }]
          }
        };
        break;

      case 'solar':
        config = {
          type: 'bar',
          data: {
            labels,
            datasets: [{
              label: 'Energía Solar',
              data: [80, 100, 130, 150, 140, 160],
              backgroundColor: 'orange'
            }]
          }
        };
        break;

      case 'hidro':
        config = {
          type: 'pie',
          data: {
            labels,
            datasets: [{
              label: 'Energía Hidroeléctrica',
              data: [300, 320, 310, 330, 340, 350],
              backgroundColor: ['#0074D9', '#7FDBFF', '#39CCCC', '#3D9970', '#2ECC40', '#01FF70']
            }]
          }
        };
        break;
    }

    new Chart(document.getElementById('grafico' + capitalizar(tipo)), config);
  }