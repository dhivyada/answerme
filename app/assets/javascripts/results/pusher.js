Pusher.log = function (message) {
    if (window.console && window.console.log) {
        window.console.log(message);
    }
};

var pusher = new Pusher('10d324bbff6815ea189a');
var channel = pusher.subscribe('answerme');
channel.bind('refresh_with_data', function (data) {
    var w = 500;
    var h = 600;
    if(window.location.pathname == "/results/"+ data.id) {
        d3.select("body").selectAll(".graph").selectAll("svg").remove();
        console.log(data.message);

        var dataset = [];
        var count_array=[];
        for (var attr in data.message) {
            dataset.push({option:attr, count: data.message[attr]});
            count_array.push(data.message[attr])
        }
        console.log(dataset);

//        debugger;
        var y = d3.scale.linear()
            .domain([1, d3.max(count_array)])
            .range(["10px", "550px"]);
        var svg = d3.select("body")
            .select(".graph")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .attr("style","margin-left:40%;margin-bottom:20%;align:center");
        svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x", function (d, i) {
                return i * 80;
            })
            .attr("y", function (d) {
                return (h - d.count * 10);
            })
            .attr("width", function (d) {
                return 75;
            })
            .attr("height", function (d) {
                return y(d.count);
            })
            .attr("fill", "teal");

        var texts = svg.selectAll("text")
            .data(dataset)
            .enter();

        texts.append("text")
            .attr("class","option")
            .text(function (d) {
                return d.option;
            })
            .attr("x", function (d, i) {
                return i * 80 + 38;
            })
            .attr("y", function (d, i) {
                return h - 2;
            })
            .attr("text-anchor", "middle")
            .attr("fill","white");

        texts.append("text")
            .text(function (d) {
                return d.count;
            })
            .attr("x", function (d, i) {
                return i * 80 + 40;
            })
            .attr("y", function (d, i) {
                return h - d.count * 10 - 5;
            })
            .attr("text-anchor", "middle");

    }

});