Pusher.log = function (message) {
    if (window.console && window.console.log) {
        window.console.log(message);
    }
};

var pusher = new Pusher('10d324bbff6815ea189a');
var channel = pusher.subscribe('answerme');
channel.bind('refresh_with_data', function (data) {
    if(window.location.pathname == "/results/"+ data.id) {
        d3.select("body").selectAll("svg").remove();
        console.log(data.message);
        var w = 500;
        var h = 650;
        var dataset = [];
        for (var attr in data.message) {
            dataset.push([attr, data.message[attr]]);
        }
        var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .attr("style","margin-left:750px");
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
            .attr("class","option")
            .text(function (d) {
                return d[0];
            })
            .attr("x", function (d, i) {
                return i * 54 + 25;
            })
            .attr("y", function (d, i) {
                return h - 2;
            })
            .attr("text-anchor", "middle")
            .attr("fill","white");

        texts.append("text")
            .text(function (d) {
                return d[1];
            })
            .attr("x", function (d, i) {
                return i * 54 + 25;
            })
            .attr("y", function (d, i) {
                return h - d[1] * 10 - 5;
            })
            .attr("text-anchor", "middle");

    }

});