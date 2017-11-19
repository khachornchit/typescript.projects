var Comment = React.createClass({
    edit: function () {
        alert('Edit comment');
    },
    remove: function () {
        alert('Removing comment');
    },
    render: function () {
        return (
            <div>
                <div className="commentContainer">
                    <div className="commentText">{this.props.children}</div>
                    <button onClick={this.edit} className="button-primary">Edit</button>
                    <button onClick={this.remove} className="button-danger">Remove</button>
                </div>
                <hr />
            </div>
        );
    }
});

ReactDOM.render(
    <div className="board">
        <Comment>This is the 1st comment</Comment>
        <Comment>2nd comment</Comment>
        <Comment>3rd comment</Comment>
    </div>,
    document.getElementById('container')
);