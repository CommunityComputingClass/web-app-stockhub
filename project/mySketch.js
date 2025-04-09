
 
 let USD = 1000
 let img;
 let b1c = 0
 let mode = 'stocks'
 let menu

function setup() {
  createCanvas(1080, 1920);
  background(234,244,244);

  button = createButton('settings', 'red');
  button.position(800, 100);
  button.mousePressed(changeMode)
 
}



function preload() {
  img = loadImage('placeholder.png');
}


///COLORS,   (1,22,39)-rich black (26,27,65)- Space Cadet (93,115,126)-payne's gray (234,244,244)-Azure(web) (204,227,222)- Mint Green
function draw() {

  if (mode == 'stocks'){
  // Nothing here yet – we'll add features step by step //108,54,864,216,1080,
  
  

  //place holder image for graph
  fill(93,115,126)
  image(img,60,250,960,580)
 

  //place holder for where stocks will go
  fill(93,115,126)
  rect(50,980,980,900)

  fill(234,244,244)
  rect(108,1030,864,800)

  //buy/sell buttons:
  fill(194,247,212)
  rect (108,850,432,108)
  fill(247,194,212)
  rect (540,850,432,108)
  
    //        if (108<mouseX<540 ){
   // //          if (324<mouseY<432){
   //             if (mouseIsPressed == true){
   //               rect (1,1,100,100)
   //               else 
   //             }s 
   //           }
   //         }

  
  

   if (108<mouseX && mouseX<540 && 950>mouseY && mouseY>850 && mouseIsPressed == true){
    fill (200,200,200)
    rect (1,1,100,100)
    b1c = 1
   }
   else {
    b1c = 0
    fill (0,0,0)
    rect (1,1,100,100)
   }
  
  
//function for money if it goes up or down
  if (USD >= 10000){
  fill(0,255,0)
  textSize(80)
  text("$" + USD, 20, 80);
  }
 
//function for money if it goes up or down
 if (USD < 10000){
  fill(255,0,0)
  textSize(80)
  text("$" + USD, 20, 80)
 }


  //timeline text
  fill(1,22,39)
  textSize(40)
  text("  1 DAY |",60,240)

  fill(1,22,39)
  textSize(40)
  text("1 WEEK  |",240,240)

  fill(1,22,39)
  textSize(40)
  text("1 MONTH  |",440,240)

  fill(1,22,39)
  textSize(40)
  text("1 YEAR  |",660,240)

  fill(1,22,39)
  textSize(40)
  text("5 YEARS",860,240)
}




 // menu button
//   rect (950, 10,120)
//   if ((950<mouseX && mouseX<1070)  && (240<mouseY && mouseY<360) && mouseIsPressed == true){
//       mode = 'menu'


// }


  if (mode == 'menu') {
    console.log(mode)
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

  //   if ((550<mouseX && mouseX<1070)  && (240<mouseY && mouseY<360) && mouseIsPressed == true){
  //     mode = 'stocks'

    
  // }
    //STUFF GOES HERE
  }
}

function changeMode(){
  if (mode == "stocks"){
mode = "menu"
  }

  // if (mode == "menu"){
  //   mode = "stocks"
  // }

  
}