// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Simulated data
    const totalUsers = 100; // Example data
    const totalSales = 5000; // Example data

    // Display data in the dashboard
    document.getElementById('total-users').textContent = totalUsers;
    document.getElementById('total-sales').textContent = `$${totalSales}`;

    // Example chart using Chart.js
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Sales',
                data: [1200, 1900, 3000, 2500, 2200, 3000],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
