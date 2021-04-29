$(()=>{

  //Starting variables
  var menuUp = true;
  var contactDown = false;
  const apples         = [
    {
      name: "Blondee",
      ripens: true,
      estRipeMon: 9,
      estRipeDay: 6,
      picture: "css/img/apples/BLONDEE_edit.jpg",
      description: "Sweet & crisp. Great for eating, sauce, pies, baking, and cooking.",
      type: "APPLES"
    },
    {
      name: "Braeburn",
      ripens: true,
      estRipeMon: 10,
      estRipeDay: 31,
      picture: "css/img/apples/Braeburn_edit.jpg",
      description: "Hard & tart. Excellent for eating, pies, and baking. Stores well.",
      type: "APPLES"
    },
    {
      name: "Cameo",
      ripens: true,
      estRipeMon: 10,
      estRipeDay: 25,
      picture: "css/img/apples/CAMEOO_edit.jpg",
      description: "Sweet & crisp with a touch of tart. Excellent for eating, pies, and baking.",
      type: "APPLES"
    },
    {
      name: "Cortland",
      ripens: true,
      estRipeMon: 9,
      estRipeDay: 9,
      picture: "css/img/apples/cortland_edit.jpg",
      description: "Juicy, Crisp, and Tart. Great for eating, sauce, pies, drying, baking, and cooking.",
      type: "APPLES"
    },
    {
      name: "Crimson Crisp",
      ripens: true,
      estRipeMon: 9,
      estRipeDay: 25,
      picture: "css/img/apples/crimson_crisp_edit.jpg",
      description: "Firm, crisp, and tart (with a hint of spice). Wonderful for eating or for salads.",
      type: "APPLES"
    },
    {
      name: "Earligold",
      ripens: true,
      estRipeMon: 8,
      estRipeDay: 7,
      picture: "css/img/apples/Earligold_edit.jpg",
      description: "Tart & crisp, softening over time. Great for eating, sauce, pies, baking, and cooking.",
      type: "APPLES"
    },
    {
      name: "Early Fuji",
      ripens: true,
      estRipeMon: 9,
      estRipeDay: 16,
      picture: "css/img/apples/Earlyfuji_edit.jpg",
      description: "Sweet & hard. Excellent for eating, salads, pies, and baking.",
      type: "APPLES"
    },
    // {
    //   name: "Early Macintosh",
    //   ripens: true,
    //   estRipeMon: null,
    //   estRipeDay: null,
    //   picture: "css/img/apples/EARLYMAC_edit.jpg",
    //   description: "Tart & mellow. Great for eating and baking.",
    //   type: "APPLES"
    // },
    {
      name: "Fuji",
      ripens: true,
      estRipeMon: 10,
      estRipeDay: 25,
      picture: "css/img/apples/Fuji_edit.jpg",
      description: "Sweet & crisp. Excellent for eating, pies, and baking.",
      type: "APPLES"
    },
    {
      name: "Gala",
      ripens: true,
      estRipeMon: 8,
      estRipeDay: 24,
      picture: "css/img/apples/Gala_edit.jpg",
      description: "Sweet, crisp. light skinned, and aromatic. Great for eating, baking, and cooking.",
      type: "APPLES"
    },
    {
      name: "Ginger Gold",
      ripens: true,
      estRipeMon: 8,
      estRipeDay: 18,
      picture: "css/img/apples/Ginger_Gold_edit.jpg",
      description: "Sweet & tart. Firm & crisp. Great for eating, sauce, pies, baking, and cooking.",
      type: "APPLES"
    },
    {
      name: "Gold Rush",
      ripens: true,
      estRipeMon: 10,
      estRipeDay: 31,
      picture: "css/img/apples/Gold_Rush_edit.jpg",
      description: "Hard & very tart. Excellent for eating, pies, and baking.",
      type: "APPLES"
    },
    {
      name: "Granny Smith",
      ripens: true,
      estRipeMon: 10,
      estRipeDay: 25,
      picture: "css/img/apples/Granny_Smith_edit.jpg",
      description: "Hardy & tart. Excellent for eating, pies, and baking.",
      type: "APPLES"
    },
    {
      name: "Honeycrisp",
      ripens: true,
      estRipeMon: 9,
      estRipeDay: 5,
      picture: "css/img/apples/Honeycrisp_edit.jpg",
      description: "Crisp & sweet. Excellent for eating, pies, and salads.",
      type: "APPLES"
    },
    {
      name: "Jonagold",
      ripens: true,
      estRipeMon: 9,
      estRipeDay: 27,
      picture: "css/img/apples/JONAGOLD_edit.jpg",
      description: "Sweet, tangy, and crisp. Great for eating, sauce, pies, baking, and cooking.",
      type: "APPLES"
    },
    {
      name: "Jonathon",
      ripens: true,
      estRipeMon: 9,
      estRipeDay: 12,
      picture: "css/img/apples/jonathon_edit.jpg",
      description: "Tart, spicy, and firm. Excellent for eating, salads, freezing, sauce, and pies.",
      type: "APPLES"
    },
    {
      name: "Macintosh",
      ripens: true,
      estRipeMon: 9,
      estRipeDay: 6,
      picture: "css/img/apples/macintosh_edit.jpg",
      description: "Spicy & tart, softened once ripe. Excellent for eating and salads. Good for pies, sauce, and baking.",
      type: "APPLES"
    },
    {
      name: "Melrose",
      ripens: true,
      estRipeMon: 10,
      estRipeDay: 4,
      picture: "css/img/apples/Melrose_edit.jpg",
      description: "Crisp & tart. Excellent for eating, salads, sauce, pies, baking, and freezing.",
      type: "APPLES"
    },
    {
      name: "Mutsu",
      ripens: true,
      estRipeMon: 10,
      estRipeDay: 18,
      picture: "css/img/apples/Mutsu_edit.jpg",
      description: "Sweet & crisp (with a zing). Excellent for eating, sauce, pies, and baking.",
      type: "APPLES"
    },
    {
      name: "Northern Spy",
      ripens: true,
      estRipeMon: 10,
      estRipeDay: 22,
      picture: "css/img/apples/NORTHERN_SPY_edit.jpg",
      description: "Tart with a hint of sweetness. Excellent for pies or storing.",
      type: "APPLES"
    },
    {
      name: "Paula Red",
      ripens: true,
      estRipeMon: 8,
      estRipeDay: 18,
      picture: "css/img/apples/Paula_Red_edit.jpg",
      description: "Tart, juicy, and firm. Great for eating, pies, baking, and cooking.",
      type: "APPLES"
    },
    {
      name: "Pink Lady",
      ripens: true,
      estRipeMon: 10,
      estRipeDay: 31,
      picture: "css/img/apples/Pink_Lady_edit.jpg",
      description: "Sweet, tart, and hard. Excellent for eating, pies, and baking.",
      type: "APPLES"
    },
    {
      name: "Red Delicious",
      ripens: true,
      estRipeMon: 9,
      estRipeDay: 25,
      picture: "css/img/apples/red-delicious_edit.jpg",
      description: "Sweet, juicy, and thick-skinned. Excellent for eating and salads.",
      type: "APPLES"
    },
    {
      name: "Rome",
      ripens: true,
      estRipeMon: 10,
      estRipeDay: 1,
      picture: "css/img/apples/Rome_edit.jpg",
      description: "Mild & firm. Excellent for sauce, pies, baking, and freezing.",
      type: "APPLES"
    },
    {
      name: "Shizuka",
      ripens: true,
      estRipeMon: 10,
      estRipeDay: 11,
      picture: "css/img/apples/Shizuka_edit.jpg",
      description: "Crisp & sweet. Excellent for eating. Sweeter, less acidic cousin of Matsu apples.",
      type: "APPLES"
    },
    {
      name: "Winesap",
      ripens: true,
      estRipeMon: 10,
      estRipeDay: 25,
      picture: "css/img/apples/Winesap_edit.jpg",
      description: "Spicy, tart, and firm. Excellent for eating, sauce, pies, baking and freezing.",
      type: "APPLES"
    },
    {
      name: "Yellow Delicious",
      ripens: true,
      estRipeMon: 10,
      estRipeDay: 2,
      picture: "css/img/apples/YELLOW_D_edit.jpg",
      description: "Sweet & semi-firm. Excellent for eating, salads, sauce, pies, baking, and freezing.",
      type: "APPLES"
    },
    {
      name: "Zestar",
      ripens: true,
      estRipeMon: 8,
      estRipeDay: 14,
      picture: "css/img/apples/Zestar_edit.jpg",
      description: "Sweet, tart, and crisp. Great for eating, sauce, pies, baking, and cooking.",
      type: "APPLES"
    }
  ];
  const pears          = [
    {
      name: "Bartlett",
      ripens: true,
      estRipeMon: 9,
      estRipeDay: 1,
      picture: "css/img/pears/Bartlett_Pear_edit.jpg",
      description: "Weet & juicy. Excellent for eating, canning, jams and jellies.",
      type: "PEARS"
    },
    {
      name: "Bosc",
      ripens: true,
      estRipeMon: 9,
      estRipeDay: 1,
      picture: "css/img/pears/BOSC_Pear_edit.jpg",
      description: "Firm & juicy. Great for eating, cooking, juicing, and canning.",
      type: "PEARS"
    },
    {
      name: "D'Anjou",
      ripens: true,
      estRipeMon: 9,
      estRipeDay: 1,
      picture: "css/img/pears/DAnjou_edit.jpg",
      description: "Crisp & sweet (with a hint of citrus). Great for eating, cooking, juicing, and canning.",
      type: "PEARS"
    },
    {
      name: "Shenandoah",
      ripens: true,
      estRipeMon: 9,
      estRipeDay: 1,
      picture: "css/img/pears/shenandoah_edit.jpg",
      description: "Crispy & sweet. Great for eating and canning.",
      type: "PEARS"
    }
  ];
  const nectarines     = [
    {
      name: "Fantasia",
      ripens: true,
      estRipeMon: 9,
      estRipeDay: 6,
      picture: "css/img/nectarines/Fantasia_edit.jpg",
      description: "Sweet & juicy. Excellent for eating, canning, and freezing.",
      type: "NECTARINES"
    },
    {
      name: "Sunglo",
      ripens: true,
      estRipeMon: 9,
      estRipeDay: 6,
      picture: "css/img/nectarines/Sunglo_edit.jpg",
      description: "Sweet & juicy. The 'Queen' of nectarines. Great for eating, canning, and freezing.",
      type: "NECTARINES"
    }
  ];
  const peaches        = [
    {
      name: "Contender",
      ripens: true,
      estRipeMon: 8,
      estRipeDay: 20,
      picture: "css/img/peaches/Contender_edit.jpg",
      description: "Sweet & cling-free. Great for canning, pies, jams, jellies, and fresh eating.",
      type: "PEACHES"
    },
    {
      name: "Flaming Fury",
      ripens: true,
      estRipeMon: 8,
      estRipeDay: 20,
      picture: "css/img/peaches/Flaming_Fury_edit.jpg",
      description: "Sweet & juicy. Excellent for eating, salads, sauce, pies, baking, and freezing.",
      type: "PEACHES"
    },
    {
      name: "Harrow Beauty",
      ripens: true,
      estRipeMon: 8,
      estRipeDay: 20,
      picture: "css/img/peaches/harrow-beauty_edit.jpg",
      description: "Sweet, juicy, and cling-free. Excellent for eating, baking, jamming, canning, and freezing.",
      type: "PEACHES"
    },
    {
      name: "Red Haven",
      ripens: true,
      estRipeMon: 8,
      estRipeDay: 7,
      picture: "css/img/peaches/Red_Haven_edit.jpg",
      description: "Sweet & semi-cling. Great for pies, jams, jellies, canning, and fresh eating.",
      type: "PEACHES"
    }
  ];
  const others         = [
    {
      name: "Apple Cider",
      ripens: false,
      picture: "css/img/other/cider2_crop.jpg",
      description: "",
      type: "OTHERS"
    },
    {
      name: "Pumpkins & Squash",
      ripens: false,
      picture: "css/img/other/pumpkins.jpg",
      description: "",
      type: "OTHERS"
    }
  ];
  const plums          = [
    {
      name: "Bluebyrd",
      ripens: true,
      estRipeMon: "N",
      estRipeDay: "A",
      picture: "css/img/plums/Bluebyrd_edit.jpg",
      description: "Very sweet. Excellent for eating, jams, jellies, and pies.",
      type: "PLUMS"
    },
    {
      name: "German",
      ripens: true,
      estRipeMon: 8,
      estRipeDay: 15,
      picture: "css/img/plums/GERMAN_edit.jpg",
      description: "Sweet & juicy. Excellent for eating, drying, canning, and baking.",
      type: "PLUMS"
    },
    {
      name: "Long John",
      ripens: true,
      estRipeMon: 9,
      estRipeDay: 1,
      picture: "css/img/plums/long_john.jpg",
      description: "Delightfully tart. Freestone with beautiful orange flesh.",
      type: "PLUMS"
    },
    {
      name: "Stanley",
      ripens: true,
      estRipeMon: 9,
      estRipeDay: 1,
      picture: "css/img/plums/Stanley_edit.jpg",
      description: "Sweet & juicy. Excellent for eating, drying, canning, and baking.",
      type: "PLUMS"
    }
  ];
  const mobileMaxWidth = 768;
  var browserHeight = null;
  var heightNum = 0;
  var browserWidth = null;
  var widthNum = 0;
  var indexPageHeight = 0;
  var indexNum = 0;

  // The following heights are needed to adjust for
  var fullHeight = window.screen.height;
  var innerHeight = window.innerHeight;

  //For finding the page's height
  const findHeight = () =>{
    menuHeight = fullHeight - innerHeight;
    heightNum = fullHeight + menuHeight; /* the menuHeight is to factor in the browser's menu bar at the bottom and url bar at the top */
    browserHeight = heightNum + "px";
    $('.shadePage').css('height',browserHeight);
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
    $(".menuButton")
      .css('animation-name','slideDown')
      .css('border-bottom','1px solid black');
    menuUp = false;
  }
  const raiseMenu = () => {
    $(".menuButton")
      .css('animation-name','slideUp')
      .css('border-bottom','0px');
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
    if (fruitType == "PEACHES" || fruitType == "PEARS") {
      $("<div class='fruitTitle'>" + fruitType + "<div class='weather'>Weather permitting, these include:</div></div>").appendTo("#typeName");
    } else {
      $("<div class='fruitTitle'>" + fruitType + "</div>").appendTo("#typeName");
    };
    $("#typeName").append("<div class='fruitList' " + idLabel + "></div>");
    for (var a = 0; a < typeList.length; a++) {
      if (typeList[a].type == fruitType) {
        var fruitID = "#" + fruitType + a;
        $("#" + fruitType).append("<div class='oneFruitBox' id=" + fruitType + a + "><div>");
        $(fruitID).append("<div class='fruitName'><u>" + typeList[a].name + "</u></div>");
        $(fruitID).append("<img class='fruitPicture' src='" + typeList[a].picture + "'>");
        $(fruitID).append("<div class='fruitDescription'>" + typeList[a].description + "</div>");
        if (typeList[a].ripens == true) {
          $(fruitID).append("<div class='ripeDate'>Ripe by: " + typeList[a].estRipeMon + "/" + typeList[a].estRipeDay + "</div>");
        }
      }
    }
    findHeight();
    // $('body').css('height',browserHeight);
    $('#indexPage').css('height',browserHeight);
  };
  if (window.location.href == 'http://localhost:4000/produce.html' || window.location.href == 'http://springhill-fruit-farm.com/produce.html') {
    console.log("Running listFruit() for all fruit.");
    listFruit(apples,"APPLES");
    listFruit(pears,"PEARS");
    listFruit(peaches,"PEACHES");
    listFruit(plums,"PLUMS");
    listFruit(nectarines,"NECTARINES");
    listFruit(others,"OTHERS");
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
    clearOneTypeList(others);
    clearOneTypeList(nectarines);
    clearOneTypeList(plums);
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
    $("#otherButton").css('color','white').css('background-color','transparent');
    $("#nectarineButton").css('color','white').css('background-color','transparent');
    $("#plumButton").css('color','white').css('background-color','transparent');
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
  $("#otherButton").click(()=>{
    unselectAll();
    clearAllTypeList();
    $("#otherButton").css('color','black').css('background-color','white');
    listFruit(others,"OTHERS");
    newHeight();
  })
  $("#nectarineButton").click(()=>{
    unselectAll();
    clearAllTypeList();
    $("#nectarineButton").css('color','black').css('background-color','white');
    listFruit(nectarines,"NECTARINES");
    newHeight();
  })
  $("#plumButton").click(()=>{
    unselectAll();
    clearAllTypeList();
    $("#plumButton").css('color','black').css('background-color','white');
    listFruit(plums,"PLUMS");
    newHeight();
  })
  $("#allButton").click(()=>{
    unselectAll();
    clearAllTypeList();
    listFruit(apples,"APPLES");
    listFruit(pears,"PEARS");
    listFruit(peaches,"PEACHES");
    listFruit(plums,"PLUMS");
    listFruit(nectarines,"NECTARINES");
    listFruit(others,"OTHERS");
    newHeight();
  })

  // For scrolling Contact tab up and down
  const contactScroll = () => {
    if (contactDown == true) {
      findHeight();
      var windowWidth = $(window).outerWidth();
      var currentTop = $(window).scrollTop();
      var currentHeight = $(document).outerHeight();
      $("#contactContent")
        .css('height','inherit')
        .css('padding','20px 10%')
        .css('font-size','1.1rem')
        .css('border','1px solid black');
      $(".shadePage").css('display','block');
      $("#contactAddress")
        .css('font-size','1.4rem')
        .css('padding','5px');
      $("#firstList").css('display','flex');
      $("#secondList").css('display','flex');
      $("#phoneLogo").show();
      $("#facebookLogo").show();
      $(".contactList").show();
      scrollToBottom(currentTop, currentHeight, windowWidth);
      contactDown = false;
    } else {
      $("#contactContent")
        .css('height','0')
        .css('padding','0')
        .css('font-size','0')
        .css('border','none');
      $(".shadePage").css('display','none');
      $("#contactAddress")
        .css('font-size','0rem')
        .css('padding','0');
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
