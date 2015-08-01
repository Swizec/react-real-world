
const React = require('react');

const TheButton = require('./TheButton');

const Counter = React.createClass({
    getInitialState: function () {
        return {counter: 0}
    },

    inc: function () {
        this.setState({
            counter: this.state.counter+1
        });
    },

    render: function () {
        return (
            <div>
                <p>You have clicked The Button {this.state.counter} times!</p>
                <TheButton clicked={this.inc} />
            </div>
        );
    }
});

module.exports = Counter;
