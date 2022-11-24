import axios from "axios";

const unsplash_url = 'https://api.unsplash.com/search/photos'

const searchImages = async (term) => {
  const response = await axios.get('http://127.0.0.1:5000/alldata', {
    params: {
      query: term
    }
  });
  return response.data.results
}

export default searchImages
