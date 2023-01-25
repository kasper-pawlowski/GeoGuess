import React, { useEffect, useState } from 'react';
import { Wrapper } from './Map.styled';
import { MapContainer, TileLayer, Marker, useMapEvents, Polyline } from 'react-leaflet';
import { calculateDistance } from '../../helpers/calculateDistance';
import { getApproximateCoords } from '../../helpers/getApproximateCoords';
import { theme } from '../../styles/theme';
import L from 'leaflet';
import { useGameCtx } from '../../contexts/GameContext';

const Map = ({ coordinates, handleNextRound }) => {
    const { setDistanceBetween } = useGameCtx();
    const [markerCoords, setMarkerCoords] = useState(null);
    const [clicked, isClicked] = useState(false);
    let timeoutId = null;

    const targetPosition = [coordinates?.lat, coordinates?.lng];

    const UserMarker = () => {
        useMapEvents({
            click: (e) => {
                clicked === false &&
                    (setMarkerCoords([e.latlng.lat, e.latlng.lng]),
                    setDistanceBetween(calculateDistance(targetPosition[0], targetPosition[1], e.latlng.lat, e.latlng.lng)));
            },
        });

        return markerCoords ? <Marker className="userMarker" position={markerCoords} /> : null;
    };

    useEffect(() => {
        if (markerCoords) {
            isClicked(true);
        }
    }, [markerCoords]);

    var blueIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });

    useEffect(() => {
        if (markerCoords) {
            timeoutId = setTimeout(() => {
                handleNextRound();
            }, 1000);
        }
        return () => {
            clearTimeout(timeoutId);
        };
    }, [markerCoords]);

    const colorOptions = { color: theme.colors.accent };

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
                    <UserMarker />
                    {markerCoords && <Marker icon={blueIcon} position={targetPosition} />}
                    {markerCoords && (
                        <Polyline
                            pathOptions={colorOptions}
                            positions={[
                                [targetPosition[0], targetPosition[1]],
                                [markerCoords[0], markerCoords[1]],
                            ]}
                        />
                    )}
                </MapContainer>
            </Wrapper>
        )
    );
};

export default Map;
