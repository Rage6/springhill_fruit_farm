$(()=>{
  // console.log("app.js is functioning")
  $("#allTopics").hide();

  const inAppleBox = (aFunction) => {
    console.log("clicked inAppleBox function");
    $("#rollApple").css({'animation-name':'inAppleBox','animation-duration':'1.5s','animation-iteration-count':'1','animation-timing-function':'cubic-bezier(0,.5,1,.5);'});
    $("#allTopics").delay(1500).show(0);
  }
  $("#rollApple").click(inAppleBox);

})
