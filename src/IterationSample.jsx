const IterationSample = () => {
  const names = ["눈사람", "얼음", "눈", "바람"];
  /*
    const nameList = names.map((name) => <li>{name}</li>);

    위 코드는 오류가 남
    이 오류는 map 함수를 사용하여 요소를 생성할 때, 각 요소에 고유한 key 속성을 추가하지 않았기 때문에 발생함
    React는 리스트의 각 항목을 구별하기 위해 key 속성을 필요함
    아래는 수정된 코드다.
  */
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSample;
