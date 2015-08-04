
const React = require('react'),
      Counter = require('./Counter');

function RenderCounter(selector) {
    React.render(
        <Counter />,
        document.querySelectorAll(selector)[0]
    );
}

if (typeof jQuery !== 'undefined') {
    (function ($) {
        var pluginName = "clickCounter",
            defaults = {
                value: 0
            };

        function Plugin(element, options) {
            this.element = element;
            this.settings = $.extend({}, defaults, options);
            this._defaults = defaults;
            this._name = pluginName;
            this.init();
        }

        $.extend(Plugin.prototype, {
            init: function () {
                this.component = React.render(
                    <Counter value={this.settings.value} />,
                    this.element
                );
                return this;
            },

            val: function (val) {
                if (!arguments.length) {
                    return this.component.state.counter;
                }else{
                    this.settings.value = val;
                    this.init();
                }
            }
        });

        $.fn[pluginName] = function (options) {
            return this.map(function () {
                if (!$.data(this, 'plugin_'+pluginName)) {
                    $.data(this, 'plugin_'+pluginName, new Plugin(this, options));
                }
                return $.data(this, 'plugin_'+pluginName);
            });
        };
    })(jQuery);
}

module.exports = RenderCounter;
window.RenderCounter = RenderCounter;
