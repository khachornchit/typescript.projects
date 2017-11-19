var Comment = React.createClass({
    getInitialState: function () {
        return { editing: false }
    },
    edit: function () {
        this.setState({ editing: true });
    },
    remove: function () {
        console.log('Removing comment');
    },
    save: function () {
        this.setState({ editing: false });
    },
    renderNormal: function () {
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
    },
    renderForm: function () {
        return (
            <div>
                <div className="commentContainer">
                    <textarea defaultValue={this.props.children}></textarea>
                    <button onClick={this.save} className="button-success">Save</button>
                </div>
                <hr />
            </div>
        );
    },
    render: function () {
        if (this.state.editing) {
            return this.renderForm();
        } else {
            return this.renderNormal();
        };
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