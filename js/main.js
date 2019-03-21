const chartMonthlyTrafficElement = $('#chart-monthly-traffic');
const chartDailyTrafficElement = $('#chart-daily-traffic');
const chartPlatformTrafficElement = $('#chart-platform-traffic');

const chartMonthlyTraffic = new Chart(chartMonthlyTrafficElement, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'TRAFFIC',
            data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
            backgroundColor: 'rgba(226, 227, 244, 0.5)',
            borderColor: 'rgba(115, 121, 186, 1)',
            borderWidth: 1,
            pointBackgroundColor: '#fff',
            lineTension: 0

        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
    }
});

const chartDailyTraffic = new Chart(chartDailyTrafficElement, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: 'DAILY TRAFFIC',
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: 'rgba(104, 108, 183, 1)',
            borderColor: 'rgba(115, 121, 186, 1)',
            borderWidth: 1,

        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
    }
});

const chartPlatformTraffic = new Chart(chartPlatformTrafficElement, {
    type: 'doughnut',
    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],
        datasets: [{
            label: 'MOBILE USERS',
            data: [25, 10, 65],
            backgroundColor: ['rgba(103, 168, 183, 1)', 'rgba(118, 194, 132, 1)', 'rgba(104, 108, 183, 1)'],
            borderWidth: 1,

        }]
    },
    options: {

    }
});
