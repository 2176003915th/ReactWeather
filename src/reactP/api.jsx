import axios from 'axios';
import moment from "moment";
const BASE_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline'; 
//특정날짜의 날씨를 알려주는 해주는 visualcrossing API url
const API_KEY = 'E9S5EQR33TX2A3M4FWY6M7FU3'; //visualcrossing api키값

const searchWeather = async (city, date = new Date()) => {
    const formattedDate = moment(date).format('YYYY-MM-DD'); //날짜를 초기화함
    try {
        const response = await axios.get(  //api 요청
          `${BASE_URL}/${city}/${formattedDate}/${formattedDate}`, 
          // 패러미터값: base_url인 api url주소, 서울 위치, 시작날짜, 종료날짜
          {
            params: { //visualcrossing API 패리미터
              key: API_KEY,
              unitGroup: 'metric',
            },
          }
        );
        return response.data;
    }
    catch(err) {
        alert(err);
        return {};
    }
}

export { searchWeather };
