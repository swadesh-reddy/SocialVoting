var margin = { top: 40, right: 20, bottom: 30, left: 40 },
    width = '100%',
    height = 300- margin.top - margin.bottom;

// set the ranges


function Barchart(product) {

    var svg = d3.select("#barchart").append("svg")
        .attr("width", width)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
        "translate(0," + margin.top + ")");

    var svgWidth = $('svg').width();
    var svgHeight = $('svg').height();

    console.log(svgHeight)

var x = d3.scaleBand()
    .range([0, svgWidth - margin.left])
    .padding(0.1);  
var y = d3.scaleLinear()
    .range([height, 0]);

// append the svg object to the body of the page
// append a 'group' element to 'svg'    
// moves the 'group' element to the top left margin

//// get the data
//var data = [{ "productname": 'Bob', 'vote': 33 }, { "productname": 'jhon', 'vote': 34 }, { "productname": 'adam', 'vote': 53 }, { "productname": 'eve', 'vote': 13 }, { "productname": 'dev', 'vote': 92 }]

    var data = product;

// Scale the range of the data in the domains
x.domain(data.map(function (d) { return d.productname; }));
y.domain([0, d3.max(data, function (d) { return d.vote; })]);

// append the rectangles for the bar chart
svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .style('fill', 'steelblue')
    .attr("x", function (d) { return x(d.productname); })
    .attr("width", x.bandwidth())
    .attr("y", function (d) { return y(d.vote); })
    .on('mouseover', function (d) {
        d3.select(this).style('fill', 'orange');
    }).on('mouseout', function (d) {
        d3.select(this).style('fill', 'steelblue');
    })
    .attr('height', 0)
    .transition().duration(500).delay(function (d, i) { return i * 200 })
    .attr("height", function (d) { return height - y(d.vote); })

svg.selectAll(".text")
    .data(data)
    .enter().append('text')
    .attr("class", "text")
    .style('font-size', '30px')
    .style('font-family', 'monospace')
    .style('font-weight', 'bold')
    .transition().delay(function (d, i) { return i * 300 })
    .text(function (d) { return d.vote; })
    .attr("transform", function (d) { return "translate(" + Number(x(d.productname) + x.bandwidth() / 2) + "," + y(d.vote) + ")" })

// add the x Axis
svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

}