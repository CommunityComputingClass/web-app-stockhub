
 let usd = 1000
 let img;
 let b1c = 0
 let mode = 'menu'

function setup() {
  createCanvas(1080, 1920);
  background(234,244,244);
 
}



function preload() {
  img = loadImage('placeholder.png');
}


///COLORS,   (1,22,39)-rich black (26,27,65)- Space Cadet (93,115,126)-payne's gray (234,244,244)-Azure(web) (204,227,222)- Mint Green
function draw() {
  background(234,244,244);
  if (mode == 'stocks'){
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
  
  

  if (usd >= 10000){
  fill(0,255,0)
  triangle(700,190,750,240,650,240)

  fill(0,255,0)
  textSize(100)
  text("$" + usd, 170, 250);
  }
 

 if (usd < 10000){
  fill(255,0,0)
  triangle(700,240,750,190,650,190)

  fill(255,0,0)
  textSize(100)
  text("$" + usd, 170, 250)
 }

 // menu button
 rect (950, 10,120)
  if ((950<mouseX && mouseX<1070)  && (240<mouseY && mouseY<360) && mouseIsPressed == true){
      mode = 'menu'


}


  }

  if (mode == 'menu') {
    //menu bar
    fill (26,27,65)
    rect (540,0,540,2100)
    //test rect
    fill (54,20,54,)
    rect (54,20,54,)
    //tint
    fill (93,115,126,100)
    rect (0,0,540,2100)
    //rects for the menu selection buttons
    fill (93,115,126,100)
    rect (550, 240, 520, 120)
    rect (550, 370, 520, 120)
    rect (550, 500, 520, 120)
    rect (550, 630, 520, 120)
    // stocks button

    if ((550<mouseX && mouseX<1070)  && (240<mouseY && mouseY<360) && mouseIsPressed == true){
      mode = 'stocks'

    
  }
    //STUFF GOES HERE

}
}
