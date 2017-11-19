var Comment = React.createClass({
    getInitialState: function () {
        return { editing: false }
    },
    edit: function () {
        this.setState({ editing: true });
    },
    remove: function () {
        console.log('Removing comment');
        this.props.deleteFromBoard(this.props.index);
    },
    save: function () {
        console.log(this.props.index + ' : ' + this.refs.newText.value);
        this.props.updateCommentText(this.refs.newText.value, this.props.index);
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
                    <textarea ref="newText" defaultValue={this.props.children}></textarea>
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

var Board = React.createClass({
    getInitialState: function () {
        return {
            comments: [
                'Initial comment #1',
                'Initial comment #2',
                'Initial comment #3',
            ]
        }
    },
    removeComment: function (i) {
        console.log('Removing comment: ' + i);
        var arr = this.state.comments;
        arr.splice(i, 1);
        this.setState({ comments: arr });
    },
    updateComment: function (newText, i) {
        console.log('Updating comment : ', i);
        var arr = this.state.comments;
        arr[i] = newText;
        this.setState({ comments: arr });
    },
    eachComment: function (text, i) {
        return (
            <Comment key={i} index={i} updateCommentText={this.updateComment} deleteFromBoard={this.removeComment}>
                {text}
            </Comment>
        );
    },
    render: function () {
        return (
            <div className="board">
                {
                    this.state.comments.map(this.eachComment)
                }
            </div>
        );
    }
});

ReactDOM.render(
    <Board />,
    document.getElementById('container')
);