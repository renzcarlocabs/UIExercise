'use strict';
  $(function() {
        $(".one.nav.nav-tabs li a").on("click", function(e){
          $(".one.nav.nav-tabs li").removeClass("active").addClass("inactive");
          $(this).parent("li").addClass("active").removeClass("inactive");
          e.preventDefault();
        });

      $(".two.nav.nav-tabs li a").on("click", function(e){
          $(".two.nav.nav-tabs li").removeClass("active").addClass("inactive");
          $(this).parent("li").addClass("active").removeClass("inactive");
          e.preventDefault();
        });

        $("#showAnimation").click(function(){
          $(".alert").toggleClass("show-alert hide-alert");

          if($(".alert").hasClass("show-alert"))
            $(this).text("Hide");
          else
            $(this).text("Show");
        });
      

















      })
    