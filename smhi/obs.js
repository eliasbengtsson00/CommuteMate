fetch('https://opendata-download-metobs.smhi.se/api/version/latest/parameter/1/station/71420/period/latest-hour/data.json')
.then(response => response.json()) 
.then(data => {
    const value = data.value;

    value.forEach(param => {
        
        if (Math.round(param.value) === -0 && Math.round(param.value) === +0) {
            console.log("0");
        }
        else {
            console.log(Math.round(param.value));
        }  
    });
})
.catch(error => console.error('Error fetching data:', error));