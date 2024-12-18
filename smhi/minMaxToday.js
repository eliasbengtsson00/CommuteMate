fetch('https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/11.9746/lat/57.7089/data.json')
    .then(response => response.json())
    .then(data => {
        const timeSeries = data.timeSeries;

        // Today's date
        const today = () => {
            const date = new Date();
            return date.toISOString().split('T')[0];
        };

        // Array for today's temperatures
        const temperatures = [];

        // Collect today's temperatures
        timeSeries.forEach(entry => {
            if (entry.validTime.startsWith(today())) {
                entry.parameters.forEach(param => {
                    if (param.name === "t") {
                        temperatures.push(Math.round(param.values));
                    }
                });
            }
        });

        // Find highest and lowest temperatures and print them
        if (temperatures.length > 0) {
            const highest = Math.max(...temperatures); 
            const lowest = Math.min(...temperatures); 

            console.log("High: " + highest);
            console.log("Low: " + lowest);
        } else {
            console.log("No temperature data available for today.");
        }
    })
    .catch(error => console.error('Error fetching data:', error));