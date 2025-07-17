export const getApproximateCoords = (lat, lng) => {
    const latVariance = Math.random() * 0.02 + 0.001;
    const lngVariance = Math.random() * 0.02 + 0.001;

    const latSign = Math.random() < 0.5 ? -1 : 1;
    const lngSign = Math.random() < 0.5 ? -1 : 1;

    const approximateLat = lat + latVariance * latSign;
    const approximateLng = lng + lngVariance * lngSign;

    return [approximateLat, approximateLng];
};
