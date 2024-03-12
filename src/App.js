import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MainPage from './reactP/MainPage';
import CalMain from './reactP/CalMain';

const MainTittleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function App(props) {
    return (
    <BrowserRouter>
        <MainTittleText>날씨 검색</MainTittleText>
        <Routes>
            <Route index element={<MainPage/>}/>
            <Route path='/cal-page/:city' element={<CalMain/>}/>
        </Routes>
    </BrowserRouter>
    );
}

export default App;