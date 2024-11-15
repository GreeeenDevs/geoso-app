import React, { useCallback } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px", // Ajuste conforme necessário
};

const center = {
  lat: -23.538550, // Latitude
  lng: -46.479520, // Longitude
  
};

function SearchPage() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
  googleMapsApiKey: "AIzaSyBnQ_NYOQ3-6vsr-P_w7ipBkGfNTJ_cuUY",

  });

  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
  }, []);

  return (
    <div>
      <h1>Serviços</h1>
      <p>Aqui estão nossos serviços e localização:</p>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
          onLoad={onLoad}
        >
          <Marker position={center} />
        </GoogleMap>
      ) : (
        <div>Carregando mapa...</div>
      )}
    </div>
  );
}

export default SearchPage;