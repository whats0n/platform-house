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

    map.loadImage('/img/marker.png', function(error, image) {
      if (error) throw error;
      map.addImage('custom-marker', image);
      map.addLayer({
        id: 'main-marker',
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

      map.style.stylesheet.layers.forEach(function(layer) {
        if (layer.type === 'symbol') {
          map.removeLayer(layer.id);
        }
      });
    });

    map.loadImage('/img/bus-marker.png', function(error, image) {
      if (error) throw error;
      map.addImage('bus-marker', image);
      map.addLayer({
        id: 'bus-marker',
        type: 'symbol',
        /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features:[{'type':'Feature','geometry':{'type':'Point','coordinates':['17.1259271','48.1725425']}}]}
        },
        layout: {
          'icon-image': 'bus-marker',
        }
      });
    });

    map.loadImage('/img/bus-train-marker.png', function(error, image) {
      if (error) throw error;
      map.addImage('bus-train-marker', image);
      map.addLayer({
        id: 'bus-train-marker',
        type: 'symbol',
        /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features:[{'type':'Feature','geometry':{'type':'Point','coordinates':['17.1272829','48.1736886']}}]}
        },
        layout: {
          'icon-image': 'bus-train-marker',
        }
      });
    });

    map.loadImage('/img/default-marker.png', function(error, image) {
      if (error) throw error;
      map.addImage('default-marker', image);

      [ 
        { coordinates: ['17.1274500','48.1725500'] },
        { coordinates: ['17.1267500','48.1703000'] },
        { coordinates: ['17.1244000','48.1726000'] },
        { coordinates: ['17.1293250','48.1700689'] }
      ].forEach((marker, i) => {
        map.addLayer({
          id: `default-marker-${i}`,
          type: 'symbol',
          /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
          source: {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features:[{'type':'Feature','geometry':{'type':'Point','coordinates': marker.coordinates}}]}
          },
          layout: {
            'icon-image': 'default-marker',
          }
        });
      });

    });

  });
}

