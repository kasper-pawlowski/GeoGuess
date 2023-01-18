export const getApproximateCoords = (lat, lon) => {
    const latVariance = Math.random() * 0.009 + 0.001;
    const lonVariance = Math.random() * 0.009 + 0.001;

    const latSign = Math.random() < 0.5 ? -1 : 1;
    const lonSign = Math.random() < 0.5 ? -1 : 1;

    const approximateLat = lat + latVariance * latSign;
    const approximateLon = lon + lonVariance * lonSign;

    return [approximateLat, approximateLon];
};
