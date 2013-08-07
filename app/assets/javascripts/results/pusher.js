Pusher.log = function(message) {
    if (window.console && window.console.log) {
        window.console.log(message);
    }
};

var pusher = new Pusher('10d324bbff6815ea189a');
var channel = pusher.subscribe('answerme');
channel.bind('refresh_with_data', function(data) {
    var dataset = [];
    for(attr in data){
      dataset.push([attr, data[attr]]) ;
    }
    var colors = d3.scale.linear().domain([0, 10]).range(["red", "blue"]);
    d3.select(".graph").selectAll("div")
        .data(dataset)
        .enter()
        .append("div")
        .attr("class", "bar")
        .style("width", function(d) {
            var barHeight = d[1] * 10;
            return barHeight + "px";
        })
        .style("background",function(d){
            return colors(d[1]);
        })
        .style("height", "20px");
});