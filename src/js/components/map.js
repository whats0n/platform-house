import mapboxgl from 'mapbox-gl';
const container = $('.js-map');

if (container.length) {
  mapboxgl.accessToken = 'pk.eyJ1Ijoid2hhdHMwbiIsImEiOiJjamh6NG84eWowNmp1M29zNjdncDJjZ2Z6In0.x97QxQCpCjr--jTRBMot7g';

  const map = new mapboxgl.Map({
	  container: container.get(0),
	  style: 'mapbox://styles/mapbox/light-v9',
	  center: [30.5227185,50.4510205],
	  zoom: 16
  });

  map.scrollZoom.disable();
}

