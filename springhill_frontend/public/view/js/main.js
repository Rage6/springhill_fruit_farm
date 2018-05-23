$(()=>{

  //Starting variables
  var menuUp = true;
  var contactDown = true;
  const apples = [
    {
      name: "Gold Rush",
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "This hard & tart apple is excellent for baking (apple pie, anyone?) or simply for eating for a quick snack.",
      cost: 6.00,
      byDozen: true,
      type: "apple"
    }
  ];
  const pears = [
    {
      name: "Bosc",
      picture: "http://www.specialtyproduce.com/sppics/7242.png",
      description: "These firm and juicy pears are great for cooking, juicing, and eating by hand.",
      cost: 5.50,
      byDozen: true,
      type: "pear"
    }
  ];
  const peaches = [
    {
      name: "first peach",
      picture: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Autumn_Red_peaches.jpg",
      description: "These firm and juicy pears are great for cooking, juicing, and eating by hand.",
      cost: 5.50,
      byDozen: true,
      type: "peach"
    },
    {
      name: "second peach",
      picture: "https://wonderopolis.org/wp-content/uploads/2016/10/Why_Are_Peaches_Fuzzy_fruit_background_xl_20352201_(Custom).jpg",
      description: "These firm and juicy pears are great for cooking, juicing, and eating by hand.",
      cost: 5.50,
      byDozen: true,
      type: "peach"
    }
  ];
  const pumpkins = [
    {
      name: "some pumpkin",
      picture: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dwa6425655/images/products/vegetables/03978t_01_cargopmr.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196",
      description: "These firm and juicy pears are great for cooking, juicing, and eating by hand.",
      cost: 5.50,
      byDozen: true,
      type: "pumpkin"
    }
  ];
  var browserHeight = 0;
  var heightNum = 0;
  var browserWidth = 0;
  var widthNum = 0;

  //For finding the browser's height
  const findHeight = () =>{
    heightNum = $(document).height();
    browserHeight = heightNum + "px";
    $(".shadePage").css('height',browserHeight);
    // console.log(browserHeight);
  };
  findHeight();

  //For finding the browser's height
  const findWidth = () =>{
    widthNum = $(document).width();
    browserWidth = widthNum + "px";
    // console.log(browserWidth);
  };
  findWidth();

  // For throwing/moving the apple and revealing the buttons
  $("#allTopics").hide();
  const inAppleBox = () => {
    $("#removeApple").css({'animation-name':'inAppleBox','animation-duration':'1.5s','animation-iteration-count':'1','animation-timing-function':'cubic-bezier(0,.5,1,.5);'});
    $("#allTopics").delay(1500).show(0);
    appleClicked = true;
  }
  // Carries out the correct function when clicked.
  $("#removeApple").click(() => {
    inAppleBox();
  });
  // To hide the apple when the browser width is >= 768px
  if (widthNum >= 768) {
    $("#removeApple").hide();
    $("#allTopics").show(0);
  };

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
      var fruitType = typeList[a].type;
      $(".fruitList").append("<div class='oneFruitBox' id='" + fruitType + a + "'></div>");
      var fruitID = "#" + fruitType + a;
      $(fruitID).append("<div class='fruitName'><u>" + typeList[a].name + "</u></div>");
      $(fruitID).append("<img class='fruitPicture' src='" + typeList[a].picture + "'>");
      $(fruitID).append("<div class='fruitDescription'>" + typeList[a].description + "</div>");
      $(fruitID).append("<div class='fruitPrice'>$" + typeList[a].cost.toFixed(2) + "</div>");
    }
  };
  listFruit(apples);
  listFruit(pears);
  listFruit(peaches);
  listFruit(pumpkins);

  // For removing the entire list when changing the selected fruit
  const clearOneTypeList = (typeList) => {
    for (var b = 0; b < typeList.length; b++) {
      var attrName = "#" + typeList[b].type + b;
      $(attrName).remove();
    }
  }
  const clearAllTypeList = () => {
    clearOneTypeList(apples);
    clearOneTypeList(peaches);
    clearOneTypeList(pears);
    clearOneTypeList(pumpkins);
  }

  // For selecting the fruit types
  const unselectAll = () => {
    $("#appleButton").css('color','white').css('background-color','transparent');
    $("#pearButton").css('color','white').css('background-color','transparent');
    $("#peachButton").css('color','white').css('background-color','transparent');
    $("#pumpkinButton").css('color','white').css('background-color','transparent');
  }
  $("#appleButton").click(()=>{
    unselectAll();
    clearAllTypeList();
    $("#appleButton").css('color','black').css('background-color','white');
    listFruit(apples);
    findHeight();
  })
  $("#pearButton").click(()=>{
    unselectAll();
    clearAllTypeList();
    $("#pearButton").css('color','black').css('background-color','white');
    listFruit(pears);
    findHeight();
  })
  $("#peachButton").click(()=>{
    unselectAll();
    clearAllTypeList();
    $("#peachButton").css('color','black').css('background-color','white');
    listFruit(peaches);
    findHeight();
  })
  $("#pumpkinButton").click(()=>{
    unselectAll();
    clearAllTypeList();
    $("#pumpkinButton").css('color','black').css('background-color','white');
    listFruit(pumpkins);
    findHeight();
  })
  $("#allButton").click(()=>{
    unselectAll();
    clearAllTypeList();
    listFruit(apples);
    listFruit(pears);
    listFruit(peaches);
    listFruit(pumpkins);
    findHeight();
  })

  // For scrolling Contact tab up and down
  $("#contactTab").click(()=>{
    if (contactDown == true) {
      findHeight();
      $("#contactContent").css('animation-name','tabUp');
      $(".shadePage").css('display','block');
      $("#contactAddress").css('animation-name','openAddress');
      $("#phoneLogo").show();
      $("#facebookLogo").show();
      contactDown = false;
    } else {
      $("#contactContent").css('animation-name','tabDown');
      $(".shadePage").css('display','none');
      $("#contactAddress").css('animation-name','closeAddress');
      $("#phoneLogo").hide();
      $("#facebookLogo").hide();
      contactDown = true;
    }
  })

  const setIndexHeight = () => {
    $("body").css('height',browserHeight);
    $("#indexPage").css('height',browserHeight);
  }
  setIndexHeight();

})
