var count1 = 0; // initialize a counter variable
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;

function setup() {
 createCanvas(600, 400);
}

function draw() {
 background(200);
  
 // declaration of variables
 var x1 = -200 + count1;
 var x2 = -200 + count2;
 var x3 = -200 + count3;
 var x4 = -200 + count4;
 var x5 = -200 + count5;
 var y = 25
  
 // rectangle 1
 fill(122, 1, 119);
 noStroke();
 rect(x1, y, 100, 50);
  
 // rectangle 2
 fill(197, 27, 138);
 noStroke();
 rect(x2, y+75, 100, 50);
  
 // rectangle 3
 fill(247, 104, 161);
 noStroke();
 rect(x3, y+150, 100, 50);
  
 // rectangle 4
 fill(251, 180, 185);
 noStroke();
 rect(x4, y+225, 100, 50);
  
 // rectangle 5
 fill(254, 236, 226);
 noStroke();
 rect(x5, y+300, 100, 50);
  
 count1 = count1 + 1; // increment the counter variable
 count2 = count2 + 2;
 count3 = count3 + 3;
 count4 = count4 + 4;
 count5 = count5 + 5;
}
