import React, { useEffect, useState } from 'react';
import { Wrapper } from './Map.styled';
import { MapContainer, TileLayer, Marker, useMapEvents, Polyline } from 'react-leaflet';
import { calculateDistance } from '../../helpers/calculateDistance';
import { getApproximateCoords } from '../../helpers/getApproximateCoords';
import useAiFunctions from '../../hooks/useAiFunctions';
import { theme } from '../../styles/theme';

const Map = ({ coordinates, setDistanceBetween, handleNextRound, secondsLeft }) => {
    const [markerCoords, setMarkerCoords] = useState(null);
    const [clicked, isClicked] = useState(false);
    let timeoutId = null;

    const targetPosition = [coordinates?.lat, coordinates?.lng];

    const UserMarker = () => {
        useMapEvents({
            click: (e) => {
                clicked === false && setMarkerCoords([e.latlng.lat, e.latlng.lng]);
                setDistanceBetween(calculateDistance(targetPosition[0], targetPosition[1], e.latlng.lat, e.latlng.lng));
            },
        });

        return markerCoords ? <Marker className="userMarker" position={markerCoords} /> : null;
    };

    useEffect(() => {
        if (markerCoords) {
            isClicked(true);
        }
    }, [markerCoords]);

    // useEffect(() => {
    //     if (clicked || secondsLeft === 0) {

    //     }
    // }, [secondsLeft, clicked]);

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
                    {markerCoords && <Marker position={targetPosition} />}
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
