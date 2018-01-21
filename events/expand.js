  $(document).ready(function(){

    
    
    var nav = $("#nav");

    $.each(events,function(name,v){ 
      html = '<li class="nav-item'+(name==category?" active":"")+' px-lg-4"> <a class="nav-link text-uppercase text-expanded" href="'+name+'.html">'+v.category+(name==category?'<span class="sr-only">(current)</span>':'')+'</a> </li>';
      nav.append(html)
    });
    
    

    var posts = events[category].events;
    var html = "";
    var section = $("#events");
    $.each(posts, function( name,post ) {
      html = '<section class="page-section clearfix hideme"> <div class="container"> <div class="intro"> <div class="intro-text left-0 text-center bg-faded p-5 rounded"> <h2 class="section-heading mb-4"> <span class="section-heading-lower">'+post.name+'</span>';
      html += post.title == ""?"":'<span class="section-heading-upper">'+post.title+'</span>';
      html += post.prize == ""?"":'<span class="section-heading-prize">'+post.prize+'</span>';
      html += ' </h2> <p class="mb-3">'+post.contact+' </p> <div class="intro-button mx-auto"> <a class="btn btn-primary btn-xl" href="https://goo.gl/forms/uECQ6jCU38nkZoIQ2">Register</a> </div> </div> <a href="img/'+post.image+'" target="_blank"><img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src="img/'+post.image+'" alt=""></a> </div> </div> </section>';
      section.append(html);
    });
  

    $(window).scroll( function(){
      var bottom_of_window = $(window).scrollTop() + $(window).height() *0.9;
      $('.hideme').each( function(i){
            var bottom_of_object = $(this).offset().top;
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
              $(this).animate({'opacity':'1','top':0},800);
            }
          }); 
    });
    $(window).scroll();

  });   