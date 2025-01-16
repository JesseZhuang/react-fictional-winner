// define to be used inline, more self contained, but a bit harder to maintain
// note camelCase, comma, string values
const styles = {
    color: "tomato",
    fontSize: "40px"
}

function FunctionalComponent() {
    return (
        <h1 style = {styles}>a functional component</h1>
    );
}

// named export
export function Example3() {

    const getRandomNum = () => Math.floor(Math.random() * 10) + 1

    return (
        <div className="heading">
            <h1>Here's a random number from 0 to 10: { getRandomNum() }</h1>
        </div>
    );
}

// default export
export default FunctionalComponent;
