
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

var isInIframe = (window.location != window.parent.location) ? true : false;

if (isInIframe) {
    $(".hide-in-iframe").hide();
}
