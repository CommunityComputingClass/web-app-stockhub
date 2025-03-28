
 let dabloons = 1000
 let img;
 let b1c = 0
 let mode = stocks

function setup() {
  createCanvas(1080, 1920);
  background(234,244,244);
 
}



function preload() {
  img = loadImage('placeholder.png');
}


///COLORS,   (1,22,39)-rich black (26,27,65)- Space Cadet (93,115,126)-payne's gray (234,244,244)-Azure(web) (204,227,222)- Mint Green
function draw() {

  if (mode == home){
  // Nothing here yet – we'll add features step by step //108,54,864,216,1080,
  fill(1,22,39)
  rect (108,108, 864, 216)
  

  //place holder image for graph
  fill(93,115,126)
  rect (50,450, 980, 480)
  image(img,160,500)

  //place holder for where stocks will go
  fill(93,115,126)
  rect(50,980,980,900)

  fill(234,244,244)
  rect(108,1030,864,800)

  //buy/sell buttons:
  fill(194,247,212)
  rect (108,324,432,108)
  fill(247,194,212)
  rect (540,324,432,108)
  
    //        if (108<mouseX<540 ){
   // //          if (324<mouseY<432){
   //             if (mouseIsPressed == true){
   //               rect (1,1,100,100)
   //               else 
   //             }s 
   //           }
   //         }

  
  

   if (108<mouseX && mouseX<540  && 324<mouseY<432 && mouseIsPressed == true){
    fill (200,200,200)
    rect (1,1,100,100)
    b1c = 1
   }
   else {
    b1c = 0
    fill (0,0,0)
    rect (1,1,100,100)
   }
  
  

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




  if (mode == menu)
    //STUFF GOES HERE

}

