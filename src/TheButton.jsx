
const React = require('react');

const TheButton = React.createClass({
    render: function () {
        return (
            <button className="btn btn-primary" onClick={this.props.clicked}>The Button</button>
        );
    }
});

module.exports = TheButton;
