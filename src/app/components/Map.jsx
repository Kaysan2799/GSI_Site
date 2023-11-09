"use client"
import React from 'react';
import { GoogleMap, useJsApiLoader, Polygon, GroundOverlay } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
  border: '1px solid black',
  border_radius: '100px'
};

const Map = ({ centerCoordinates, polygons, showOverlay, imageIndex }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCM1FHe1VOmGeMKIjg_4QZEU9NVNgH9T_0', // Replace with your actual API key
  });

  const [map, setMap] = React.useState(null);



  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);


  return isLoaded ? (
    <div style={{ width: '100%', height: '780px', }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={centerCoordinates}
        zoom={17}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          streetViewControl: false,
          fullscreenControl: true,
          zoomControl: false,
        }}
      >
        {/* Render each polygon */}
        {polygons.map((polygon, index) => (
          <React.Fragment key={index}>
            <Polygon
              paths={polygon.paths}
              options={{
                fillColor: polygon.fillColor || 'rgba(255, 0, 0, 0.3)',
                strokeColor: polygon.strokeColor || 'red',
                strokeWeight: polygon.strokeWeight || 2,
              }}
            />
            {/* Render the image overlay inside the polygon if showOverlay is true */}
            {showOverlay && polygon.overlayImageUrls && polygon.bounds && (
              <GroundOverlay
                key={`overlay-${index}-${imageIndex}`} // Add a key to force re-render when imageIndex changes
                bounds={{
                  north: polygon.bounds.north,
                  south: polygon.bounds.south,
                  east: polygon.bounds.east,
                  west: polygon.bounds.west,
                }}
                url={polygon.overlayImageUrls[imageIndex]} // Use the selected image based on imageIndex
                options={{
                  opacity: 1, // Adjust the opacity as needed
                }}
              />
            )}
          </React.Fragment>
        ))}
      </GoogleMap>


    </div>
  ) : (
    <>
      <div style={{ width: '100%', height: '780px', }}>

      </div>

    </>
  );
};

export default React.memo(Map);
