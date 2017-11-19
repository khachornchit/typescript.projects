var Component = React.createClass({
    render: function () {
        return (
            <h1>Create a simple component by react.js</h1>
        );
    }
});

ReactDOM.render(
    <Component />,
    document.getElementById('app')
);