function Heading(props) {
    console.log(props); // logged twice in chrome
    // {
    //     "firstName": "Bob",
    //     "age": "30"
    // }
    return (
        <h1>Hello, {props.firstName}</h1>
    );
}

export default Heading;
