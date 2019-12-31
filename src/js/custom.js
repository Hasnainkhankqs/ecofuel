// inititating wow.js
new WOW().init();

// This is to prevent any jQuery code from running before the document is finished loading (is ready).


$(function(){
  var sstop = $("#footer").offset().top;
  console.log(sstop);
  var scrollLink = $(".nav-link");
  scrollLink.click(function(e) {
  e.preventDefault();
    // console.log(scrollLink.offset().top);

  $("body,html").animate({
    scrollTop: $(this.hash).offset().top


  }, 1000 );//for soomth link location


  });




  // taking navbar height so that slider or carousel will start after its height
  var top_margin = $("#navbar").outerHeight();
  $("#carouselExampleCaptions").css("margin-top",top_margin+"px");





  // animate navbar when the galary offset
  $(window).scroll(function(){
    
      $("nav").css("transition","500ms ease-in-out");
      //getting the offset height of galary from top
       var galheight = $("#galary").offset().top;
       //add navigation height for better display
       var totalgalheight = galheight - $("#navbar").outerHeight()
      //  getting the offset height of window
       var winheight = $(window).scrollTop();
     if(winheight >= totalgalheight ){
      $("nav").addClass("animateBar");
      $("nav").removeClass("bg-white");
      // back to top
      $("#backtotop").css("bottom","1.2rem")
    }
    else{
      $("nav").addClass("bg-white");
      $("nav").removeClass("animateBar");
      // back to top
      $("#backtotop").css("bottom","-5.2rem")
    }

    // animation navigation bar ended


    // going to the selected location with highlithing
    var scrollbarLocation = $(this).scrollTop();
    scrollLink.each(function() {
      var sectionOffset = $(this.hash).offset().top - 20; 
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });//ending of this scrolllink function



  
      // scroll to top
 
   });//ending of window.scroll event

   $("#backtotop").click(function(){
    var sstop = $("#footer").offset().top;
console.log(sstop);
  $('body,html').animate({
    scrollTop: 0
  }, 1000 );
});//end of back to top

    
  });//ending of jquery ready function