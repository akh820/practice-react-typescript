import React, { useState } from 'react';

//key 설정 안할시 오류는 아니지만 경고 문구 발생
const IterationSample = () => {
    const [names, setNames] = useState([
        {id: 1, text: '눈사람'},
        {id: 2, text: '얼음사람'},
        {id: 3, text: '바람사람'},
        {id: 4, text: '별사람'},
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }

    const onRemove = (id: number) => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    const onClick = () => {
        //concat 대신 push 사용 가능
        const nextNames = names.concat({id: nextId, text: inputText});
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    }

    const namesList = names.map(name => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>
    ));

    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{namesList}</ul>
        </>
    )
};

export default IterationSample;