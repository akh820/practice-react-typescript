import './App.css'
import MyComponent from './MyComponent';
import Say from './Say';
import EventPractice from './EventPractice';

function App() {

  const name: String = "홍길동";

  return (
    <>
      <h1 className="react">Hello {name}!</h1>
      <MyComponent name="길동쓰로 설정함~"> {/* props 전달 */}
        <p>children 전달</p>
      </MyComponent>
      <Say />
      <EventPractice />
    </>
  )
}

export default App