import axios from 'axios';

export const getTourListFromApi = async () => {
    const response = await axios({
        method: 'get',
        url: 'localhost:5000/api/product'
    })
    return response;
}
