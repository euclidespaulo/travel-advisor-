import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
    restaurant_tagcategory_standalone: '10591',
    restaurant_tagcategory: '10591',
    limit: '30',
    currency: 'USD',
    open_now: 'false',
    lunit: 'km',
    lang: 'en_US'
  },
  headers: {
    'X-RapidAPI-Key': '7b477a4dd3msh1a7f4e839fc53c2p1f0dd0jsn33291a751942',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};



const getPlacesData = async () => {

    try {
        const {data: {data}} = await axios.get(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

export default getPlacesData;
