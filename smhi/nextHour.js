fetch('https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/11.9746/lat/57.7089/data.json')
    .then(response => response.json()) 
    .then(data => {
        const timeSeries = data.timeSeries;
        timeSeries.forEach(entry => {
            const validTime = entry.validTime;
            const parameters = entry.parameters;
            
            const nextHour = () => {
                const date = new Date();
                date.setMinutes(0, 0, 0); 
                date.setHours(date.getHours() + 1);
                return date.toISOString().split('.')[0] + "Z"; 
            };
            
            if (validTime === nextHour()) {
                parameters.forEach(param => {
                    if (param.name === "t") {
                        console.log("Next full hour: " + Math.round(param.values)); 
                    }
                });
            }
            
        });
    })
    .catch(error => console.error('Error fetching data:', error));