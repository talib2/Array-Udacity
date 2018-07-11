// // var m=['r','y','j','k','t'];
// // var n = m.map(function(e){
// //   e=e+'good';
// //   e=e.toUpperCase();
// //   return e;
// // });
// // console.log(n);
// var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];
// var to=bills.map(function(bill){
// bill=bill+bill*0.15;
// bill=bill.toFixed(2);
// return Number (bill);
// });
// console.log(to);
var g =[
  [1,2,3,4,5],
  [21,22,23,24,25],
  [31,32,33,34,35],
  [41,42,43,44,45]
];
for(var i=0;i<g.length;i++)
{
  for(var j=0;j<g[i].length;j++){
    console.log(g[i][j]);
  }
}
// Since each row is an array of donuts, you next need to set up an inner-loop to loop over each cell in the arrays.

// for (var row = 0; row < donutBox.length; row++) {
//   // here, donutBox[row].length refers to the length of the donut array currently being looped over
//   for (var column = 0; column < donutBox[row].length; column++) {
//     console.log(donutBox[row][column]);
//   }
// }
