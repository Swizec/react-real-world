
const React = require('react');

const Descriptor = React.createClass({
    render: function () {
        var text = (<p>You've clicked The Button {this.props.count} times!</p>);

        if (this.props.count === 0) {
            text = (<p>You haven't clicked The Button yet!</p>);
        }else if (this.props.count === 1) {
            text = (<p>You only clicked The Button once!</p>);
        }else if (this.props.count === 2) {
            text = (<p>You clicked The Button twice!</p>);
        }

        return text;
    }
});

module.exports = Descriptor;
