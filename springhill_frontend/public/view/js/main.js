$(()=>{
  // console.log("app.js is functioning")

  const rollAway = () => {
    console.log("clicked rollApple");
    $("#rollApple").css({'animation-name':'rollOut','animation-iteration-count':'1','animation-timing-function':'linear'})
  }
  $("#rollApple").click(rollAway);

})
