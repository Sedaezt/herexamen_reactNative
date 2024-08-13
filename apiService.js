// apiService.js
import axios from 'axios';

// Maak een nieuwe Axios instantie met je API basis URL
const apiClient = axios.create({
  baseURL: 'http://sport.ddev.site/api/accesoires', // Vervang met je Craft CMS API basis URL
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

// Voorbeeld van een GET-aanroep om entries op te halen
export const getEntries = async () => {
  try {
    const response = await apiClient.get('/entries', {
      params: {
        section: 'accesoires', // Pas dit aan naar je sectie of andere queryparameters
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching entries:', error);
    throw error;
  }
};

// Voorbeeld van een POST-aanroep om een nieuwe entry toe te voegen
export const createEntry = async (entryData) => {
  try {
    const response = await apiClient.post('/entries', entryData);
    return response.data;
  } catch (error) {
    console.error('Error creating entry:', error);
    throw error;
  }
};

// Voeg andere API-aanroepen toe zoals nodig
