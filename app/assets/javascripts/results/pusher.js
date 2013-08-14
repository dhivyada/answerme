Pusher.log = function (message) {
    if (window.console && window.console.log) {
        window.console.log(message);
    }
};

var pusher = new Pusher('10d324bbff6815ea189a');
var channel = pusher.subscribe('answerme');


channel.bind(event_name, function (data) {
    console.log(data);
    d3.select("body").selectAll(".graph").selectAll("svg").remove();

    var dataset = [];
    for (var attr in data.answers) {
        dataset.push({option: attr, count: data.answers[attr]});
    }
    console.log(dataset);
    drawD3(dataset);
});
drawD3(dataset);