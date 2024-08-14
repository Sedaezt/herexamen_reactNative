const BASE_URL = 'http://sport.ddev.site/api/accesoires'; // Vervang met je correcte API URL

export const getAccesoires = async () => {
  try {
    const response = await fetch(BASE_URL);

    // Controleer of de response status goed is
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data; // Dit is de JSON data van je API
  } catch (error) {
    console.error('Error fetching accesoires:', error);
    throw error; // Gooi de fout opnieuw om deze later af te handelen
  }
};
