
const React = require('react'),
      Counter = require('./Counter');

function RenderCounter(selector) {
    React.render(
        <Counter />,
        document.querySelectorAll(selector)[0]
    );
}

module.exports = RenderCounter;
window.RenderCounter = RenderCounter;
