
# React components as jQuery plugins

Did you know, you can use React without rewriting your whole app?

You can turn React components into jQuery plugins. Then you can use
them with just a few jQuery incantations:

```javascript
// src/integrate.js
$(".container .counter").clickCounter();

$(".btn-10x").click(function () {
    $(".container .counter")
        .clickCounter()[0]
        .val(10);
});

$(".btn-get").click(function () {
    var val = $(".container .counter")
            .clickCounter()[0]
            .val();

    alert("Current counter value is: "+val);
});
```

## React -> jQuery wrapper

All you have to do is wrap them like this:

```javascript
// src/main.jsx
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
                        ,
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
```

Then use Webpack to compile them into normal JavaScript code.
