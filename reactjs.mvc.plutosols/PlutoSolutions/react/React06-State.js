var State = React.createClass({
    getInitialState: function () {
        return { checked: true }
    },
    handleChecked: function () {
        this.setState({ checked: !this.state.checked })
    },
    render: function () {
        var msg;
        if (this.state.checked) {
            msg = 'checked';
        } else {
            msg = 'unchecked';
        }
        return (
            <div>
                <input type="checkbox" onChange={this.handleChecked} defaultChecked={this.state.checked} />
                <h2>Checkbox is {msg}</h2>
            </div>
        );
    }
});

ReactDOM.render(<State />, document.getElementById('container'));