// const canvas = d3.select('.canva');

// var dataArray = [4 , 15 , 34, 2, 3,10];

// // Add svg elements
//  const svg = canvas.append('svg')
//  .attr('width',600 )
//  .attr('height',600 );

// // const svg = canvas.select('svg')

// //const rect = svg.append('rect')

// const rect = svg.selectAll('rect')


// rect.data(dataArray)
// .enter().append('rect')
// .attr('height',function (d) {
//     return d*2
// })
// .attr('width',24 )
// .attr('fill','orange' )
// .attr('x', function (d,i) {console.log(d);
//     return i*30}) // D is the first element of array.
// .attr('y',function(d,i) {
//     return 100 - (d*2)
// })

const canvas = d3.select('.canva');
var dataArray = [
    {width: 25, height:4, fill: 'pink'},
    {width: 25, height:14, fill: 'purple'},
    {width: 25, height:44, fill: 'orange'},
    {width: 25, height:124, fill: 'green'},
    {width: 25, height:12, fill: 'gray'},
    {width: 25, height:25, fill: 'red'}
];

// Add svg elements
const svg = canvas.append('svg')
.attr('width',600 )
.attr('height',600 );
const rect = svg.selectAll('rect')

d3.json('test.json')
.then(data =>{console.log(data)
//code here to actually draw elements on screen

rect.data(data)
.enter().append('rect')
.attr('height',function (d) {
   return d.height*2
})
.attr('width',24 )
.attr('fill', d => d.fill ) // Equal function (d) {return d.fill}
.attr('x', function (d,i) {console.log(d);
   return i*25}) // D is the first element of array.
.attr('y', (d, i) => 200 - (d.height*2)) //Equal function(d,i) {return 100 - (d.height*2)}

});

