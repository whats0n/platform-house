import mapboxgl from 'mapbox-gl';
import {touchDetect} from '../constants';

const container = $('.js-map');

if (container.length) {
  mapboxgl.accessToken = 'pk.eyJ1Ijoid2hhdHMwbiIsImEiOiJjamh6NG84eWowNmp1M29zNjdncDJjZ2Z6In0.x97QxQCpCjr--jTRBMot7g';

  const map = new mapboxgl.Map({
	  container: container.get(0),
	  style: 'mapbox://styles/mapbox/light-v9',
	  center: [17.1259159,48.1715165],
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
          if (layer.id === 'road-label-medium') {
            touchDetect && map.removeLayer(layer.id);
            return;
          };
          if (touchDetect && layer.id === 'road-label-large') return;
          map.removeLayer(layer.id);
        }
      });
    });
    !touchDetect && map.loadImage('/img/bus-marker.png', function(error, image) {
      if (error) throw error;
      map.addImage('bus-marker', image);
      map.addLayer({
        id: 'bus-marker',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features:[{'type':'Feature','geometry':{'type':'Point','coordinates':['17.12591904616594','48.172530001425635']}}]}
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
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features:[{'type':'Feature','geometry':{'type':'Point','coordinates':['17.127354163345604','48.17381740389636']}}]}
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
        { coordinates: ['17.126952943553203','48.17420238465326'] },
        { coordinates: ['17.12730847497859','48.17118416701758'] },
        { coordinates: ['17.127341821113113','48.170784948075394'] },
        { coordinates: ['17.130357315745226','48.16976917808667'] }
      ].forEach((marker, i) => {
        map.addLayer({
          id: `default-marker-${i}`,
          type: 'symbol',
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

