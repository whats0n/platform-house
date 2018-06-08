import mapboxgl from 'mapbox-gl';
const container = $('.js-map');

if (container.length) {
  mapboxgl.accessToken = 'pk.eyJ1Ijoid2hhdHMwbiIsImEiOiJjamh6NG84eWowNmp1M29zNjdncDJjZ2Z6In0.x97QxQCpCjr--jTRBMot7g';

  const map = new mapboxgl.Map({
	  container: container.get(0),
	  style: 'mapbox://styles/mapbox/light-v9',
	  center: [17.1249159,48.1715165],
	  zoom: 16
  });

  map.scrollZoom.disable();

  map.on('load', function() {
    /* Image: An image is loaded and added to the map. */
    map.loadImage('img/marker.png', function(error, image) {
      if (error) throw error;
      map.addImage('custom-marker', image);
      /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
      map.addLayer({
        id: 'markers',
        type: 'symbol',
        /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features:[{'type':'Feature','geometry':{'type':'Point','coordinates':['17.1249159','48.1715165']}}]}
        },
        layout: {
          'icon-image': 'custom-marker',
        }
      });
    });
  });
}

