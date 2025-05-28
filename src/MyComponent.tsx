interface MyComponentProps {
    name?: string;
}

const MyComponent = ({name = "미설정"} : MyComponentProps) => {
    return <div>MyComponent {name}</div>;
};

// Class Component 에서 사용하는 방식으로 typeScript 에서 사용하는 형식으로 변환
// MyComponent.defaultProps = {
//     name: "설정되지 않음"
// }

export default MyComponent;