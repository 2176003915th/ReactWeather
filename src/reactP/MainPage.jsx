import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { searchWeather } from './api';
import React, { useState } from 'react';

function MainPage(props) {
    const navigate = useNavigate();
    const [city, setCity] = useState(''); // 도시 입력받는 state
    
    const handleInputChange = (e) => { // 이벤트 핸들러 추가
        setCity(e.target.value);
    };

    const handleSearch = async city => {
        if(city) {
            //입력받은 도시명으로 날씨 검색
            setCity(''); // 초기화
            navigate(`/cal-page/${city}`); //CalMain.jsx인 달력페이지로 지역값을 넘김 (값 넘길때는 ``사용 '' 금지) 
        } else {
            alert("도시명을 입력해주세요.");
        }
    };

    return (
        <AppWrap>
                <div className="appContenWrap">
                    <input
                    placeholder="도시를 입력하세요"
                    value={city}
                    type="text"
                    onChange={handleInputChange}
                    />
                    <StyledButton
                        title="도시 입력하기"
                        onClick={() => handleSearch(city)}
                        >검색
                    </StyledButton>
                </div>
        </AppWrap>
          

    );
}

const AppWrap = styled.div`
    width: 100vw;
    height: 100vh;
    text-align: center;

    .appContentWrap {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        padding: 20px;
    }
    
    input {
        padding: 16px;
        border: 2px black solid;
        border-radius: 16px;
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


export default MainPage;