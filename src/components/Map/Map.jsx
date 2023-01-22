import React, { useEffect, useState } from 'react';
import { Wrapper } from './Map.styled';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { calculateDistance } from '../../helpers/calculateDistance';
import { getApproximateCoords } from '../../helpers/getApproximateCoords';
import useAiFunctions from '../../hooks/useAiFunctions';

const Map = ({ coordinates, setDistanceBetween, handleNextRound }) => {
    const [markerCoords, setMarkerCoords] = useState(null);
    let timeoutId = null;
    const { addRandomDistanceForAi } = useAiFunctions();

    const targetPosition = [coordinates?.lat, coordinates?.lng];

    const MyMarker = () => {
        useMapEvents({
            click: (e) => {
                setMarkerCoords([e.latlng.lat, e.latlng.lng]);
                setDistanceBetween(calculateDistance(targetPosition[0], targetPosition[1], e.latlng.lat, e.latlng.lng));
                addRandomDistanceForAi();
            },
        });

        return markerCoords ? <Marker position={markerCoords} /> : null;
    };

    useEffect(() => {
        if (markerCoords) {
            timeoutId = setTimeout(() => {
                handleNextRound();
            }, 500);
        }
        return () => {
            clearTimeout(timeoutId);
        };
    }, [markerCoords]);

    return (
        coordinates && (
            <Wrapper>
                <MapContainer
                    dragging={false}
                    zoomControl={false}
                    doubleClickZoom={false}
                    center={getApproximateCoords(targetPosition[0], targetPosition[1])}
                    zoom={12}
                    scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <MyMarker />
                </MapContainer>
            </Wrapper>
        )
    );
};

export default Map;
