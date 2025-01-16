/* globals Chart:false */
(() => {
  'use strict';

  // Graph 1: Line chart with tolerance lines
  const ctx1 = document.getElementById('myChart');
  const myChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
      labels: ['JBE114', 'JBE115', 'JBE118', 'VL17', 'VL20', 'ME114', 'ME118'],
      datasets: [
        {
          label: 'Poussiére',
          data: [1.5, 1.2, 2.2, 2.5, 2.2, 2.7, 2.3],
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          borderWidth: 2,
          pointBackgroundColor: '#007bff'
        },
        {
          label: 'Max',
          data: [5, 5, 5, 5, 5, 5, 5],
          borderColor: 'rgba(255, 0, 0, 0.6)',
          borderDash: [5, 5],
          borderWidth: 2,
          fill: false
        },
        {
          label: 'Min',
          data: [1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
          borderColor: 'rgba(0, 255, 0, 0.6)',
          borderDash: [5, 5],
          borderWidth: 2,
          fill: false
        }
      ]
    },
    options: {
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        tooltip: {
          boxPadding: 3
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Quantité en Kg'
          }
        },
        
      }
    }
  });

  // Graph 2: Bar chart
  const ctx2 = document.getElementById('myChart2');
  const myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['JBE114', 'JBE115', 'JBE118', 'VL17', 'VL20', 'ME114', 'ME118'],
      datasets: [

        {
          label: '  Max',
          type:'line',
          data: [90,90,90, 90,90,90,90],
          borderColor: 'rgba(255, 0, 0, 0.6)',
          borderDash: [5, 5],
          borderWidth: 2,
          fill: false
        },
        {
          label: 'Durabilité',
          data: [85, 88, 87, 78, 81, 79, 75],
          backgroundColor: '#007bff',
          borderColor: '#0056b3',
          borderWidth: 2
        },
        {
          label: 'Min',
          type:'line',
          data: [65.0, 65.0, 65.0, 65.0, 65.0, 65.0, 65.0],
          borderColor: 'rgba(0, 255, 0, 0.6)',
          borderDash: [5, 5],
          borderWidth: 2,
          fill: false
        }
      ]
    },
    options: {
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        tooltip: {
          boxPadding: 3
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Quantité en Kg'
          }
        }
      }
    }
  });


  // Graph 2: Bar chart
  const ctx3 = document.getElementById('myChart3');
  const myChart3 = new Chart(ctx3, {
    type: 'bar',
    data: {
      labels: ['Press', 'Broyeur', 'Ensachage (grains Noirs)', 'Nettoyage'],
      datasets: [


        {
          label: 'Durabilité',
          data: [7940, 29871, 640, 3369],
          backgroundColor: '#007bff',
          borderColor: '#0056b3',
          borderWidth: 0.
        }
      ]
    },
    options: {
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        tooltip: {
          boxPadding: 3
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Quantité en Kg'
          }
        }
      }
    }
  });


  const mois = ['Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']

  // Graph 2: Bar chart
  const ctx4 = document.getElementById('myChart4');
  const myChart4 = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: mois,
        datasets: [
            {
                label: 'Grains Noirs',
                data: [8121, 4466, 5914, 8554, 6355, 3570, 4080, 7940],
                backgroundColor: '#007bff',
                borderColor: '#0056b3',
                borderWidth: 1
            },
            {
                label: 'Presse',
                data: [26044, 26311, 21779, 21051, 22301, 22995, 23551, 29871],
                backgroundColor: '#28a745',
                borderColor: '#1c7430',
                borderWidth: 1
            },
            {
                label: 'Broyeur',
                data: [2519, 3654, 2371, 2580, 2310, 2320, 200, 640],
                backgroundColor: '#ffc107',
                borderColor: '#d39e00',
                borderWidth: 1
            },
            {
                label: 'Nettoyage',
                data: [1170, 1386, 1736, 1755, 1472, 1305, 1805, 3369],
                backgroundColor: '#dc3545',
                borderColor: '#a71d2a',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            tooltip: {
                enabled: true
            }
        },
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
});

    // Graph 2: Bar chart
    const ctx5 = document.getElementById('myChart5');
    const myChart5 = new Chart(ctx5, {
      type: 'bar',
      data: {
        labels: mois,
        datasets: [
  
          {
            label: 'Grains Noirs',
            data: [8121, 4466, 5914,8554, 6355, 3570, 4080,7940],
            backgroundColor: '#007bff',
            borderColor: '#0056b3',
            borderWidth: 0.
          },
        ]
      },
      options: {
        plugins: {
          legend: {
            display: true,
            position: 'top'
          },
          tooltip: {
            boxPadding: 3
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Quantité en Kg'
            }
          }
        }
      }
    });


      // Graph 2: Bar chart
  const ctx6 = document.getElementById('myChart6');
  const myChart6 = new Chart(ctx6, {
    type: 'bar',
    data: {
      labels: mois,
      datasets: [

        {
          label: 'Durabilité',
          data: [26044, 26311, 21779, 21051, 22301, 22995, 23551, 29871],
          backgroundColor: '#28a745',
          borderColor: '#1c7430',
          borderWidth: 0.
        }
      ]
    },
    options: {
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        tooltip: {
          boxPadding: 3
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Quantité en Kg'
          }
        }
      }
    }
  });

        // Graph 2: Bar chart
        const ctx7 = document.getElementById('myChart7');
        const myChart7 = new Chart(ctx7, {
          type: 'bar',
          data: {
            labels: mois,
            datasets: [
      
              {
                label: 'Broyeur',
                data: [26044, 26311, 21779, 21051, 22301, 22995, 23551, 29871],
                backgroundColor: '#28a745',
                borderColor: '#1c7430',
                borderWidth: 0.
              }
            ]
          },
          options: {
            plugins: {
              legend: {
                display: true,
                position: 'top'
              },
              tooltip: {
                boxPadding: 3
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Quantité en Kg'
                }
              }
            }
          }
        });

              // Graph 2: Bar chart
  const ctx8 = document.getElementById('myChart8');
  const myChart8 = new Chart(ctx8, {
    type: 'bar',
    data: {
      labels: mois,
      datasets: [

        {
          label: 'Durabilité',
          data: [26044, 26311, 21779, 21051, 22301, 22995, 23551, 29871],
          backgroundColor: '#28a745',
          borderColor: '#1c7430',
          borderWidth: 0.
        }
      ]
    },
    options: {
      plugins: {
        legend: {
          display: true,
          position: 'top'
        },
        tooltip: {
          boxPadding: 3
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Quantité en Kg'
          }
        }
      }
    }
  });

})();


