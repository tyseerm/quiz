import axios from 'axios'

export const makeRequest = async requestOptions => {
    try {
      const response = await axios(requestOptions);
      return response.data;
    } catch (err) {
      console.log(err);
  
      throw err;
    }
  };