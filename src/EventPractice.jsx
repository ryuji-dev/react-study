import { Component } from "react";

class EventPractice extends Component {
  state = {
    username: "",
    message: "",
  };

  // 입력 필드의 값이 변경될 때 호출되는 이벤트 핸들러
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // 확인 버튼을 클릭했을 때 호출되는 이벤트 핸들러
  handleClick = () => {
    alert(this.state.username + ": " + this.state.message); // 입력된 정보를 알림창에 표시
    this.setState({ username: "", message: "" }); // 입력 필드 초기화
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
