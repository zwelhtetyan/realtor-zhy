import axios from 'axios';

export const baseURL = 'https://bayut.p.rapidapi.com/properties/list';

export const fetchAPI = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': '0ccd21e225mshb1b3672cd9debf6p1bfd1bjsnec03cc9247ee',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  });

  return data;
};
