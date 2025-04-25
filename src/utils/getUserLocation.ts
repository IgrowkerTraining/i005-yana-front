export const getUserLocation = (): Promise<[number, number]> => {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve([40.41672071780762, -3.703395193582358]); // Madrid como fallback
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve([latitude, longitude]);
      },
      (error) => {
        console.error('Error getting location:', error);
        resolve([40.41672071780762, -3.703395193582358]); // Madrid como fallback
      }
    );
  });
};
