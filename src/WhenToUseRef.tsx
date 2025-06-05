import React, { Component } from 'react';

class WhenToUseRef extends Component {
    // ref가 필요한 상황들
    inputRef = React.createRef<HTMLInputElement>();
    videoRef = React.createRef<HTMLVideoElement>();
    scrollRef = React.createRef<HTMLDivElement>();

    // ========== 1. ref가 꼭 필요한 상황들 ==========
    
    // 🎯 상황 1: DOM 메서드 직접 호출이 필요할 때
    handleFocus = () => {
        // React에는 포커스를 주는 컴포넌트 속성이 없음
        // DOM의 focus() 메서드를 직접 호출해야 함
        this.inputRef.current?.focus();
    }

    handleSelectText = () => {
        // 텍스트 선택도 DOM 메서드 직접 호출 필요
        this.inputRef.current?.select();
    }

    // 🎯 상황 2: 미디어 제어 (비디오, 오디오)
    handlePlayVideo = () => {
        // React에는 비디오 재생 속성이 없음
        // DOM의 play() 메서드 직접 호출 필요
        this.videoRef.current?.play();
    }

    handlePauseVideo = () => {
        this.videoRef.current?.pause();
    }

    // 🎯 상황 3: 스크롤 위치 조정
    handleScrollToTop = () => {
        // scrollTo는 DOM 메서드, React 속성으로 불가능
        this.scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }

    handleScrollToBottom = () => {
        const element = this.scrollRef.current;
        if (element) {
            element.scrollTo({ 
                top: element.scrollHeight, 
                behavior: 'smooth' 
            });
        }
    }

    // ========== 2. ref 없이도 가능한 상황들 ==========
    
    state = {
        inputValue: '',
        showMessage: false
    }

    // ✅ 이런 건 ref 없이 state로 해결 가능
    handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ inputValue: e.target.value });
    }

    handleToggleMessage = () => {
        this.setState({ showMessage: !this.state.showMessage });
    }

    render() {
        return (
            <div style={{ padding: '20px' }}>
                <h2>🤔 ref를 언제 써야 할까?</h2>

                {/* ref가 꼭 필요한 경우들 */}
                <div style={{ border: '2px solid orange', padding: '15px', margin: '10px 0' }}>
                    <h3>🎯 ref가 꼭 필요한 상황들</h3>
                    
                    <h4>1. DOM 메서드 직접 호출</h4>
                    <input 
                        ref={this.inputRef}
                        placeholder="포커스/선택 테스트용 입력창"
                        style={{ width: '300px', margin: '5px' }}
                    />
                    <br />
                    <button onClick={this.handleFocus}>포커스 주기</button>
                    <button onClick={this.handleSelectText}>텍스트 선택</button>
                    <p style={{ fontSize: '14px', color: 'orange' }}>
                        💡 React에는 focus(), select() 같은 속성이 없어서 ref 필수!
                    </p>

                    <h4>2. 미디어 제어</h4>
                    <video 
                        ref={this.videoRef}
                        width="300" 
                        height="200"
                        style={{ display: 'block', margin: '10px 0' }}
                    >
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                        비디오를 지원하지 않는 브라우저입니다.
                    </video>
                    <button onClick={this.handlePlayVideo}>재생</button>
                    <button onClick={this.handlePauseVideo}>정지</button>
                    <p style={{ fontSize: '14px', color: 'orange' }}>
                        💡 play(), pause() 메서드는 DOM에서만 가능!
                    </p>

                    <h4>3. 스크롤 제어</h4>
                    <div 
                        ref={this.scrollRef}
                        style={{ 
                            height: '150px', 
                            overflow: 'auto', 
                            border: '1px solid #ccc',
                            padding: '10px'
                        }}
                    >
                        <p>스크롤 테스트 내용 1</p>
                        <p>스크롤 테스트 내용 2</p>
                        <p>스크롤 테스트 내용 3</p>
                        <p>스크롤 테스트 내용 4</p>
                        <p>스크롤 테스트 내용 5</p>
                        <p>스크롤 테스트 내용 6</p>
                        <p>스크롤 테스트 내용 7</p>
                        <p>스크롤 테스트 내용 8</p>
                        <p>스크롤 테스트 내용 9</p>
                        <p>스크롤 테스트 내용 10</p>
                    </div>
                    <button onClick={this.handleScrollToTop}>맨 위로</button>
                    <button onClick={this.handleScrollToBottom}>맨 아래로</button>
                    <p style={{ fontSize: '14px', color: 'orange' }}>
                        💡 scrollTo() 메서드도 DOM에서만 가능!
                    </p>
                </div>

                {/* ref 없이도 가능한 경우들 */}
                <div style={{ border: '2px solid green', padding: '15px', margin: '10px 0' }}>
                    <h3>✅ ref 없이도 가능한 상황들 (state 사용)</h3>
                    
                    <h4>1. 입력값 관리</h4>
                    <input 
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        placeholder="값 변경 테스트"
                        style={{ width: '300px', margin: '5px' }}
                    />
                    <p>현재 값: {this.state.inputValue}</p>
                    <p style={{ fontSize: '14px', color: 'green' }}>
                        💡 값 읽기/쓰기는 state로 충분!
                    </p>

                    <h4>2. 화면 표시/숨김</h4>
                    <button onClick={this.handleToggleMessage}>
                        메시지 {this.state.showMessage ? '숨기기' : '보이기'}
                    </button>
                    {this.state.showMessage && (
                        <p style={{ background: 'lightgreen', padding: '10px' }}>
                            안녕하세요! 이것은 state로 관리되는 메시지입니다.
                        </p>
                    )}
                    <p style={{ fontSize: '14px', color: 'green' }}>
                        💡 보이기/숨기기는 state로 충분!
                    </p>
                </div>

                <div style={{ backgroundColor: '#f9f9f9', padding: '15px', margin: '20px 0' }}>
                    <h3>📝 정리: ref를 언제 써야 할까?</h3>
                    <ul>
                        <li><strong>ref 꼭 필요</strong>: DOM 메서드 직접 호출 (focus, play, scrollTo 등)</li>
                        <li><strong>ref 불필요</strong>: 데이터 관리, 화면 업데이트 (state로 해결)</li>
                        <li><strong>원칙</strong>: React 방식으로 해결 안 될 때만 ref 사용!</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default WhenToUseRef; 