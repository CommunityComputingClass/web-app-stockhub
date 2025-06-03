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
 let leaderboardButton
 let settingsmenu
 let storebutton
 let SnP500Button
 let NasdaqButton
 let russell2000Button
 let VolkswagenButton
 let LockheedButton
 let BethubButton
 let NvidiaButton

 /// FROM GRAPH
let data;
let data2;
let data3;

//let stockThing = "Time Series (Daily)"
let stockThing = "Time Series (5min)"

let stocknum = 40
let timekey = 1
let stockData;
let stockData2;
let stockData3;

function setup() {
  createCanvas(1080, 1920);
  background(234,244,244);


  buttonsetting = createButton('');
  buttonsetting.position(980, 30);
  buttonsetting.size(100);
  buttonsetting.class('hamburger');
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

  button1.mousePressed(fiveMin);
    button1.mousePressed(oneDay);
      button1.mousePressed(oneWeek);

  returnButton.style('background-color', 'transparent');
  returnButton.style('border', 'none');
  returnButton.style('color', 'white');
  returnButton.style('font-size', '75px');
  returnButton.style('text-decoration', 'none');
  returnButton.style('cursor', 'pointer');

  returnButton.mousePressed(changeMode2);
  returnButton.hide()

  leaderboardButton = createButton('leaderboard');
  leaderboardButton.position(610, 520);
  leaderboardButton.style('background-color', 'transparent');
  leaderboardButton.style('border', 'none');
  leaderboardButton.style('color', 'white');
  leaderboardButton.style('font-size', '75px');
  leaderboardButton.style('text-decoration', 'none');
  leaderboardButton.style('cursor', 'pointer');

  settingsmenu = createButton('settings');
  settingsmenu.position(680, 390);
  settingsmenu.style('background-color', 'transparent');
  settingsmenu.style('border', 'none');
  settingsmenu.style('color', 'white');
  settingsmenu.style('font-size', '75px');
  settingsmenu.style('text-decoration', 'none');
  settingsmenu.style('cursor', 'pointer');

  storebutton = createButton('store');
  storebutton.position(730, 265);
  storebutton.style('background-color', 'transparent');
  storebutton.style('border', 'none');
  storebutton.style('color', 'white');
  storebutton.style('font-size', '75px');
  storebutton.style('text-decoration', 'none');
  storebutton.style('cursor', 'pointer');

SnP500Button = createButton('S&P 500 Index');
  SnP500Button.position(150, 1070);
  SnP500Button.style('background-color', 'transparent');
  SnP500Button.style('border', 'none');
  SnP500Button.style('color', 'black');
  SnP500Button.style('font-size', '40px');
  SnP500Button.style('text-decoration', 'none');
  SnP500Button.style('cursor', 'pointer');
  
  NasdaqButton = createButton('Nasdaq Composite');
  NasdaqButton.position(150, 1170);
  NasdaqButton.style('background-color', 'transparent');
  NasdaqButton.style('border', 'none');
  NasdaqButton.style('color', 'black');
  NasdaqButton.style('font-size', '40px');
  NasdaqButton.style('text-decoration', 'none');
  NasdaqButton.style('cursor', 'pointer');
  
  russell2000Button = createButton('Russel 2000 Index');
  russell2000Button.position(150, 1270);
  russell2000Button.style('background-color', 'transparent');
  russell2000Button.style('border', 'none');
  russell2000Button.style('color', 'black');
  russell2000Button.style('font-size', '40px');
  russell2000Button.style('text-decoration', 'none');
  russell2000Button.style('cursor', 'pointer');
  
  VolkswagenButton = createButton('Volkswagen AG');
  VolkswagenButton.position(150, 1370);
  VolkswagenButton.style('background-color', 'transparent');
  VolkswagenButton.style('border', 'none');
  VolkswagenButton.style('color', 'black');
  VolkswagenButton.style('font-size', '40px');
  VolkswagenButton.style('text-decoration', 'none');
  VolkswagenButton.style('cursor', 'pointer');
  
  LockheedButton = createButton('Lockheed Martin Corp.');
  LockheedButton.position(150, 1470);
  LockheedButton.style('background-color', 'transparent');
  LockheedButton.style('border', 'none');
  LockheedButton.style('color', 'black');
  LockheedButton.style('font-size', '40px');
  LockheedButton.style('text-decoration', 'none');
  LockheedButton.style('cursor', 'pointer');
  
    NvidiaButton = createButton('Nvidia Corp.');
  NvidiaButton.position(150, 1570);
  NvidiaButton.style('background-color', 'transparent');
  NvidiaButton.style('border', 'none');
  NvidiaButton.style('color', 'black');
  NvidiaButton.style('font-size', '40px');
  NvidiaButton.style('text-decoration', 'none');
  NvidiaButton.style('cursor', 'pointer');
  
  
    BethubButton = createButton('BetHub AG');
  BethubButton.position(150, 1670);
  BethubButton.style('background-color', 'transparent');
  BethubButton.style('border', 'none');
  BethubButton.style('color', 'black');
  BethubButton.style('font-size', '40px');
  BethubButton.style('text-decoration', 'none');
  BethubButton.style('cursor', 'pointer');
  



  ///GRAPH
  
  
  

  let timeSeries = stockData["Time Series (5min)"];
  console.log(timeSeries)
  for (let timestamp in timeSeries) {
    if (timeSeries.hasOwnProperty(timestamp)) {
      let stockInfo = timeSeries[timestamp]; // This contains the open, high, low, close, volume

    }
  }


  let timeSeries2 = stockData2["Time Series (Daily)"];
        console.log(timeSeries2)
  for (let timestamp2 in timeSeries2) {
    if (timeSeries2.hasOwnProperty(timestamp2)) {
      let stockInfo2 = timeSeries2[timestamp2]; // This contains the open, high, low, close, volume


    }

}

}

function preload() {




   //stockData = loadJSON('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=HN9TUQGX2II5XAY3');
    stockData = loadJSON('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo');
   stockData2 = loadJSON ('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo')
  stockData3 = loadJSON('https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=demo');

  
}


function processStockData(data) {
  stockData = data;
}
function processStockData2(data2) {
  stockData2 = data2;
}
function processStockData2(data3) {
  stockData2 = data3;
}


///COLORS,   (1,22,39)-rich black (26,27,65)- Space Cadet (93,115,126)-payne's gray (234,244,244)-Azure(web) (204,227,222)- Mint Green
function draw() {
  textFont('Arial');
  fill("white");
  textSize(14);

  let yOffset = 20;  // Start y-position for displaying data
  let stockSeries = stockData[stockThing];  // Extract the time series data

  //let stockSeries2 = stockData2["Time Series (5min)"];

  if (mode == 'stocks'){
  // Nothing here yet – we'll add features step by step //108,54,864,216,1080,

background(204,227,222)

  fill(93,115,126)
  rect(50,980,980,900)

  fill(234,244,244)
  rect(108,1030,864,800)

  //buy/sell buttons:
  fill(194,247,212)
  rect (108,850,432,108)
  fill(247,194,212)
  rect (540,850,432,108)
  
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


 


  ///////
  
  for (let i = 1; i < stocknum; i += 1) {
 
  let stockInfo = stockSeries[timeSeries[i]];
  let openPrice = stockInfo["1. open"];
  let closePrice = stockInfo["4. close"];
  let volume = stockInfo["5. volume"];



  stroke(93,115,126)
  strokeWeight(10);
  line(45+(25*i),(((openPrice)-260)*100)+360, 45+(25*i), (((closePrice)-260)*100)+480)
  noStroke()
  }

}


    fill(0,0,0)
    stroke(100)
    strokeWeight(2)
    //horizantal lines for stock list
    line(110,1130,972,1130)
    line(110,1230,972,1230)
    line(110,1330,972,1330)
    line(110,1430,972,1430)
    line(110,1530,972,1530)
    line(110,1630,972,1630)
    line(110,1730,972,1730)
    
    //vertical lines for stock list
    line(700,1030,700,1830)
    
    fill(0,255,0)
    triangle(760, 1050, 730, 1100, 790, 1100);
          textSize(40);
      text("+5.67%",830, 1090);
    
    fill(255,0,0)
    triangle(760, 1200, 730, 1150, 790, 1150);
          textSize(40);
      text("-0.05%",820, 1190);
    
    
    fill(0,255,0)
    triangle(760, 1250, 730, 1300, 790, 1300);
          textSize(40);
      text("+3.45%",820, 1290);
    
    
    fill(0,255,0)
    triangle(760, 1350, 730, 1400, 790, 1400);
          textSize(40);
      text("+1.48%",820, 1390);
    
    
    fill(0,255,0)
    triangle(760, 1450, 730, 1500, 790, 1500);
          textSize(40);
      text("+2.65%",820, 1490);
    
    
     fill(255,0,0)
    triangle(760, 1700, 730, 1650, 790, 1650);
          textSize(40);
      text("-1.06%",820, 1590);
    
    
     fill(255,0,0)
    triangle(760, 1600, 730, 1550, 790, 1550);
      textSize(40);
      text("-0.58%",820, 1690);
    

  if (mode == 'menu') {
   // console.log(mode)
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

    button1.hide()
    button2.hide()
    button3.hide()
    button4.hide()
    button5.hide()
    buttonsetting.hide()
    returnButton.show()
    leaderboardButton.show()
    settingsmenu.show()
    storebutton.show()
    russell2000Button.hide()
    SnP500Button.hide()
    NasdaqButton.hide()
    VolkswagenButton.hide()
    LockheedButton.hide()
    NvidiaButton.hide()
    BethubButton.hide()
    // stocks button

  }

  if (mode == 'stocks'){
  returnButton.hide()
      button1.show()
    button2.show()
    button3.show()
    button4.show()
    button5.show()
    buttonsetting.show()
    leaderboardButton.hide()
    settingsmenu.hide()
    storebutton.hide()
    russell2000Button.show()
    SnP500Button.show()
    NasdaqButton.show()
    VolkswagenButton.show()
    LockheedButton.show()
    NvidiaButton.show()
    BethubButton.show()
}

if (mode == 'menu') {
   // console.log(mode)

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
    //text for who made the program
     fill(255,255,255)
    textSize(30)
    text("Made by Nicholas & Kayin", 640,1800 )


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

function fiveMin(){

// // Example usage:
// const startTime = "2025-06-02T04:00:00";
// const intervals = 40;
//  timeSeries = generateTimeSeries(startTime, intervals);

}
function oneDay(){

}
function oneWeek(){

}




function generateTimeSeries(startTime, intervals) {
  if(stockThing=="Time Series (5min)"){
  const timeSeries = [];
  let currentTime = new Date(startTime);

  for (let i = 0; i < intervals; i++) {
    const timeKey = currentTime.toISOString().slice(0, 19).replace("T", " ");
    timeSeries.push(timeKey);
    currentTime.setMinutes(currentTime.getMinutes() + 5);
  
  }
      return timeSeries;
}

  if(stockThing=="Time Series (5min)"){
  const timeSeries = [];
  let currentTime = new Date(startTime);

  for (let i = 0; i < intervals; i++) {
    const timeKey = currentTime.toISOString().slice(0, 19).replace("T", " ");
    timeSeries.push(timeKey);
    currentTime.setDate(currentTime.getDate() + 1);

  }
        return timeSeries;
}


}


  // if(stockThing=="Time Series (5min)"){
// Example usage:
const startTime = "2025-06-02T04:00:00";
const intervals = 40;
 timeSeries = generateTimeSeries(startTime, intervals);

  // }

//     if(stockThing=="Time Series (Daily)"){
// // Example usage:
// const startTime = "2025-06-02T04:00:00";
// const intervals = 40;
//  timeSeries = generateTimeSeries(startTime, intervals);

//   }
//  //let stockThing = "Time Series (Daily)"
// //let stockThing = "Time Series (5min)"