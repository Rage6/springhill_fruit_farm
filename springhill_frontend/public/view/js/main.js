$(()=>{

  //Starting variables
  var menuUp = true;
  var contactDown = true;
  const apples        = [
    {
      name: "Gold Rush",
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "This hard & tart apple is excellent for baking (apple pie, anyone?) or simply for eating for a quick snack.",
      cost: 6.00,
      byDozen: true,
      type: "APPLES"
    },
    {
      name: "Gold Rush",
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "This hard & tart apple is excellent for baking (apple pie, anyone?) or simply for eating for a quick snack.",
      cost: 6.00,
      byDozen: true,
      type: "APPLES"
    },
    {
      name: "Gold Rush",
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "This hard & tart apple is excellent for baking (apple pie, anyone?) or simply for eating for a quick snack.",
      cost: 6.00,
      byDozen: true,
      type: "APPLES"
    },
    {
      name: "Gold Rush",
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "This hard & tart apple is excellent for baking (apple pie, anyone?) or simply for eating for a quick snack.",
      cost: 6.00,
      byDozen: true,
      type: "APPLES"
    },
    {
      name: "Gold Rush",
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "This hard & tart apple is excellent for baking (apple pie, anyone?) or simply for eating for a quick snack.",
      cost: 6.00,
      byDozen: true,
      type: "APPLES"
    }
  ];
  const pears         = [
    {
      name: "Bosc",
      picture: "http://www.specialtyproduce.com/sppics/7242.png",
      description: "These firm and juicy pears are great for cooking, juicing, and eating by hand.",
      cost: 5.50,
      byDozen: true,
      type: "PEARS"
    },
    {
      name: "Bosc",
      picture: "http://www.specialtyproduce.com/sppics/7242.png",
      description: "These firm and juicy pears are great for cooking, juicing, and eating by hand.",
      cost: 5.50,
      byDozen: true,
      type: "PEARS"
    },
    {
      name: "Bosc",
      picture: "http://www.specialtyproduce.com/sppics/7242.png",
      description: "These firm and juicy pears are great for cooking, juicing, and eating by hand.",
      cost: 5.50,
      byDozen: true,
      type: "PEARS"
    },
    {
      name: "Bosc",
      picture: "http://www.specialtyproduce.com/sppics/7242.png",
      description: "These firm and juicy pears are great for cooking, juicing, and eating by hand.",
      cost: 5.50,
      byDozen: true,
      type: "PEARS"
    },
    {
      name: "Bosc",
      picture: "http://www.specialtyproduce.com/sppics/7242.png",
      description: "These firm and juicy pears are great for cooking, juicing, and eating by hand.",
      cost: 5.50,
      byDozen: true,
      type: "PEARS"
    }
  ];
  const peaches       = [
    {
      name: "first peach",
      picture: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Autumn_Red_peaches.jpg",
      description: "These firm and juicy pears are great for cooking, juicing, and eating by hand.",
      cost: 5.50,
      byDozen: true,
      type: "PEACHES"
    },
    {
      name: "second peach",
      picture: "https://wonderopolis.org/wp-content/uploads/2016/10/Why_Are_Peaches_Fuzzy_fruit_background_xl_20352201_(Custom).jpg",
      description: "These firm and juicy pears are great for cooking, juicing, and eating by hand.",
      cost: 5.50,
      byDozen: true,
      type: "PEACHES"
    },
    {
      name: "first peach",
      picture: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Autumn_Red_peaches.jpg",
      description: "These firm and juicy pears are great for cooking, juicing, and eating by hand.",
      cost: 5.50,
      byDozen: true,
      type: "PEACHES"
    },
    {
      name: "second peach",
      picture: "https://wonderopolis.org/wp-content/uploads/2016/10/Why_Are_Peaches_Fuzzy_fruit_background_xl_20352201_(Custom).jpg",
      description: "These firm and juicy pears are great for cooking, juicing, and eating by hand.",
      cost: 5.50,
      byDozen: true,
      type: "PEACHES"
    },
    {
      name: "first peach",
      picture: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Autumn_Red_peaches.jpg",
      description: "These firm and juicy pears are great for cooking, juicing, and eating by hand.",
      cost: 5.50,
      byDozen: true,
      type: "PEACHES"
    },
    {
      name: "second peach",
      picture: "https://wonderopolis.org/wp-content/uploads/2016/10/Why_Are_Peaches_Fuzzy_fruit_background_xl_20352201_(Custom).jpg",
      description: "These firm and juicy pears are great for cooking, juicing, and eating by hand.",
      cost: 5.50,
      byDozen: true,
      type: "PEACHES"
    }
  ];
  const pumpkins      = [
    {
      name: "some pumpkin",
      picture: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dwa6425655/images/products/vegetables/03978t_01_cargopmr.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196",
      description: "These firm and juicy pears are great for cooking, juicing, and eating by hand.",
      cost: 5.50,
      byDozen: true,
      type: "PUMPKINS"
    },
    {
      name: "some pumpkin",
      picture: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dwa6425655/images/products/vegetables/03978t_01_cargopmr.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196",
      description: "These firm and juicy pears are great for cooking, juicing, and eating by hand.",
      cost: 5.50,
      byDozen: true,
      type: "PUMPKINS"
    },
    {
      name: "some pumpkin",
      picture: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dwa6425655/images/products/vegetables/03978t_01_cargopmr.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196",
      description: "These firm and juicy pears are great for cooking, juicing, and eating by hand.",
      cost: 5.50,
      byDozen: true,
      type: "PUMPKINS"
    },
    {
      name: "some pumpkin",
      picture: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dwa6425655/images/products/vegetables/03978t_01_cargopmr.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196",
      description: "These firm and juicy pears are great for cooking, juicing, and eating by hand.",
      cost: 5.50,
      byDozen: true,
      type: "PUMPKINS"
    },
    {
      name: "some pumpkin",
      picture: "http://demandware.edgesuite.net/sits_pod32/dw/image/v2/BBBW_PRD/on/demandware.static/-/Sites-jss-master/default/dwa6425655/images/products/vegetables/03978t_01_cargopmr.jpg?sw=774&cx=302&cy=0&cw=1196&ch=1196",
      description: "These firm and juicy pears are great for cooking, juicing, and eating by hand.",
      cost: 5.50,
      byDozen: true,
      type: "PUMPKINS"
    }
  ];
  var browserHeight = null;
  var heightNum = 0;
  var browserWidth = null;
  var widthNum = 0;
  var indexPageHeight = 0;
  var indexNum = 0;



  //For finding the browser's height
  const findHeight = () =>{
    heightNum = $(document).height();
    browserHeight = heightNum + "px";
    $(".shadePage").css('height',browserHeight);
    $('body').css('height',browserHeight);
    $('#indexPage').css('height',browserHeight);
  };

  //For finding the browser's height
  const findWidth = () =>{
    widthNum = $(document).width();
    browserWidth = widthNum + "px";
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
  if (widthNum > 414) {
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
  const listFruit = (typeList,fruitType) => {
    var idLabel = " id='" + fruitType + "' "
    $("<div class='fruitTitle'>" + fruitType + "</div>").appendTo("#typeName");
    $("#typeName").append("<div class='fruitList' " + idLabel + "></div>");
    for (var a = 0; a < typeList.length; a++) {
      if (typeList[a].type == fruitType) {
        var fruitID = "#" + fruitType + a;
        $("#" + fruitType).append("<div class='oneFruitBox' id=" + fruitType + a + "><div>");
        $(fruitID).append("<div class='fruitName'><u>" + typeList[a].name + "</u></div>");
        $(fruitID).append("<img class='fruitPicture' src='" + typeList[a].picture + "'>");
        $(fruitID).append("<div class='fruitDescription'>" + typeList[a].description + "</div>");
        $(fruitID).append("<div class='fruitPrice'>$" + typeList[a].cost.toFixed(2) + "</div>");
      }
    }
    findHeight();
    $('body').css('height',browserHeight);
    $('#indexPage').css('height',browserHeight);
  };
  listFruit(apples,"APPLES");
  listFruit(pears,"PEARS");
  listFruit(peaches,"PEACHES");
  listFruit(pumpkins,"PUMPKINS");

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
    $(".fruitTitle").remove();
    $(".fruitList").remove();
  }

  // To get the new height after selecting a different fruit type
  var newHeight = () => {
    heightNum = $("#menuBox").height() + $(".subpageTitle").height() + $("#chooseFruit").height() + $("#typeName").height() + 70;
    var screenHeight = $(window).height();
    if (screenHeight > heightNum) {
      heightNum = screenHeight;
    };
    browserHeight = heightNum + "px";
    $(".shadePage").css('height',browserHeight);
    $('body').css('height',browserHeight);
    $('#indexPage').css('height',browserHeight);
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
    listFruit(apples,"APPLES");
    newHeight();
  })
  $("#pearButton").click(()=>{
    unselectAll();
    clearAllTypeList();
    $("#pearButton").css('color','black').css('background-color','white');
    listFruit(pears,"PEARS");
    newHeight();
  })
  $("#peachButton").click(()=>{
    unselectAll();
    clearAllTypeList();
    $("#peachButton").css('color','black').css('background-color','white');
    listFruit(peaches,"PEACHES");
    newHeight();
  })
  $("#pumpkinButton").click(()=>{
    unselectAll();
    clearAllTypeList();
    $("#pumpkinButton").css('color','black').css('background-color','white');
    listFruit(pumpkins,"PUMPKINS");
    newHeight();
  })
  $("#allButton").click(()=>{
    unselectAll();
    clearAllTypeList();
    listFruit(apples,"APPLES");
    listFruit(pears,"PEARS");
    listFruit(peaches,"PEACHES");
    listFruit(pumpkins,"PUMPKINS");
    newHeight();
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
    indexNum = heightNum - 25;
    indexPageHeight = indexNum + "px";
    $("#indexPage").css('height',indexPageHeight);
  }
  setIndexHeight();

})
