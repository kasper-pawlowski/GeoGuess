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
    const [selectedCoords, setSelectedCoords] = useState(null);
    const [clicked, isClicked] = useState(false);
    let timeoutId = null;

    const targetPosition = [coordinates?.lat, coordinates?.lng];

    const UserMarker = () => {
        useMapEvents({
            click: (e) => {
                clicked === false &&
                    (setSelectedCoords([e.latlng.lat, e.latlng.lng]),
                    setDistanceBetween(calculateDistance(targetPosition[0], targetPosition[1], e.latlng.lat, e.latlng.lng)));
            },
        });

        return selectedCoords ? <Marker className="userMarker" position={selectedCoords} /> : null;
    };

    useEffect(() => {
        if (selectedCoords) {
            isClicked(true);
        }
    }, [selectedCoords]);

    let blueIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });

    useEffect(() => {
        if (selectedCoords) {
            timeoutId = setTimeout(() => {
                handleNextRound();
            }, 1000);
        }
        return () => {
            clearTimeout(timeoutId);
        };
    }, [selectedCoords]);

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
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <UserMarker />
                    {selectedCoords && <Marker icon={blueIcon} position={targetPosition} />}
                    {selectedCoords && (
                        <Polyline
                            pathOptions={colorOptions}
                            positions={[
                                [targetPosition[0], targetPosition[1]],
                                [selectedCoords[0], selectedCoords[1]],
                            ]}
                        />
                    )}
                </MapContainer>
            </Wrapper>
        )
    );
};

export default Map;
