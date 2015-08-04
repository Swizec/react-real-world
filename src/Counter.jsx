
const React = require('react');

const TheButton = require('./TheButton'),
      Descriptor = require('./Descriptor');

const Counter = React.createClass({
    getInitialState: function () {
        return {counter: this.props.value || 0}
    },

    inc: function () {
        this.setState({
            counter: this.state.counter+1
        });
    },

    componentWillReceiveProps: function (nextProps) {
        if (nextProps.value) {
            this.setState({counter: nextProps.value});
        }
    },

    render: function () {
        return (
            <div>
                <Descriptor count={this.state.counter} />
                <TheButton clicked={this.inc} />
            </div>
        );
    }
});

module.exports = Counter;
