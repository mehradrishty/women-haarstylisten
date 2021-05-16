(function($){
  $(function(){

   
    document.addEventListener('DOMContentLoaded', function() {
      var options ={};
      // var elems = document.querySelectorAll('.collapsible');
      // var instances = M.Collapsible.init(elems, options);
    });
  
    // Or with jQuery
  
    $(document).ready(function(){      

      $('.carousel.carousel-slider').carousel({
        dist: 0,
        padding: 0,
        fullWidth: true,
        duration: 100,
      });

      autoplay()
      function autoplay() {
        $('.carousel.carousel-slider').carousel('next');
        setTimeout(autoplay, 7000);
      }
      
      $('.sidenav').sidenav();
      $('.parallax').parallax();
      $('.collapsible').collapsible();
      $('.customer-logos').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
          breakpoint: 768,
          settings: {
            slidesToShow: 4
          }
        }, {
          breakpoint: 520,
          settings: {
            slidesToShow: 3
          }
        }]
      });
      //$('.parallax-container-custom1').css('min-height', $(window).height()-150+'px');
      $('.parallax-container-custom2').css('min-height', $(window).height()+'px');
       $('.parallax-container-custom').css('min-height', $(window).height()-20+'px');
      // $('.carousel').css('min-height', $(window).height()-20+'px');
      // $('.carousel.carousel-slider img').css('height', $(window).height()-20+'px');
      $('.carousel.carousel-slider').carousel({
        fullWidth: true
      });
      
      // setTimeout(setCss, 20);
      function setCss(){
        $('.slider').css('height', ($('.slick-list').height())+20 + 'px');    
      }
      setTimeout(loadMapScenario, 2000);
      function loadMapScenario() {
        var loc1 = new Microsoft.Maps.Location(50.586583, 8.672048);

        var navigationBarMode1 = Microsoft.Maps.NavigationBarMode;
        var map1 = new Microsoft.Maps.Map(document.getElementById('myMap'), {
            credentials: 'Ai10lp6eqf6II3i3m9DdC3JsPEyPV_Dmxa6VD_qTV1XGf4gVflqcXPMpQNcUJMFa',
            navigationBarMode: navigationBarMode1.compact, //uncomment to show/hide compact navigation bar
            center: loc1,
            zoom: 16,
        });
    }
    
			new AnimOnScroll( document.getElementById( 'grid' ), {
				minDuration : 0.4,
				maxDuration : 0.7,
				viewportFactor : 0.2
      } );
      $(function(){ //wait for document to load ready 
 
        $('a[href^="#"]').click(function(e){ //select anchor links that start with #
          if($(this).attr('id')=="menuButton") return true;
          e.preventDefault(); //prevent normal jump to anchor action         
          if ($(this).attr('href') == "#closeSideNav") {
            var elem = document.querySelectorAll('.sidenav')[0];
            var instance = M.Sidenav.getInstance(elem);
            instance.close();
            return false;
          }
         
        var elementpos= $($(this).attr('href')).offset().top - 23; //get position of element to scroll to.
         
        var speed = 300; //time, in milliseconds, for the scroll action to complete. 
         
        $('html, body').animate({scrollTop: elementpos+ 'px'}, speed); //animate the scroll.
        var elem = document.querySelectorAll('.sidenav')[0];
        var instance = M.Sidenav.getInstance(elem);
        instance.close();
        });
        });      
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
