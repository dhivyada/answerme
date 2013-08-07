var w = 500;
var h = 500;
var data = {yes: 10, no: 20};
var dataset = [];
for (attr in data) {
    dataset.push([attr, data[attr]]);
}
var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);
svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function (d, i) {
        return i * 54;
    })
    .attr("y", function (d) {
        return (h - d[1] * 10);
    })
    .attr("width", function (d) {
        return 50;
    })
    .attr("height", function (d) {
        return d[1] * 10;
    })
    .attr("fill", "teal");

var texts = svg.selectAll("text")
    .data(dataset)
    .enter();

texts.append("text")
    .text(function (d) {
        return d[0];
    })
    .attr("x", function (d, i) {
        return i * 54 + 25;
    })
    .attr("y", function (d, i) {
        return h - 5;
    })
    .attr("text-anchor", "middle");

texts.append("text")
    .text(function (d) {
        return d[1];
    })
    .attr("x", function (d, i) {
        return i * 54 + 25;
    })
    .attr("y", function (d, i) {
        return h - d[1] * 10 + 20;
    })
    .attr("text-anchor", "middle");

Pusher.log = function (message) {
    if (window.console && window.console.log) {
        window.console.log(message);
    }
};

var pusher = new Pusher('10d324bbff6815ea189a');
var channel = pusher.subscribe('answerme');
channel.bind('refresh_with_data', function (data) {

});