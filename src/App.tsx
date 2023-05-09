import React, { useState } from "react";
import "./App.css";
import style from "./App.module.css";
import Counter, { CounterProps } from "./Counter";

function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

// 1. state가 배열이나 객체일 때는 값을 변경할 때 복제본을 변경한다.
// 2. for,map을 이요해서 목록을 생성할 때 key값을 제공한다.
// 3. state가 배열일 때 값이 없다면 추론을 사용할 수 없기 때문에 제네릭을 명시적으로 입력한다.
function Counter2() {
  /*
  배열과 객체와 같이 데이터를 담는 그릇은 데이터를 직접 바꾸면 안된다.
  상태의 데이터타입이 배열이나 객체면 복제하고 복제본을 수정한다.
  보통 state의 intialState에 들어가는 값을 보고 타입을 자동적으로 추론하는데,
  []이렇게 빈 배열의 경우는 추측할 수 없기 때문에 never[]로 인식합니다.
  void는 없다! 이고 never는 추측할 수 없다.
  */
  const [times, setTimes] = useState<string[]>([]);
  console.log("times", times);
  function up() {
    /* 고치기 전 코드 (원본을 바꾼것)
     * times.push(getCurrentTime());
     * setTimes(times);
     */

    //(복제본을 바꾼것)
    const newTimes = [...times];
    newTimes.push(getCurrentTime());
    setTimes(newTimes);
  }
  return (
    <div className={style.layout}>
      <h1>Counter2</h1>
      <button onClick={up}>+</button>
      <ol>
        {times.map((value, index, array) => {
          console.log(value, index, array);
          return <li key={index}>{value}</li>;
        })}
      </ol>
    </div>
  );
}
//input과 같은 form 태그와 state를 연동하고 react에서 사용하는 방법
function Counter3() {
  const [count, setCount] = useState<number>();
  const [step, setStep] = useState<number>(100);
  return (
    <>
      <h1>Counter3</h1>
      <input
        type="number"
        value={step}
        onChange={(evt) => {
          setStep(Number(evt.target.value));
        }}
      />
      <button
        onClick={() => setCount((count === undefined ? 0 : count) + step)}
      >
        +
      </button>
      {count}
    </>
  );
}

type countType = {
  time: string;
  step: number;
};
function Counter4() {
  const [count, setCount] = useState<countType[]>([]); //state의 타입을 지정해줘야함
  const [step, setStep] = useState(1);
  return (
    <>
      <h1>Counter4</h1>
      <input
        type="number"
        value={step}
        onChange={(event) => {
          setStep(Number(event.target.value));
        }}
      />
      <button
        onClick={() => {
          const newCount = [...count];
          newCount.push({ time: getCurrentTime(), step: step });
          setCount(newCount);
        }}
      >
        +
      </button>
      <table>
        <tr>
          <td>총계</td>
          <td>
            {/* for문을 reduce로 변경 */}
            {count.reduce((누적된값, 현재순번의원소) => {
              console.log(누적된값, 현재순번의원소);
              return 누적된값 + 현재순번의원소.step;
            }, 0)}
          </td>
        </tr>
        <tr>
          <td>time</td>
          <td>step</td>
        </tr>
        {count.map((value, index) => {
          return (
            <tr key={index}>
              <td>{value.time}</td>
              <td>{value.step}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

function App() {
  return (
    <div>
      {/* 문자열이 아닌 다른 데이터 타입음 {}로 써야함*/}
      <Counter title="불면증 카운터" initValue={10} />
      <Counter2 />
      <Counter3 />
      <Counter4 />
    </div>
  );
}

export default App;
