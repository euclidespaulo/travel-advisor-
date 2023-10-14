import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


const getPlacesData = async (sw, ne) => {

    try {
        const {data: {data}} = await axios.request(URL, {
            method: 'GET',
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': '7b477a4dd3msh1a7f4e839fc53c2p1f0dd0jsn33291a751942',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });

       return data;

    } catch (error) {
        console.error(error);
    }
}

export default getPlacesData;
