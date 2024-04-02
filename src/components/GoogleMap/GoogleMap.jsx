import React, { useEffect, useRef } from 'react';

const GoogleMap = () => {
    const mapRef = useRef(null);

    const handleScriptLoad = () => {
        const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: 40.7128, lng: -74.0060 },
            zoom: 12,
        });

        // Aquí puedes agregar más configuraciones de mapa, marcadores, etc.
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCg2n9BGvPsbiF1Ufl9_PGUcZkqTf0gYtg&libraries=places`;
        script.async = true;
        script.onload = handleScriptLoad;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <div ref={mapRef} style={{ height: '400px', width: '100%' }}></div>;
}

export default GoogleMap;