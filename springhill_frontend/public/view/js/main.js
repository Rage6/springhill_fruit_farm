$(()=>{

  //Starting variables
  var menuUp = true;
  var contactDown = false;
  const apples         = [
    {
      name: "Blondee",
      estRipeMon: 9,
      estRipeDay: 6,
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "NEEDS INFO",
      type: "APPLES"
    },
    {
      name: "Braeburn",
      estRipeMon: 10,
      estRipeDay: 31,
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "Sweet, very good for salads",
      type: "APPLES"
    },
    {
      name: "Cameo",
      estRipeMon: 10,
      estRipeDay: 25,
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "Sweet, wonderfully crisp",
      type: "APPLES"
    },
    {
      name: "Cortland",
      estRipeMon: 9,
      estRipeDay: 9,
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "Tart, very good for baking",
      type: "APPLES"
    },
    {
      name: "Crimson Crisp",
      estRipeMon: 9,
      estRipeDay: 25,
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "Tart, very good for baking",
      type: "APPLES"
    },
    {
      name: "Early Gold",
      estRipeMon: 10,
      estRipeDay: 31,
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "NEEDS INFO",
      type: "APPLES"
    },
    {
      name: "Early Fuji",
      estRipeMon: 9,
      estRipeDay: 16,
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "NEEDS INFO",
      type: "APPLES"
    },
    {
      name: "Fuji",
      estRipeMon: 10,
      estRipeDay: 25,
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "Sweet, wonderfully crisp",
      type: "APPLES"
    },
    {
      name: "Gala",
      estRipeMon: 8,
      estRipeDay: 24,
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "Sweet, very good for salads",
      type: "APPLES"
    },
    {
      name: "Ginger Gold",
      estRipeMon: 8,
      estRipeDay: 18,
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "Tangy, very good for baking",
      type: "APPLES"
    },
    {
      name: "Gold Rush",
      estRipeMon: 10,
      estRipeDay: 31,
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "Tangy, very good for baking",
      type: "APPLES"
    },
    {
      name: "Granny Smith",
      estRipeMon: 10,
      estRipeDay: 25,
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "Tart, very good for baking",
      type: "APPLES"
    },
    {
      name: "Honeycrisp",
      estRipeMon: 9,
      estRipeDay: 5,
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "Sweet, wonderfully crisp",
      type: "APPLES"
    },
    {
      name: "Jonagold",
      estRipeMon: 8,
      estRipeDay: 27,
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "Tangy, very good for baking",
      type: "APPLES"
    },
    {
      name: "Jonathon",
      estRipeMon: 9,
      estRipeDay: 12,
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "Tart, very good for baking",
      type: "APPLES"
    },
    {
      name: "Macintosh",
      estRipeMon: 9,
      estRipeDay: 6,
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "Tart, very good for baking",
      type: "APPLES"
    },
    {
      name: "Melrose",
      estRipeMon: 10,
      estRipeDay: 4,
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "Sweet, very good for baking",
      type: "APPLES"
    },
    {
      name: "Mutsu",
      estRipeMon: 10,
      estRipeDay: 18,
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "Tangy, very good for baking",
      type: "APPLES"
    },
    {
      name: "Northern Spy",
      estRipeMon: 10,
      estRipeDay: 22,
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "Tart, very good for baking",
      type: "APPLES"
    },
    {
      name: "Paula Red",
      estRipeMon: 8,
      estRipeDay: 18,
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "Tart, very good for baking",
      type: "APPLES"
    },
    {
      name: "Pink Lady",
      estRipeMon: 10,
      estRipeDay: 31,
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "Tart, very good for baking",
      type: "APPLES"
    },
    {
      name: "Red Delicious",
      estRipeMon: 9,
      estRipeDay: 25,
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "Sweet, very good for salads",
      type: "APPLES"
    },
    {
      name: "Rome",
      estRipeMon: 10,
      estRipeDay: 1,
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "A mild flavor, well suited for baking",
      type: "APPLES"
    },
    {
      name: "Shizuka",
      estRipeMon: 10,
      estRipeDay: 11,
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "UPDATE INFO",
      type: "APPLES"
    },
    {
      name: "Winesap",
      estRipeMon: 10,
      estRipeDay: 25,
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "Tart, very good for baking",
      type: "APPLES"
    },
    {
      name: "Yellow Delicious",
      estRipeMon: 10,
      estRipeDay: 2,
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "UPDATE INFO",
      type: "APPLES"
    },
    {
      name: "Zestar",
      estRipeMon: 8,
      estRipeDay: 14,
      picture: "http://ediblelandscaping.com/products/trees/Apples/images/site/apple-Gold-Rush-2013.jpg",
      description: "UPDATE INFO",
      type: "APPLES"
    }
  ];
  const pears          = [
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
  const nectarines     = [
    {
      name: "Sunglo",
      estRipeMon: 9,
      estRipeDay: 6,
      picture: "./css/img/nectarine_generic.jpg",
      description: "NEEDS INFO",
      type: "NECTARINES"
    },
    {
      name: "Fantasia",
      estRipeMon: 9,
      estRipeDay: 6,
      picture: "./css/img/nectarine_generic.jpg",
      description: "NEEDS INFO",
      type: "NECTARINES"
    },
    {
      name: "Zephyr",
      estRipeMon: 9,
      estRipeDay: 6,
      picture: "./css/img/nectarine_generic.jpg",
      description: "NEEDS INFO",
      type: "NECTARINES"
    }
  ]
  const peaches        = [
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
  const pumpkins       = [
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
  const mobileMaxWidth = 768;
  var browserHeight = null;
  var heightNum = 0;
  var browserWidth = null;
  var widthNum = 0;
  var indexPageHeight = 0;
  var indexNum = 0;

  const showHeight = window.screen.height;
  const showAvail  = window.screen.availHeight;
  const showInner  = window.innerHeight;

  const testFunc = () => {
    $('#title').append("<p>showHeight: " + showHeight + "</p>");
    $('#title').append("<p>showAvail: " + showAvail + "</p>");
    $('#title').append("<p>showAvail: " + showInner + "</p>");
  }
  testFunc();

  //For finding the page's height
  const findHeight = () =>{
    heightNum = window.screen.height;
    menuHeight = 44; /* This is a temporary solution for factoring in URL bars, etc */
    browserHeight = heightNum + "px";
    $('.shadePage').css('height',browserHeight);
    // $('body').css('height',browserHeight);
    $('#indexPage').css('height',browserHeight);
  };
  findHeight();

  //For finding the page's width
  const findWidth = () =>{
    widthNum = $(document).width();
    browserWidth = widthNum + "px";
  };
  findWidth();

  // Since mobile devices can't use background-attachment: fixed, this will adjust for it depending on the browser's width (mobileMaxWidth)
  if (widthNum <= mobileMaxWidth) {
    $("#indexPage").css('width',browserWidth).css('height',browserHeight);
    if (widthNum <= 414) {
      $("#indexPage").css('background-image','url("./css/img/row-1.jpg")');
    } else {
      $("#indexPage").css('background-image','url("./css/img/orchard_flowers.jpg")');
    };
  } else {
    // console.log('This worked');
  };

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
      }
    }
    findHeight();
    // $('body').css('height',browserHeight);
    $('#indexPage').css('height',browserHeight);
  };
  if (window.location.href == 'http://localhost:4000/produce.html' || window.location.href == 'https://springhill-fruit-farm.herokuapp.com/produce.html') {
    listFruit(apples,"APPLES");
    listFruit(pears,"PEARS");
    listFruit(peaches,"PEACHES");
    listFruit(pumpkins,"PUMPKINS");
    listFruit(nectarines,"NECTARINES");
  }

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
    clearOneTypeList(nectarines);
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
    // $('#indexPage').css('height',browserHeight);
  }

  // For selecting the fruit types
  const unselectAll = () => {
    $("#appleButton").css('color','white').css('background-color','transparent');
    $("#pearButton").css('color','white').css('background-color','transparent');
    $("#peachButton").css('color','white').css('background-color','transparent');
    $("#pumpkinButton").css('color','white').css('background-color','transparent');
    $("#nectarineButton").css('color','white').css('background-color','transparent');
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
  $("#nectarineButton").click(()=>{
    unselectAll();
    clearAllTypeList();
    $("#nectarineButton").css('color','black').css('background-color','white');
    listFruit(nectarines,"NECTARINES");
    newHeight();
  })
  $("#allButton").click(()=>{
    unselectAll();
    clearAllTypeList();
    listFruit(apples,"APPLES");
    listFruit(pears,"PEARS");
    listFruit(peaches,"PEACHES");
    listFruit(pumpkins,"PUMPKINS");
    listFruit(nectarines,"NECTARINES");
    newHeight();
  })

  // For scrolling Contact tab up and down
  const contactScroll = () => {
    if (contactDown == true) {
      findHeight();
      var windowWidth = $(window).outerWidth();
      var currentTop = $(window).scrollTop();
      var currentHeight = $(document).outerHeight();
      $("#contactContent").css('animation-name','tabUp');
      $(".shadePage").css('display','block');
      $("#contactAddress").css('animation-name','openAddress');
      $("#firstList").css('display','flex');
      $("#secondList").css('display','flex');
      $("#phoneLogo").show();
      $("#facebookLogo").show();
      $(".contactList").show();
      scrollToBottom(currentTop, currentHeight, windowWidth);
      contactDown = false;
    } else {
      $("#contactContent").css('animation-name','tabDown');
      $(".shadePage").css('display','none');
      $("#contactAddress").css('animation-name','closeAddress');
      $("#firstList").css('display','none');
      $("#secondList").css('display','none');
      $("#phoneLogo").hide();
      $("#facebookLogo").hide();
      $(".contactList").hide();
      contactDown = true;
    }
  };

  // To set up the default values on the Contact stuff
  contactScroll();

  // Using contactScroll on the #contactTab
  $("#contactTab").click(()=>{
    contactScroll();
  })

  // To scroll the window down if the view width is >1366px
  //Note: I'm not sure why, but the heightDiff (5 lines down) would never result with the actual #contactContent height. This forced me to manually insert the correct value (325) instead.
  const scrollToBottom = (startTop, startHeight, currentWidth) => {
    if (currentWidth >= 1367) {
      var newHeight = $(document).outerHeight();
      var heightDiff = newHeight - startHeight;
      // var newTop = startTop + heightDiff;
      var newTop = startTop + 325;
      $("html, body").animate({
        scrollTop: newTop
      }, 300);
    }
  }

})
