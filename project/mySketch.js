
 
 let USD = 1000
 let img;
 let b1c = 0
 let mode = 'stocks'
 let menu

 /// FROM GRAPH
let data;
let floww=2
let flowprev=1
let names = ["sunflower" , "tulip"]
let y = 40
let fakeopen = 100
let fakeclose = 110
let fakevolume = 12000
let stocknum = 12
let timekey = 1


function setup() {
  createCanvas(1080, 1920);
  background(234,244,244);

  button = createButton('settings', 'red');
  button.style('font-size', '40px');
  button.position(880, 30);
  button.mousePressed(changeMode)

  ///GRAPH
    console.log(stockData);
  
  // Access the "Time Series (5min)" section
  let timeSeries = stockData["Time Series (5min)"];

  // Loop through the time series data
  for (let timestamp in timeSeries) {
    if (timeSeries.hasOwnProperty(timestamp)) {
      let stockInfo = timeSeries[timestamp]; // This contains the open, high, low, close, volume
      console.log("Timestamp: " + timestamp); // This is the timestamp
      console.log("Stock data: ", stockInfo); // This is the stock data at that timestamp
    }
  }
 
}

function preload() {

   stockData = loadJSON('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=HN9TUQGX2II5XAY3');
  //stockData = loadJSON('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo');
    img = loadImage('placeholder.png');
}



///COLORS,   (1,22,39)-rich black (26,27,65)- Space Cadet (93,115,126)-payne's gray (234,244,244)-Azure(web) (204,227,222)- Mint Green
function draw() {
  textFont('Arial');
  fill("white");
  textSize(14);

  let yOffset = 20;  // Start y-position for displaying data
  let stockSeries = stockData["Time Series (5min)"];  // Extract the time series data



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


  //timeline text

  button = createButton('1 DAY', 'red');
  button.style('font-size', '30px');
  button.position(130, 210);
  
  button = createButton('1 WEEK ', 'red');
  button.style('font-size', '30px');
  button.position(280, 210);

  button = createButton('1 MONTH', 'red');
  button.style('font-size', '30px');
  button.position(460, 210);

  button = createButton('1 YEAR ', 'red');
  button.style('font-size', '30px');
  button.position(660, 210);

  button = createButton('5 YEARS', 'red');
  button.style('font-size', '30px');
  button.position(830, 210);


  
  for (let i = 1; i < stocknum; i += 1) {

    //let timeKey = `2025-05-14 10:${String(i * 5).padStart(2, '0')}:00`;
    // Ensure stockInfo exists for the given timeKey
    //let stockInfo = stockSeries[timeKey];
 
  let stockInfo = stockSeries[timeSeries[i]];
  let openPrice = stockInfo["1. open"];
  let closePrice = stockInfo["4. close"];
  let volume = stockInfo["5. volume"];

  stroke('magenta')
  strokeWeight(80);
  line(80+(90*i),(((openPrice)-260)*100)-100, 80+(90*i), (((closePrice)-260)*100)+100)
  }

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

function generateTimeSeries(startTime, intervals) {
  const timeSeries = [];
  let currentTime = new Date(startTime);

  for (let i = 0; i < intervals; i++) {
    const timeKey = currentTime.toISOString().slice(0, 19).replace("T", " ");
    timeSeries.push(timeKey);
    currentTime.setMinutes(currentTime.getMinutes() + 5);
  }

  return timeSeries;
}

// Example usage:
const startTime = "2025-05-20T10:00:00";
const intervals = 12;
const timeSeries = generateTimeSeries(startTime, intervals);
console.log(timeSeries);

