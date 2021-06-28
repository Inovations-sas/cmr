const value= (lenght,values)=>{
  return Array.from({length: lenght}, () => Math.floor(Math.random() * values));
}
const datadona = {
    labels: ['Rojo', 'Naranja', 'Amarillo', 'Verde', 'Azul'],
    datasets: [
      {
        label: 'Dataset 1',
        data: value(5,60),
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

  const barlabels=[
  'Enero',
  'Febrero',
  'Marzoh',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
  ]

 

  const databar={
    labels: barlabels,
  datasets: [
    {
      label: 'Proyecto 1',
      data: value(12,40),
      borderColor: '#ff638598',
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Proyecto 2',
      data: value(12,40),
      borderColor: '#36a3ebaf',
      backgroundColor: '#36a2eb',
    }
  ]
  }
  
  var chartdona=document.getElementById("chartPro");
  var chartPro= new Chart(chartdona, {
      type: 'doughnut',
      data: datadona,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Contribucion a Proyectos'
          }
        }
      },
    });
  
    var chartbar=document.getElementById("chartContr");
    var chartContr= new Chart(chartbar, {
        type: 'bar',
        data: databar,
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






export {chartdona, chartPro,chartbar,chartContr, datadona};




