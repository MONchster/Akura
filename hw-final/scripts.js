//   code for background 
$(".bg-btn").on("click",
function() {
    generateBg();
} );

var bgParts =[
    '<div class="random bg"> <img src="bg1.jpg"></div>',
    '<div class="random bg"> <img src="bg2.jpg"></div>',
    '<div class="random bg"> <img src="bg3.jpg"></div>',
    '<div class="random bg"> <img src="bg4.jpg"></div>'
   
];
var bgNum = 0;
function generateBg() {
    var bgResult = bgParts[Math.floor(Math.random() * bgParts.length)];

  
    var uniqueId =  "bg" + bgNum++;

    $(bgResult).clone().addClass(uniqueId).appendTo(".bg-zn");
  
    var maxLeft = $(window).width() - $('.' + uniqueId).width();
    var maxTop = $(window).height() - $('.' + uniqueId).height();
  
    var leftPos = Math.floor(Math.random() * (maxLeft + 1));
    var topPos = Math.floor(Math.random() * (maxTop));
  
    $('.' + uniqueId).css({
      top: topPos,
      left: leftPos
    });
  
    $( ".bg" ).draggable({
      stack: '.bg'

    });
    $( ".bg" ).resizable();
  
    $( ".random" ).on( "dblclick", function() {
      $(this).hide();
    } );
  
  }


// code for body

$(".bd-btn").on("click",
    function() {
        generateBd();
    } );
    
    var bdParts =[
        '<img class="random bd" src="bd1.png"></img>',
        '<img class="random bd" src="bd2.png"></img>',
        '<img class="random bd" src="bd3.png"></img>',
        '<img class="random bd" src="bd4.png"></img>',
        '<img class="random bd" src="bd5.png"></img>',
        '<img class="random bd human" src="bd6.png"></img>'

       
    ];
    var bdNum = 0;
    function generateBd() {
        var bdResult = bdParts[Math.floor(Math.random() * bdParts.length)];
    
      
        var uniqueId =  "bd" + bdNum++;
    
        // for eyes and mouth  dont change this
        $(bdResult).clone().addClass(uniqueId).appendTo(".bd-zn");
      
        var maxLeft = $(window).width() - $('.' + uniqueId).width();
        var maxTop = $(window).height() - $('.' + uniqueId).height();
      
        var leftPos = Math.floor(Math.random() * (maxLeft + 1));
        var topPos = Math.floor(Math.random() * (maxTop));
      
        $('.' + uniqueId).css({
          top: topPos,
          left: leftPos
        });
    //   this too
        $( ".bd" ).draggable({
          stack: '.bd'
        });
        // $( ".bd" ).resizable();
      
        $( ".random" ).on( "dblclick", function() {
          $(this).hide();
        } );
      
      }
      // code for eyes 
      $(".es-btn").on("click",
        function() {
            generateEs();
        } );
        
        var esParts =[
            '<img class="random es" src="eyes1.png"></img>',
            '<img class="random es" src="eyes2.png"></img>',
            '<img class="random es" src="eyes3.png"></img>'
    
           
        ];
        var esNum = 0;
        function generateEs() {
            var  esResult = esParts[Math.floor(Math.random() * esParts.length)];
        
          
            var uniqueId =  "es" + esNum++;
        
            // for eyes and mouth  dont change this
            $(esResult).clone().addClass(uniqueId).appendTo(".es-mthzn");
          
            var maxLeft = $(window).width() - $('.' + uniqueId).width();
            var maxTop = $(window).height() - $('.' + uniqueId).height();
          
            var leftPos = Math.floor(Math.random() * (maxLeft + 1));
            var topPos = Math.floor(Math.random() * (maxTop));
          
            $('.' + uniqueId).css({
              top: topPos,
              left: leftPos
            });
        //   this too
            $( ".es" ).draggable({
              stack: '.es'
            });
            // $( ".es" ).resizable();
          
            $( ".random" ).on( "dblclick", function() {
              $(this).hide();
            } );
          
          }

           // code for mouth 
      $(".mth-btn").on("click",
        function() {
            generateMth();
        } );
        
        var mthParts =[
            '<img class="random mth" src="mouth1.png"></img>',
            '<img class="random mth" src="mouth2.png"></img>',
            '<img class="random mth" src="mouth3.png"></img>'
    
           
        ];
        var mthNum = 0;
        function generateMth() {
            var  mthResult = mthParts[Math.floor(Math.random() * mthParts.length)];
        
          
            var uniqueId =  "mth" + mthNum++;
        
            // for eyes and mouth  dont change this
            $(mthResult).clone().addClass(uniqueId).appendTo(".es-mthzn");
          
            var maxLeft = $(window).width() - $('.' + uniqueId).width();
            var maxTop = $(window).height() - $('.' + uniqueId).height();
          
            var leftPos = Math.floor(Math.random() * (maxLeft + 1));
            var topPos = Math.floor(Math.random() * (maxTop));
          
            $('.' + uniqueId).css({
              top: topPos,
              left: leftPos
            });
        //   this too
            $( ".mth" ).draggable({
              stack: '.es'
            });
            // $( ".mth" ).resizable();
          
            $( ".random" ).on( "dblclick", function() {
              $(this).hide();
            } );
          
          }
// code for foreground
$(".fg-btn").on("click",
  function() {
      generateFg();
  } );
  
  var fgParts =[
      '<img class="random fg" src="fg1.png"></img>',
      '<img class="random fg" src="fg2.png"></img>',
      '<img class="random fg" src="fg3.png"></img>'
     
  ];
  var fgNum = 0;
  function generateFg() {
      var fgResult = fgParts[Math.floor(Math.random() * fgParts.length)];
  
    
      var uniqueId =  "fg" + fgNum++;
  
     
      $(fgResult).clone().addClass(uniqueId).appendTo(".fg-zn");
    
      var maxLeft = $(window).width() - $('.' + uniqueId).width();
      var maxTop = $(window).height() - $('.' + uniqueId).height();
    
      var leftPos = Math.floor(Math.random() * (maxLeft + 1));
      var topPos = Math.floor(Math.random() * (maxTop));
    
      $('.' + uniqueId).css({
        top: topPos,
        left: leftPos
      });
  
      $( ".fg" ).draggable({
        stack: '.fg'
      });
      // $( ".fg" ).resizable();
     

      $( ".random" ).on( "dblclick", function() {
        $(this).hide();
      } );
    
    }
    // code for misc
$(".misc-btn").on("click",
  function() {
      generateMisc();
  } );
  
  var miscParts =[
      '<img class="random misc" src="misc1.png"></img>',
      '<img class="random misc rice" src="misc2.png">',
      '<img class="random misc gun" src="misc3.png">',
      '<img class="random misc gun" src="misc4.png">'
      
     
  ];
  var miscNum = 0;
  function generateMisc() {
      var miscResult = miscParts[Math.floor(Math.random() * miscParts.length)];
  
    
      var uniqueId =  "misc" + miscNum++;
  
     
      $(miscResult).clone().addClass(uniqueId).appendTo(".misc-zn");
    
      var maxLeft = $(window).width() - $('.' + uniqueId).width();
      var maxTop = $(window).height() - $('.' + uniqueId).height();
    
      var leftPos = Math.floor(Math.random() * (maxLeft + 1));
      var topPos = Math.floor(Math.random() * (maxTop));
    
      $('.' + uniqueId).css({
        top: topPos,
        left: leftPos
      });
  
      $( ".misc" ).draggable({
        stack: '.misc'
      });
      
       
      $( ".random" ).on( "dblclick", function() {
        $(this).hide();
      } );
    
    }
