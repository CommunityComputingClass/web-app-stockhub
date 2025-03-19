
 let dabloons = 1000

function setup() {
  createCanvas(1080, 1920);
  background(234,244,244);
 
}

///COLORS,   (1,22,39)-rich black (26,27,65)- Space Cadet (93,115,126)-payne's gray (234,244,244)-Azure(web) (204,227,222)- Mint Green
function draw() {
  // Nothing here yet – we'll add features step by step //108,54,864,216,1080,
  fill(1,22,39)
  rect (108,108, 864, 216)
  rect (0,1728, 1080, 216)


  

  if (dabloons >= 10000){
  fill(0,255,0)
  triangle(700,190,750,240,650,240)

  fill(0,255,0)
  textSize(100)
  text("$" + dabloons, 170, 250);
  }
 

 if (dabloons < 10000){
  fill(255,0,0)
  triangle(700,240,750,190,650,190)

  fill(255,0,0)
  textSize(100)
  text("$" + dabloons, 170, 250)
 }


}
