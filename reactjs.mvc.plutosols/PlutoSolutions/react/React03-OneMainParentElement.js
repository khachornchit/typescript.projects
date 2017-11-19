var Component = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Start with a simple component</h1>
                <p>Here is a simple component of react.js test.</p>
                <p>React.js is accepted only <strong>One Parent Component</strong> !</p>
                <hr />
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <Component />
        <Component />
        <Component />
        <Component />
    </div>,
    document.getElementById('app')
);