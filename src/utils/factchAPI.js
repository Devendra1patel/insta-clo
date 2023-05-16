// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'de8de9c25fmsh4b72a2d9bd196eap19ca6bjsndb04fed285c8',
// 		'X-RapidAPI-Host': 'instagram-scraper-2022.p.rapidapi.com'
// 	}
// };

// export default fetch =   fetch('https://instagram-scraper-2022.p.rapidapi.com/ig/info_username/?user=l_._devendra_._l', options)
// 	.then(response => response.json())
// .catch(err => console.error(err));
// .then(response => console.log(response))

// import axios from "axios";

// const BASE_URL= 'https://instagram-scraper-2022.p.rapidapi.com/ig';

// const options = {
// //   params: {user: 'sanembahcekapili'},
//   headers: {
//     'X-RapidAPI-Key': 'de8de9c25fmsh4b72a2d9bd196eap19ca6bjsndb04fed285c8',
//     'X-RapidAPI-Host': 'instagram-scraper-2022.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

// export default axios = (url) =>{
//    const { data } = axios.request(`${BASE_URL}/${url}`,options);
//    return data;
// };

import axios from 'axios';
// const axios = require("axios");

const BASE_URL = 'https://twitter135.p.rapidapi.com/';
const options = {
  // method: 'GET',
  // url : 'https://twitter135.p.rapidapi.com/AutoComplete/',

  // params: {q: 'elonmusk'},
  headers: {
    'X-RapidAPI-Key': 'de8de9c25fmsh4b72a2d9bd196eap19ca6bjsndb04fed285c8',
    'X-RapidAPI-Host': 'twitter135.p.rapidapi.com'
  }
};
// https://twitter135.p.rapidapi.com/UserByScreenName/?username=elonmusk
// https://twitter135.p.rapidapi.com/Search/?q=Dogecoin&count=20'
 const fetchAPI = async (url) =>{
  const { data } = await axios.get('https://twitter135.p.rapidapi.com/Search/?q=Dogecoin&count=20', options);
  return data;
}
export default  fetchAPI;
// (`${BASE_URL}/${url}`