
const find=()=>{
    const city=document.getElementById("city").value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c2519cdf9dmshf53154747d84da6p1d6880jsne78ad6bc93c9',
            'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
        }
    };
    fetch(`https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=${city}`, options)
        .then(response => response.json())
        .then(response => document.getElementById("display").innerText="CO="+ response.CO.concentration)
        .catch(err => console.error(err))
    map(city);
}
const map=(param)=>{
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c2519cdf9dmshf53154747d84da6p1d6880jsne78ad6bc93c9',
		'X-RapidAPI-Host': 'opentripmap-places-v1.p.rapidapi.com'
	}
};

fetch(`https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname?name=${param}`, options)
	.then(response => response.json())
	.then((response) =>{
        final_display(response.lat,response.lon)
        console.log(response)
    } )
	.catch(err => console.error(err));
}
const final_display=(lat,long)=>{
    let mapOptions={
        center:[lat,long],
        zoom:6
    }
    let map =new L.map('map',mapOptions);
    let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    map.addLayer(layer);

    let marker = new L.Marker([lat,long]);
    marker.addTo(map);
}
