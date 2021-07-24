//d3.select("p")
//.style("color","brown")

//d3.selectAll("p")
//.style("color","brown")

//const a = document.querySelector(".canva");

//const b = d3.select(".canva");

//console.log(a,b);

const canvas =d3.select(".canva");
// Add an SVG element
const svg = canvas.append("svg")
.attr('width','500')
.attr("height", "250");

svg.append("circle")
.attr("cx","134" )
.attr("cy","134")
.attr("r","50")
.attr("fill","blue");

svg.append("rect")
.attr('width',50 )
.attr('height',50 )
.attr('x',150 )
.attr('y',50 )
.attr('fill','green')
.attr('rx',20 )
.attr('ry',20 );

svg.append('line')
.attr('x1',129 )
.attr('x2',45 )
.attr('y1',100 )
.attr('y2',46 )
.attr('stroke','gray' )

svg.append('text')
.text('Hello There!')
.attr('x',10 )
.attr('y',10 )
.attr('fill','red' )
.attr('font-size',20 );

svg.append('text')
.text('Hello There!')
.attr('x',10 )
.attr('y',30 )
.attr('fill','red' )
.attr('font-size',20 );

svg.append('text')
.text('Hello There!')
.attr('x',10 )
.attr('y',50 )
.attr('fill','red' )
.attr('font-size',20 );