import React, { Component } from 'react';

class RefSample extends Component {
    //input = React.createRef(); // 타입 추론 불가능, 따라서 타입 지정 필요
    input = React.createRef<HTMLInputElement>();

    handleFocus = () => {
        this.input.current?.focus();
    }

    render() {
        return (
            <div>
                <input ref={this.input} placeholder="이 입력창에 포커스가 갑니다" />
                <button onClick={this.handleFocus}>입력창에 포커스 주기</button>
            </div>
        );
    }
}

export default RefSample;