var drawD3 = function(dataset){
    var w = 500;
    var h = 600;
    var y = d3.scale.linear()
        .domain([1, d3.max($.map(dataset, function(d){return d.count;}))])
        .range(["10px", "550px"]);
    var svg = d3.select("body")
        .select(".graph")
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .attr("style", "margin-left:40%;margin-bottom:20%;align:center");
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
            return d.count * 10;
        })
        .attr("fill", "teal");

    var texts = svg.selectAll("text")
        .data(dataset)
        .enter();

    texts.append("text")
        .attr("class", "option")
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
        .attr("fill", "white");

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
};