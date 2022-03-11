const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, props.name),
        React.createElement("h3", {}, props.animal),
        React.createElement("h3", {}, props.breed),
    ]);
};


const App = () => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", { id: "brand-name" }, "Course App"),
            React.createElement(Pet, { name: "Lili", animal: "Dog", breed: "West terrier"}),
            React.createElement(Pet, { name: "Zara", animal: "Cat", breed: "British"}),
            React.createElement(Pet, { name: "Nemo", animal: "Fish", breed: "Clownfish"}),
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));