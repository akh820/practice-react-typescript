import React, { useState } from "react";

const EventPractice = () => {

    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    //타입스크립트는 들어오는 이벤트도 표시해줘야 한다.
    const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }
    const onChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    }
    const onClick = () => {
        alert(username + ": " + message);
        setUsername("");
        setMessage("");
    }

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onClick();
        }
    }

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChangeUsername}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={message}
                onChange={onChangeMessage}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    )
}
export default EventPractice;