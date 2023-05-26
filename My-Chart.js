/* const ctx = document.getElementById('myChart'); */
const earning = document.getElementById('earning');
/* Pie Chart 
  new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: ['Facebook', 'Youtube', 'Amazon'],
      datasets: [{
        label: '# of Votes',
        data: [1200, 1900, 3000],
        borderWidth: 1
      }]
    },      
    options: {
        responsive: true, 
    }
}); */


  new Chart(earning, {
    type: 'bar',
    data: {
      labels: ['Bitcoin', 'Litcoin', 'Spabmite', 'Barcoin', 'E-coin', 'Gold'],
      datasets: [{
        label: '# of Votes',
        data: [19, 8, 3, 12, 16, 6],
        backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
    }
  });