import React, { useState } from "react";
import "./App.css";
import { link } from "fs";

type CounterProps = {
  title: string;
  initValue?: number; //optional을 써서 있음 쓰고, 안쓰면 안씀
};

// 구조분행할당으로 코드 간결화
function Counter({ title, initValue = 10 }: CounterProps) {
  // count 라는 지역변수 생성 -> useState로 승진(props에서 state로 환승)
  // initValue는 만지면 안됌
  /* 배열이므로 [], 객체면 {}
  const countState = useState(initValue); //initValue를 기본값으로 하는 state가 만들어짐
  const count = countState[0]; //첫번째 원소는 읽을 때
  const setCount = countState[1]; //두번째 원소는 변경할 때
  */

  /*
  type SetStateAction<S> = S | ((prevState:S) => S);
  type Dispatch<A> = (value: A) => void;
  function useState<number>(initialState: string | (()=>S)):[S, Dispatch<setStateAction<A>];
  */

  const [count, setCount] = useState<number>(initValue); //<number> -> 제네릭
  function up() {
    // initValue의 값을 증가
    // 값이 증가되면 컴포넌트가 다시 실행되서 새로운 값이 화면에 표시
    // 컴포넌트로 들어오는 값 => props
    // 감히 컴포넌트가 props를 바꾸지 않음
    // count = count + 1;
    setCount(count + 1);
  }
  return (
    <div>
      {/* {}를 해줘야 title의 데이터를 가지고 온다. 여기서 props는 type을 알려줌 */}
      <h1>{title}</h1>
      {/* 타입스크립트에서 제공하는 onClick */}
      <button onClick={up}>+</button> {count}
    </div>
  );
}
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
    <>
      <h1>Counter2</h1>
      <button onClick={up}>+</button>
      <ol>
        {times.map((value, index, array) => {
          console.log(value, index, array);
          return <li key={index}>{value}</li>;
        })}
      </ol>
    </>
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
        onClick={() =>
          setCount(
            (count === undefined ? 0 : count) + step
          )
        }
      >
        +
      </button>
      {count}
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
    </div>
  );
}

export default App;
