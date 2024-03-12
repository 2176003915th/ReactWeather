import { useMemo, useState } from "react";


function App() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const getDiraryAnalysis = useMemo(() => {
        console.log("연산 시작");
        const sum = x + y;
        const sub = x - y;
        const times = x * y;
        const divd = x / y;
        return { sum, sub, times, divd};

    }, [x, y]);

    

    const {sum} = getDiraryAnalysis;
    const {sub} = getDiraryAnalysis;
    const {times} = getDiraryAnalysis;
    const {divd} = getDiraryAnalysis;
    
    return (
        <div className="App">
            x 값 : {x} &nbsp; y값 : {y}
            
            <br />
            <button onClick={() => setX(x + 1)}>x값 1 증가</button> &nbsp; <button onClick={() => setY(y + 1)}>y값 1 증가</button> 
            <br />
            <button onClick={() => setX(x - 1)}>x값 1 감소</button>&nbsp; <button onClick={() => setY(y - 1)}>y값 1 감소</button>
            <br />
            <button onClick={() => setX(0)}>x값 초기화</button>&nbsp;&nbsp;
            <button onClick={() => setY(0)}>y값 초기화</button>
            <br />
            더하기: &nbsp; {x} &nbsp; + &nbsp; {y} &nbsp; = &nbsp; {sum}
            <br />
            빼기:&nbsp; {x}&nbsp; -&nbsp; {y}&nbsp; =&nbsp; {sub}
            <br />
            곱하기:&nbsp; {x}&nbsp; X&nbsp; {y}&nbsp; =&nbsp; {times}
            <br />
            나누기:&nbsp; {x}&nbsp; /&nbsp; {y}&nbsp; =&nbsp; {divd}    
            <br />
            <h1>시간: {new Date().toLocaleTimeString()}</h1> 
            </div>
    
    );
}


export default App;

