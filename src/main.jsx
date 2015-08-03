
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
                //console.log("Hello init", this.element);
                React.render(
                    <Counter />,
                    this.element
                );
            }
        });

        $.fn[pluginName] = function (options) {
            return this.each(function () {
                if (!$.data(this, 'plugin_'+pluginName)) {
                    $.data(this, 'plugin_'+pluginName, new Plugin(this, options));
                }
            });
        };
    })(jQuery);
}

module.exports = RenderCounter;
window.RenderCounter = RenderCounter;
