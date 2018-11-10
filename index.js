let clickedCounter = 0

function myFunction() {
  if (clickedCounter === 0) {
    // Inhale
    console.time()
    startTime = new Date();
    document.getElementById("myText").value = 'B.R.E.A.T.H.E IN... and click again when you are done';
    document.getElementById("button2").innerText = "INHALE 1, 2, 3";
  } else if (clickedCounter === 1) {
    // Exhale
    document.getElementById("myText").value = 'Now exhale slowly and click again when you are done';
    document.getElementById("button2").innerText = "EXHALE 1, 2, 3";
  } else if (clickedCounter === 2) {
    // Done
    document.getElementById("myText").value = 'Click to complete';
    document.getElementById("button2").innerText = "DONE";
  } else if (clickedCounter === 3) {
    document.getElementById("myText").value = '';
    document.getElementById("button2").innerText = "START INHALE";
    console.timeEnd();
    endTime = new Date();
    let timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000;
    // get seconds 
    let seconds = Math.round(timeDiff);
    document.getElementById("1").innerHTML = seconds;
    console.log(seconds + " seconds");
  }
     else if (clickedCounter === 4) {
    // Inhale
    console.time()
    startTime = new Date();
    document.getElementById("myText").value = 'B.R.E.A.T.H.E IN... and click again when you are done';
    document.getElementById("button2").innerText = "INHALE 1, 2, 3";
  } else if (clickedCounter === 5) {
    // Exhale
    document.getElementById("myText").value = 'Now exhale slowly and click again when you are done';
    document.getElementById("button2").innerText = "EXHALE 1, 2, 3";
  } else if (clickedCounter === 6) {
    // Done
    document.getElementById("myText").value = 'Click to complete';
    document.getElementById("button2").innerText = "DONE";
  } else if (clickedCounter === 7) {
    document.getElementById("myText").value = '';
    document.getElementById("button2").innerText = "START INHALE";
    console.timeEnd();
    endTime = new Date();
    let timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000;
    // get seconds 
    let seconds = Math.round(timeDiff);
    document.getElementById("2").innerHTML = seconds;
    console.log(seconds + " seconds");
  }
     else if (clickedCounter === 8) {
    // Inhale
    console.time()
    startTime = new Date();
    document.getElementById("myText").value = 'B.R.E.A.T.H.E IN... and click again when you are done';
    document.getElementById("button2").innerText = "INHALE 1, 2, 3";
  } else if (clickedCounter === 9) {
    // Exhale
    document.getElementById("myText").value = 'Now exhale slowly and click again when you are done';
    document.getElementById("button2").innerText = "EXHALE 1, 2, 3";
  } else if (clickedCounter === 10) {
    // Done
    document.getElementById("myText").value = 'Click to complete';
    document.getElementById("button2").innerText = "DONE";
  } else if (clickedCounter === 11) {
    document.getElementById("myText").value = '';
    document.getElementById("button2").innerText = "START INHALE";
    console.timeEnd();
    endTime = new Date();
    let timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000;
    // get seconds 
    let seconds = Math.round(timeDiff);
    document.getElementById("3").innerHTML = seconds;
    console.log(seconds + " seconds");
    let x = ((+document.getElementById("1").innerHTML) + (+document.getElementById("2").innerHTML)+ (+document.getElementById("3").innerHTML)) / 3 ;
    document.getElementById("mean").innerHTML = "The mean is..." + x;
  
  }
   clickedCounter = clickedCounter + 1;
}


  


/*document.getElementById("button2").style.color = "red";
setTimeout(()=>myFunction2(), 3000);

 if (document.getElementById("button2").innerText = "1, 2, 3") {
      setTimeout(()=>myFunction2(), 3000)*/