import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('/api/example');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

fetchData();
