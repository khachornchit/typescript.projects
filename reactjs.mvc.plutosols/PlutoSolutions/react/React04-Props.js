var Component = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Title : {this.props.title}</h1>
                <h2>Genre : {this.props.genre}</h2>
                <hr />
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <Component title="The Matrix" genre="Sifi Movie" />
        <Component title="Avatar" genre="Sifi Movie" />
        <Component title="Romeo and Juliet" genre="Romantic" />
        <Component title="Why Don't'" genre="Korea" />
    </div>,
    document.getElementById('app')
);