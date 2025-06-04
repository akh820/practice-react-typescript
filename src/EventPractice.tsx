import React, { useState } from "react";

const EventPractice = () => {

    const [form, setForm] = useState({
        username: "",
        message: "",
        password: ""
    });

    const { username, message, password } = form;

    //js 객체 속성 덮어쓰기 규칙때문에 나중에 온 값으로 덮어 씌어진다.
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    }

    const onClick = () => {
        alert(username + " : " + message + " : " + password);
        setForm({
            username: "",
            message: "",
            password: ""
        });
    }

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
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
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={message}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <input
                type="text"
                name="password"
                placeholder="비밀번호"
                value={password}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <button onClick={onClick}>확인</button>
        </div>
    )
}
export default EventPractice;