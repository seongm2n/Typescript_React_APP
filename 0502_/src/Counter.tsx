import React from "react";
import { useState } from "react";

export type CounterProps = {
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

  // 인라인 스타일 - 객체로 들어가기 때문에 {{}} 중괄호 두번 사용
  const h1Style = {
    fontSize: 5,
    color: "gray",
    fontFamily: "궁서체",
  };
  return (
    <div className="outline">
      {/* {}를 해줘야 title의 데이터를 가지고 온다. 여기서 props는 type을 알려줌 */}
      <h1 style={h1Style}>{title}</h1>
      {/* 타입스크립트에서 제공하는 onClick */}
      <button onClick={up}>+</button> {count}
    </div>
  );
}

export default Counter;
