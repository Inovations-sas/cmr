const data = {
    labels: ['Rojo', 'Naranja', 'Amarillo', 'Verde', 'Azul'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [5,20,30,10,11],
        backgroundColor:[
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
        ],
      }
    ]
  };
  
  var chartdona=document.getElementById("chartContr");
  var chartContr= new Chart(chartdona, {
      type: 'doughnut',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Contribucion de Actividades'
          }
        }
      },
    });
  
  export {chartdona, chartContr,data};
