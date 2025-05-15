
 
 let USD = 1000
 let img;
 let b1c = 0
 let mode = 'stocks'
 let menu
 let button1
 let button2
 let button3
 let button4
 let button5
 let buttonsetting
 let returnButton

function setup() {
  createCanvas(1080, 1920);


  buttonsetting = createButton('settings', 'red');
  buttonsetting.style('font-size', '40px');
  buttonsetting.position(880, 30);
  buttonsetting.mousePressed(changeMode)

  //timeline text

  button1 = createButton('1 DAY', 'red');
  button1.style('font-size', '30px');
  button1.position(130, 210);
  
  button2 = createButton('1 WEEK ', 'red');
  button2.style('font-size', '30px');
  button2.position(280, 210);

  button3 = createButton('1 MONTH', 'red');
  button3.style('font-size', '30px');
  button3.position(460, 210);

  button4 = createButton('1 YEAR ', 'red');
  button4.style('font-size', '30px');
  button4.position(660, 210);

  button5 = createButton('5 YEARS', 'red');
  button5.style('font-size', '30px');
  button5.position(830, 210);

   returnButton = createButton('return');
  returnButton.position(710, 650);

  returnButton.style('background-color', 'transparent');
  returnButton.style('border', 'none');
  returnButton.style('color', 'white');
  returnButton.style('font-size', '75px');
  returnButton.style('text-decoration', 'none');
  returnButton.style('cursor', 'pointer');

  returnButton.mousePressed(changeMode2);
  returnButton.hide()

 
}



function preload() {
  img = loadImage('placeholder.png');
}


///COLORS,   (1,22,39)-rich black (26,27,65)- Space Cadet (93,115,126)-payne's gray (234,244,244)-Azure(web) (204,227,222)- Mint Green
function draw() {

  background(234,244,244);

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


}


  if (mode == 'menu') {
    button1.hide()
    button2.hide()
    button3.hide()
    button4.hide()
    button5.hide()
    buttonsetting.hide()
    returnButton.show()
  }
      
  if (mode == 'stocks'){
  returnButton.hide()
      button1.show()
    button2.show()
    button3.show()
    button4.show()
    button5.show()
    buttonsetting.show()
}
    

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

 
    
 

  //   if ((550<mouseX && mouseX<1070)  && (240<mouseY && mouseY<360) && mouseIsPressed == true){
  //     mode = 'stocks'

  }
}



function changeMode(){
  if (mode == "stocks"){
mode = "menu"
  }

}


function changeMode2(){
  if (mode == "menu"){
mode = "stocks"
  }

}
