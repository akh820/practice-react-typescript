// js에서는 propType으로 타입을 검사했지만 TypeScript 에서는 타입을 검사하기 위해 인터페이스를 사용
interface MyComponentProps {
    name?: string;
    children?: React.ReactNode;
}

//{name, children} 으로 비구조화 할당 진행
const MyComponent = ({name = "미설정", children} : MyComponentProps) => {
    return (
        <>
        <div>
            컴포넌트 라인 : MyComponent {name}
        </div>
        <div>
            children 라인 : {children}
        </div>
        </>
    );
};

// Class Component 에서 사용하는 방식으로 typeScript 에서 사용하는 형식으로 변환
// MyComponent.defaultProps = {
//     name: "설정되지 않음"
// }

export default MyComponent;