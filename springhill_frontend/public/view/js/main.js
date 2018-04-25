$(()=>{

  //Starting variables
  var menuUp = true;
  const apples = [
    {
      name: "Gold Rush",
      description: "As a hard & very tart apple, it is excellent for baking for things like pies, or simply for eating them by hand.",
      cost: 6.00,
      byDozen: true
    }
  ];
  const pears = [
    {
      name: "Bosc",
      description: "These firm and juicy pears are great for cooking, juicing, and eating by hand.",
      cost: 5.50,
      byDozen: true
    }
  ];
  const peaches = [
    {
      name: "some peach",
      description: "These firm and juicy pears are great for cooking, juicing, and eating by hand.",
      cost: 5.50,
      byDozen: true
    }
  ];
  const pumpkins = [
    {
      name: "some pumpkin",
      description: "These firm and juicy pears are great for cooking, juicing, and eating by hand.",
      cost: 5.50,
      byDozen: true
    }
  ];

  // For throwing the apple and revealing the buttons
  $("#allTopics").hide();
  const inAppleBox = (aFunction) => {
    $("#rollApple").css({'animation-name':'inAppleBox','animation-duration':'1.5s','animation-iteration-count':'1','animation-timing-function':'cubic-bezier(0,.5,1,.5);'});
    $("#allTopics").delay(1500).show(0);
    appleClicked = true;
  }
  $("#rollApple").click(inAppleBox);

  // For sliding the menuBox up and down
  const dropMenu = () => {
    $(".menuButton").css('animation-name','slideDown');
    menuUp = false;
  }
  const raiseMenu = () => {
    $(".menuButton").css('animation-name','slideUp');
    menuUp = true;
  }
  $("#menuBar").click(()=>{
    if (menuUp == true) {
      dropMenu();
    } else {
      raiseMenu();
    }
  })

  // For listing all fruit in Produce Page
  const listFruit = (typeList) => {
    for (var a = 0; a < typeList.length; a++) {
      console.log(typeList[a].name);
    }
  };
  listFruit(apples);
  listFruit(pears);
  listFruit(peaches);
  listFruit(pumpkins);

  // For selecting the fruit types
  const unselectAll = () => {
    $("#appleButton").css('color','white').css('background-color','transparent');
    $("#pearButton").css('color','white').css('background-color','transparent');
    $("#peachButton").css('color','white').css('background-color','transparent');
    $("#pumpkinButton").css('color','white').css('background-color','transparent');
  }
  $("#appleButton").click(()=>{
    unselectAll();
    $("#appleButton").css('color','black').css('background-color','white');
  })
  $("#pearButton").click(()=>{
    unselectAll();
    $("#pearButton").css('color','black').css('background-color','white');
  })
  $("#peachButton").click(()=>{
    unselectAll();
    $("#peachButton").css('color','black').css('background-color','white');
  })
  $("#pumpkinButton").click(()=>{
    unselectAll();
    $("#pumpkinButton").css('color','black').css('background-color','white');
  })
  $("#allButton").click(()=>{
    unselectAll();
  })

})
