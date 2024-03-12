import React, { useState } from 'react';
import Calendar from 'react-calendar'; //달력 라이브러리
import 'react-calendar/dist/Calendar.css'; // css import
import moment from "moment";
import { searchWeather } from './api';
import styled from 'styled-components';
import { useNavigate, useParams } from "react-router-dom";

function CalMain() {
  const navigate = useNavigate();
  const { city } = useParams(); // MainPage에서 입력받는 지역결과 navigate를 통해받음
  const [date, setDate] = useState(new Date());
  const [result, setResult] = useState({}); //결과


  const onChange = async date => { //이벤트 핸들러 : 달력 날짜 변경시 
    setDate(date); //날짜 데이터

    const data = await searchWeather(city, date); //변경한 날짜를 date에 받아 api인 날씨를 날짜로 조회함
    setResult(data); // setarchWeather인 api 결과를 setResult로 result에 할당함
  };

  return (
    <AppWarp>
      <StyledButton
        title="뒤로가기"
        onClick={() => {navigate('/');}}>
         이전
        </StyledButton>
    <div>
      <Calendar onChange={onChange} value={date} formatDay={(locale, date) => moment(date).format("DD")}/>
      <div className="appContent">
  {result.days && ( // result에할당된 결과를 조회
    <ResultWrap> 
      <div className="cityName">{city}</div>
      <div className="wdate">날짜 : {result.days[0].datetime}</div>
      <div className="temperature">
        최저기온: {result.days[0].tempmin}°C, 최고기온: {result.days[0].tempmax}°C
      </div>
      <div className="sky">날씨: {result.days[0].conditions}</div>
    </ResultWrap>
  )}
</div>
  
    </div>
    </AppWarp>

  );  
}



const AppWarp = styled.div`
width: 100vw;
height: 100vh;
display: flex; // 이 부분 추가

align-items: center; // 이 부분 추가
flex-direction: column; // 이 부분 추가

.appContent{
  left: 51%;
  top: 60%;
  transform: translate(-50%, -50%);
  position: absolute;
  padding: 20px;
}

`;

const ResultWrap = styled.div`
margin-top: 60px;
border: 2px black solid;
padding 10px;
border-radius: 8px;

.cityName{
  text-align: center;
  font-size: 60px;
}
.wdate {
  font-size: 24px;
}

.temperature {
  font-size: 30px;
  margin-top: 8px;
}
.sky {
  font-size: 20px;
  text-align: right;
  margin-top: 8px;
}
`;

export const CalendarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyleCalendar = styled(Calendar)`
  max-width: 100%;
  border: none;
  margin-bottom: 15px;
  padding: 20px;

  .react-calendar__navigation {
    display: flex;
    height: 24px;
    margin-bottom: 1em;
  }

  .react-calendar__navigation button {
    min-width: 24px;
    background-color: none;
  }

  .react-calendar__navigation button:disabled {
    background-color: #e8e8e8;
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e8e8e8;
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.15em;
  }

  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 1.2em 0.5em;
  }

  .react-calendar__tile--hasActive {
    color: #ffffff;
    background-color: #797979;
    border-radius: 5px;
  }

  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background-color: #797979;
  }

  .react-calendar__tile--active {
    color: #ffffff;
    background-color: #6a6a6a;
    border-radius: 7px;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: #6a6a6a;
  }
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  border: none;
  background-color: #007BFF;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
export default CalMain;