export const getApproximateCoords = (lat, lng) => {
    const latVariance = (Math.random() * 2000 - 1000) / 1000;
    const lngVariance = (Math.random() * 2000 - 1000) / 1000;

    const approximateLat = lat + latVariance;
    const approximateLng = lng + lngVariance;

    return [approximateLat, approximateLng];
};

// na podstawie koordynatów funkcja zwraca koordynaty różniące się od faktycznych od 1m do 2000m
