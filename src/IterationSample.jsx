import { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

  const onChange = (e) => setInputText(e.target.value);

  /*
    왜 push 함수를 사용하지 않고 concat을 사용할까?
    push 함수는 기존 배열 자체를 변경해주지만, concat은 새로운 배열을 만들어 주기 때문
  */
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });

    setNextId(nextId + 1); // nextId 값에 1을 더함
    setNames(nextNames); // names 값 업데이트
    setInputText(""); // inputText를 비움
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const namesList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;
