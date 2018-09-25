function getWindowInnerWidth(){return $(window).innerWidth()}function PageLoad(){function e(e,t,o,a){var n=o-t,i=t,s=o>t?1:-1,r=Math.abs(Math.floor(a/n)),l=$(e),c=setInterval(function(){i+=s,$(l).text(i),i==o&&clearInterval(c)},r)}$("body").removeClass("hidden"),TweenMax.to($(".preloader-text"),1,{force3D:!0,opacity:1,y:0,delay:.2,ease:Power3.easeOut}),TweenMax.set($("#hero-bg-wrapper"),{opacity:1,scale:1.05}),TweenMax.set($("#showcase-holder"),{opacity:1});var t=window.performance.timing,o=-(t.loadEventEnd-t.navigationStart),a=70*parseInt(o/500%50);e($("#precent"),0,100,a),setTimeout(function(){TweenMax.to($(".percentage, .preloader-text"),.7,{force3D:!0,opacity:0,yPercent:-101,ease:Power3.easeInOut}),TweenMax.to($(".preloader-wrap"),.7,{force3D:!0,yPercent:-101,delay:.2,ease:Power3.easeInOut}),$("body").removeClass("light-content"),$("body").removeClass("transition"),$("#hero").length>0&&$("#hero").addClass("animate"),TweenMax.to($("#hero-bg-wrapper"),.4,{force3D:!0,scale:1,delay:0,ease:Power3.easeOut}),setTimeout(function(){TweenMax.to($("#hero, .menu-info"),.4,{force3D:!0,opacity:1,y:0,delay:.4,ease:Power3.easeOut}),TweenMax.to($("#main-content, .fp-tableCell"),.5,{force3D:!0,opacity:1,y:0,delay:.4,ease:Power2.easeOut}),TweenMax.to($("#main-content, .fp-tableCell"),.5,{force3D:!0,opacity:1,y:0,delay:.4,ease:Power2.easeOut}),TweenMax.set($("#footer-container"),{opacity:1})},300)},a)}function FirstLoad(){function e(e){t(e,"#burger-circle",60),t(e,"#menu-burger",40)}function t(e,t,o){var a=$("#burger-wrapper"),n=a[0].getBoundingClientRect(),i=e.pageX-n.left,s=e.pageY-n.top,r=window.pageYOffset||document.documentElement.scrollTop;TweenMax.to(t,.3,{x:(i-n.width/2)/n.width*o,y:(s-n.height/2-r)/n.width*o,ease:Power2.easeOut})}$("html,body").animate({scrollTop:0},1),$("main").css("background",function(){return $("#page-content").data("bgcolor")}),$(".has-animation").removeClass("animate-in"),$(".item").each(function(){var e=$(this).find(".item-image").data("src");$(this).find(".item-image").css({"background-image":"url("+e+")"}),$(this).find(".item-shadow").prepend($("<img>",{src:e}))}),$(".section").each(function(){var e=$(this).find(".section-image").data("src");$(this).find(".section-image").css({"background-image":"url("+e+")"}),$(this).find(".section-image-mirror").css({"background-image":"url("+e+")"}),$(this).find(".section-shadow").prepend($("<img>",{src:e}))}),$("a.ajax-link").on("click",function(){$("header, #menu-overlay, footer").removeClass("light-content"),setTimeout(function(){TweenMax.to($("#hero, .menu-info, .next-project-info"),.4,{force3D:!0,opacity:0,y:-100,ease:Power2.easeInOut}),TweenMax.to($("#main-content, .fp-tableCell"),.4,{force3D:!0,opacity:0,y:-150,delay:.1,ease:Power2.easeInOut}),TweenMax.to($("#showcase-holder"),.4,{force3D:!0,opacity:0,delay:.1,ease:Power1.easeInOut}),TweenMax.to($("#footer-container"),.4,{opacity:0,ease:Power0.easeNone}),TweenMax.to($("#hero-bg-wrapper"),.2,{opacity:0,ease:Power1.easeInOut})},10)}),$("a.ajax-link-project").on("click",function(){TweenMax.to($("#footer-container"),.3,{opacity:0,ease:Power0.easeNone}),$("body").addClass("transition"),$(".menu-info, .next-project-info").css({opacity:"0"}),$(".section").hasClass("light-content")&&setTimeout(function(){$("body").addClass("light-content")},200)}),$("#open-filters, #sharetheme, .close-page-action").on("click",function(){$(".page-action-overlay").toggleClass("active"),setTimeout(function(){if($(".page-action-overlay").hasClass("active")){TweenMax.to($(".page-action-text"),.4,{force3D:!0,opacity:1,y:0,delay:.2,ease:Power3.easeOut}),TweenMax.to($(".page-action-content"),.4,{force3D:!0,opacity:1,y:0,delay:.25,ease:Power3.easeOut});var e=new TimelineLite;e.set($(".jssocials-share, #filters li"),{y:60,opacity:0}),$(".jssocials-share, #filters li").each(function(t,o){e.to(o,.3,{y:0,opacity:1,delay:.3,ease:Power3.easeOut},.05*t)})}else{var e=new TimelineLite;$(".jssocials-share, #filters li").each(function(t,o){e.to(o,.2,{y:-100,delay:.1,opacity:0,ease:Power1.easeIn},.1*t)}),TweenMax.to($(".page-action-text"),.4,{force3D:!0,opacity:0,y:-100,ease:Power2.easeInOut}),TweenMax.to($(".page-action-content"),.4,{force3D:!0,opacity:0,y:-100,delay:.1,ease:Power2.easeInOut}),setTimeout(function(){TweenMax.set($(".page-action-text"),{y:100}),TweenMax.set($(".page-action-content"),{y:200})},500)}},20)}),$("#burger-circle, #close-menu").on("click",function(){$("header").toggleClass("open"),$("#hero-bg-wrapper").toggleClass("blur"),$("#menu-burger").toggleClass("open"),$("#menu-overlay").toggleClass("active"),setTimeout(function(){if($("#menu-burger").hasClass("open")){TweenMax.to($("#hero, .menu-info, .next-project-info"),.4,{force3D:!0,opacity:0,y:-100,ease:Power2.easeInOut}),TweenMax.to($("#main-content, .fp-tableCell"),.4,{force3D:!0,opacity:0,y:-150,delay:.1,ease:Power2.easeInOut}),TweenMax.to($(".socials-text, .copyright"),.4,{force3D:!0,opacity:0,y:-100,delay:.2,ease:Power2.easeInOut}),setTimeout(function(){TweenMax.set($("#hero, .menu-info, .next-project-info"),{y:100}),TweenMax.set($("#main-content, .fp-tableCell, .socials-text, .copyright"),{y:200})},500);var e=new TimelineLite;e.set($("nav ul li.mp"),{y:60,opacity:0}),$("nav ul li.mp").each(function(t,o){e.to(o,.3,{y:0,opacity:1,delay:.3,ease:Power3.easeOut},.1*t)})}else{var e=new TimelineLite;$("nav ul li.mp").each(function(t,o){e.to(o,.25,{y:-80,opacity:0,ease:Power1.easeIn},.05*t)}),TweenMax.to($("#hero, .menu-info, .next-project-info"),.4,{force3D:!0,opacity:1,y:0,delay:.4,ease:Power3.easeOut}),TweenMax.to($("#main-content, .fp-tableCell"),.4,{force3D:!0,opacity:1,y:0,delay:.45,ease:Power3.easeOut}),TweenMax.to($(".socials-text, .copyright"),.4,{force3D:!0,opacity:1,y:0,delay:.5,ease:Power3.easeOut})}},20)}),$(".main-menu .ajax-link").on("click",function(){var e=new TimelineLite;$("nav ul li.mp").each(function(t,o){e.to(o,.25,{y:-80,opacity:0,ease:Power1.easeIn},.05*t)})}),$("nav li.has-sub > a").on("click",function(){$(this).removeAttr("href");var e=$(this).parent("li");e.hasClass("open")?(e.removeClass("open"),e.find("li").removeClass("open"),e.find("ul").slideUp()):(e.addClass("open"),e.children("ul").slideDown(),e.siblings("li").children("ul").slideUp(),e.siblings("li").removeClass("open"),e.siblings("li").find("li").removeClass("open"),e.siblings("li").find("ul").slideUp())}),$("#burger-wrapper").mouseleave(function(){TweenMax.to(this,.3,{scale:1}),TweenMax.to("#burger-circle, #menu-burger",.3,{scale:1,x:0,y:0})}),$("#burger-wrapper").mouseenter(function(){TweenMax.to(this,.3,{transformOrigin:"0 0",scale:1}),TweenMax.to("#burger-circle",.3,{scale:1.3})}),$("#burger-wrapper").mousemove(function(t){e(t)})}function HeroSection(){function e(){TweenMax.set("#hero-bg-wrapper",{perspective:$("body").width()})}function t(e){o(e,"#hero-bg-image",-0),a(e,"#hero-bg-image",-80)}function o(e,t,o){var a=$("#hero-bg-wrapper"),n=e.pageX-a.offset().left,i=e.pageY-a.offset().top;TweenMax.to(t,1,{rotationY:(n-a.width()/2)/a.width()*o,rotationX:(i-a.height()/2)/a.height()*o})}function a(e,t,o){var a=$("#hero-bg-wrapper"),n=e.pageX-a.offset().left,i=e.pageY-a.offset().top;TweenMax.to(t,1,{x:(n-a.width()/2)/a.width()*o,y:(i-a.height()/2)/a.height()*o})}if($("#hero").length>0){var n,i=document.getElementById("hero-caption");if(window.addEventListener("scroll",function(){n=window.pageYOffset||document.documentElement.scrollTop,$("#hero-styles").hasClass("scale-onscroll")&&(i.style.transform="scale("+(100-n/100)/100+")"),$("#hero-styles").hasClass("parallax-onscroll")&&(i.style.transform="translate3d( 0,"+n/-2.5+"px, 0)"),$("#hero-styles").hasClass("opacity-onscroll")&&(i.style.opacity=1-n/15/20)}),$("#project-nav ").length>0&&($("#main-page-content").addClass("padding-below"),$(window).on("scroll",function(){$(window).scrollTop()+$(window).height()>$(document).height()-40?($("#main-page-content.padding-below").addClass("fade-out"),$("#project-nav").addClass("fade-in")):($("#main-page-content.padding-below").removeClass("fade-out"),$("#project-nav").removeClass("fade-in"))})),$("#hero-bg-wrapper").length>0){$("#main-page-content").css({opacity:"0"}).addClass("padding-above");var s;$(window).resize(e),e(),$("#hero").mousemove(function(e){s&&clearTimeout(s),setTimeout(t.bind(null,e))}),$("#hero-bg-image").hasClass("light-content")&&($("#hero-caption").addClass("light-content").addClass("animate"),setTimeout(function(){$("header, #menu-overlay, footer").addClass("light-content")},300)),setTimeout(function(){$(window).scroll(function(){var e=$(window).scrollTop();e>=250?$("#hero-bg-wrapper, .scroll-down-wrap").addClass("fade-out"):$("#hero-bg-wrapper, .scroll-down-wrap").removeClass("fade-out"),e>=300?($("#main-page-content").addClass("fade-in"),$("#main-content").css("z-index",5)):($("#main-page-content").removeClass("fade-in"),$("#main-content").css("z-index",1)),$("#hero-bg-image").hasClass("light-content")&&(e>=250?$("header, footer, #menu-overlay").removeClass("light-content"):$("header, footer, #menu-overlay").addClass("light-content"))})},600)}}}function LazyLoad(){$("body").removeClass("hidden"),setTimeout(function(){$("body").removeClass("light-content"),$("body").removeClass("transition")},500),setTimeout(function(){$("#hero").length>0&&$("#hero").addClass("animate")},250),TweenMax.to($("#hero, .menu-info"),.4,{force3D:!0,opacity:1,y:0,delay:.4,ease:Power3.easeOut}),TweenMax.to($("#main-content, .fp-tableCell, #showcase-holder"),.5,{force3D:!0,opacity:1,y:0,delay:.5,ease:Power2.easeOut}),TweenMax.to($("#hero-bg-wrapper"),.4,{opacity:1,ease:Power1.easeInOut}),TweenMax.to($("#footer-container"),.4,{opacity:1,delay:.6,ease:Power1.easeInOut})}function AjaxLoad(){jQuery(document).ready(function(){function e(e,i){a=!0,$("body").addClass("page-is-changing"),$(".cd-cover-layer").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){t(e,i),n=e,$(".cd-cover-layer").off("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend")}),o()||(t(e,i),n=e)}function t(e,t){e=""==e?"index.html":e;var n=$('<div class="cd-main-content "></div>');n.load(e+" .cd-main-content > *",function(i){FullPageDestroy(),$("main").html(n);var s=i.match(/<title[^>]*>([^<]+)<\/title>/)[1];$("head title").html(s);var r=o()?30:0;setTimeout(function(){$("body").removeClass("page-is-changing"),$(".cd-cover-layer").one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",function(){a=!1,$(".cd-cover-layer").off("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend")}),ga("set","page","/"+e),ga("send","pageview"),FirstLoad(),HeroSection(),FullPage(),LazyLoad(),MasonryPortfolio(),NextProject(),Sliders(),FooterAppear(),Lightbox(),AppearIteam(),BackToTop(),ContactForm(),CollagePlus(),PageShare(),ContactMap(),o()||(a=!1)},r),e!=window.location&&t&&window.history.pushState({path:e},"",e)})}function o(){return $("html").hasClass("csstransitions")}var a=!1,n="";firstLoad=!1,$("main").on("click",'[data-type="page-transition"]',function(t){t.preventDefault();var o=$(this).attr("href");a||e(o,!0),firstLoad=!0}),$(window).on("popstate",function(){if(firstLoad){var t=location.pathname.split("/"),o=t[t.length-1];a||n==o||e(o,!1)}firstLoad=!0})})}function FullPageDestroy(){$("#showcase-slider").length>0&&$("#showcase-slider").fullpage.destroy("all")}function FullPage(){$("#showcase-slider").length>0&&($("#showcase-slider").fullpage({navigation:!1,onLeave:function(e,t,o){$(this);e&&"down"===o?($(".section").removeClass("reverse"),$(".section").find(".sa-one, .sa-two, .sa-three, .sa-four").css({transform:"translateY(15vh)",opacity:"0"}),$(this).find(".sa-one, .sa-two, .sa-three, .sa-four").css({transform:"translateY(-10vh)",opacity:"0"}),$(this).next(".section").find(".sa-one, .sa-two, .sa-three, .sa-four").css({transform:"translateY(0px)",opacity:"1"}),$(".section").find(".section-image").css({transform:"translateX(30px)"}),$(this).find(".section-image").css({transform:"translateX(-30px)"}),$(this).next(".section").find(".section-image").css({transform:"translateX(0px)"}),$(".section").find(".section-image-mirror").css({transform:"translateX(-30px)"}),$(this).find(".section-image-mirror").css({transform:"translateX(30px)"}),$(this).next(".section").find(".section-image-mirror").css({transform:"translateX(0px)"})):e&&"up"===o&&($(".section").addClass("reverse"),$(".section").find(".sa-one, .sa-two, .sa-three, .sa-four").css({transform:"translateY(-10vh)",opacity:"0"}),$(this).prev(".section").find(".sa-one, .sa-two, .sa-three, .sa-four").css({transform:"translateY(0px)",opacity:"1"}),$(this).find(".sa-one, .sa-two, .sa-three, .sa-four").css({transform:"translateY(15vh)",opacity:"0"}),$(".section").find(".section-image").css({transform:"translateX(-30px)"}),$(this).find(".section-image").css({transform:"translateX(30px)"}),$(this).prev(".section").find(".section-image").css({transform:"translateX(0px)"}),$(".section").find(".section-image-mirror").css({transform:"translateX(30px)"}),$(this).find(".section-image-mirror").css({transform:"translateX(-30px)"}),$(this).prev(".section").find(".section-image-mirror").css({transform:"translateX(0px)"})),TweenMax.to($(".socials-text, .copyright"),.4,{force3D:!0,opacity:0,delay:0,ease:Power1.easeOut})},afterLoad:function(){getWindowInnerWidth()>1024&&VanillaTilt.init(document.querySelector(".active .img-perspective"),{max:3,perspective:1e3,reverse:!0,speed:400,easing:"linear"}),$(".section.active").hasClass("last-slide")?($("footer").addClass("visible"),TweenMax.to($(".socials-text, .copyright"),.4,{force3D:!0,opacity:1,delay:.2,ease:Power1.easeOut})):($("footer").removeClass("visible"),TweenMax.to($(".socials-text, .copyright"),.4,{force3D:!0,opacity:0,delay:0,ease:Power1.easeOut}))}}),$("#prev-slide").on("click",function(){$.fn.fullpage.moveSectionUp()}),$("#next-slide").on("click",function(){$.fn.fullpage.moveSectionDown()}))}function MasonryPortfolio(){function e(){var e=a.height(),t=a.scrollTop(),n=t+e;$.each(o,function(){var e=$(this),o=e.outerHeight(),a=e.offset().top,i=a+o+130;i>=t&&a<=n?(e.addClass("in-view"),e.find(".item-content").css({transform:"translateY(0px)",opacity:"1"})):i>=t?(e.removeClass("in-view"),e.find(".item-content").css({transform:"translateY(20vh)",opacity:"0"})):a<=n&&(e.removeClass("in-view"),e.find(".item-content").css({transform:"translateY(-20vh)",opacity:"0"}))})}if($("#portfolio-wrap").length>0){var t=$("#portfolio");t.isotope({layoutMode:"packery",itemSelector:".item",gutter:0,transitionDuration:"0.5s"}),$("#filters a").on("click",function(){$("#filters a").removeClass("active"),$(this).addClass("active"),$(".item").addClass("item-margins");var e=$(this).attr("data-filter");return t.isotope({filter:e}),!1}),$("#filters #all").on("click",function(){$(".item").removeClass("item-margins")}),$(window).on("resize",function(){var e=window.innerWidth;columnNumb=1;var o=$("#portfolio").attr("data-col");if(e>=1466){$("#portfolio-wrap").css({width:$("#portfolio-wrap").parent().width()-500+"px"});var a=$("#portfolio-wrap").width();typeof o!=typeof undefined&&!1!==o?columnNumb=$("#portfolio").attr("data-col"):columnNumb=2,postHeight=window.innerHeight,postWidth=Math.floor(a/columnNumb),t.find(".item").each(function(){"3"===$("#portfolio").attr("data-col")&&$(".item").css({width:postWidth-100+"px",height:1.2*postWidth+"px",margin:"50px"})})}else if(e>1024){$("#portfolio-wrap").css({width:$("#portfolio-wrap").parent().width()-240+"px"});var a=$("#portfolio-wrap").width();columnNumb=3,postWidth=Math.floor(a/columnNumb),t.find(".item").each(function(){$(".item").css({width:postWidth-60+"px",height:1.2*postWidth+"px",margin:"30px"})})}else if(e>767){$("#portfolio-wrap").css({width:$("#portfolio-wrap").parent().width()-200+"px"});var a=$("#portfolio-wrap").width();columnNumb=2,postWidth=Math.floor(a/columnNumb),t.find(".item").each(function(){$(".item").css({width:postWidth-80+"px",height:1.1*postWidth+"px",margin:"40px"})})}else if(e>479){$("#portfolio-wrap").css({width:$("#portfolio-wrap").parent().width()-20+"px"});var a=$("#portfolio-wrap").width();columnNumb=2,postWidth=Math.floor(a/columnNumb),t.find(".item").each(function(){$(".item").css({width:postWidth-60+"px",height:1.1*postWidth+"px",margin:"30px"})})}else if(e<=479){$("#portfolio-wrap").css({width:$("#portfolio-wrap").parent().width()-60+"px"});var a=$("#portfolio-wrap").width();columnNumb=1,postWidth=Math.floor(a/columnNumb),t.find(".item").each(function(){$(".item").css({width:postWidth+"px",height:1.4*postWidth+"px",margin:"0px"})})}return columnNumb}).resize(),$("#all").trigger("click");var o=$(".item"),a=$(window);a.on("scroll resize",e),getWindowInnerWidth()>1024&&VanillaTilt.init(document.querySelectorAll(".item a"),{max:7,perspective:1e3,reverse:!0,speed:400,easing:"linear"})}}function NextProject(){$("#project-nav").length>0&&getWindowInnerWidth()>1024&&VanillaTilt.init(document.querySelectorAll("#project-nav .img-perspective"),{max:7,perspective:1e3,reverse:!0,speed:400,easing:"linear"})}function VirtualScr(){function e(e){var t=this,o=document.documentElement;e=e||window,t.rAF=!1,t.target=0,t.scroll=0,t.animate=function(){t.scroll+=.1*(t.target-t.scroll),Math.abs(t.scroll.toFixed(5)-t.target)<=.47131&&(cancelAnimationFrame(t.rAF),t.rAF=!1),e==window?scrollTo(0,t.scroll):e.scrollTop=t.scroll,t.rAF&&(t.rAF=requestAnimationFrame(t.animate))},e.onmousewheel=function(a){a.preventDefault(),a.stopPropagation();var n=e==window?o.scrollHeight-o.clientHeight:e.scrollHeight-e.clientHeight;t.target+=a.wheelDelta>0?-100:100,t.target<0&&(t.target=0),t.target>n&&(t.target=n),t.rAF||(t.rAF=requestAnimationFrame(t.animate))},e.onscroll=function(){t.rAF||(t.target=e==window?pageYOffset||o.scrollTop:e.scrollTop,t.scroll=t.target)}}new e}function FooterAppear(){$("#page-content").length>0&&$(window).scroll(function(){$(window).scrollTop()>=300?$("#page-action-holder-left, #page-action-holder-right").addClass("is-active"):$("#page-action-holder-left, #page-action-holder-right").removeClass("is-active")});var e=0;$(window).scroll(function(){var t=$(window).scrollTop();t>e?$("#page-action-holder-left, #page-action-holder-right").addClass("is-visible"):t<e&&$("#page-action-holder-left, #page-action-holder-right").removeClass("is-visible"),e=t})}function Sliders(){function e(e){t(e,".prev-testimonial",30),t(e,".owl-prev .fa",20)}function t(e,t,o){var a=$(".owl-prev"),n=a[0].getBoundingClientRect(),i=e.pageX-n.left,s=e.pageY-n.top,r=window.pageYOffset||document.documentElement.scrollTop;TweenMax.to(t,.3,{x:(i-n.width/2)/n.width*o,y:(s-n.height/2-r)/n.width*o,ease:Power2.easeOut})}function o(e){a(e,".next-testimonial",30),a(e,".owl-next .fa",20)}function a(e,t,o){var a=$(".owl-next"),n=a[0].getBoundingClientRect(),i=e.pageX-n.left,s=e.pageY-n.top,r=window.pageYOffset||document.documentElement.scrollTop;TweenMax.to(t,.3,{x:(i-n.width/2)/n.width*o,y:(s-n.height/2-r)/n.width*o,ease:Power2.easeOut})}$(".slider").owlCarousel({loop:!0,margin:500,center:!0,autoHeight:!1,nav:!0,navSpeed:300,items:1}),$(".slider").length>0&&setTimeout(function(){$(".owl-prev").append("<span>Prev</span>"),$(".owl-next").append("<span>Next</span>");var e=document.querySelectorAll(".owl-controls span");window.onmousemove=function(t){for(var o=t.clientX+30+"px",a=t.clientY-30+"px",n=0;n<e.length;n++)e[n].style.top=a,e[n].style.left=o}},50),$(".carousel").owlCarousel({loop:!0,margin:20,autoHeight:!1,navSpeed:600,responsive:{0:{items:1},479:{items:2},1024:{items:3},1466:{items:3}}}),$(".text-carousel").length>0&&($(".text-carousel").owlCarousel({loop:!0,dots:!1,items:1,autoplay:!0,smartSpeed:750,autoHeight:!0,autoplayHoverPause:!0,nav:!0,navText:["<div class='prev-testimonial'></div><i class='fa fa-chevron-left' aria-hidden='true'></i>","<div class='next-testimonial'></div><i class='fa fa-chevron-right' aria-hidden='true'></i>"]}),$(".owl-prev").mouseleave(function(){TweenMax.to(this,.3,{scale:1}),TweenMax.to(".prev-testimonial, .owl-prev .fa",.3,{scale:1,x:0,y:0})}),$(".owl-prev").mouseenter(function(){TweenMax.to(this,.3,{transformOrigin:"0 0",scale:1}),TweenMax.to(".prev-testimonial",.3,{scale:1.3})}),$(".owl-prev").mousemove(function(t){e(t)}),$(".owl-next").mouseleave(function(){TweenMax.to(this,.3,{scale:1}),TweenMax.to(".next-testimonial, .owl-next .fa",.3,{scale:1,x:0,y:0})}),$(".owl-next").mouseenter(function(){TweenMax.to(this,.3,{transformOrigin:"0 0",scale:1}),TweenMax.to(".next-testimonial",.3,{scale:1.3})}),$(".owl-next").mousemove(function(e){o(e)}))}function Lightbox(){$(".image-link").magnificPopup({type:"image",mainClass:"mfp-with-zoom",gallery:{enabled:!0},zoom:{enabled:!0,duration:300,easing:"ease-in-out",opener:function(e){return e.is("img")?e:e.find("img")}}})}function AppearIteam(){setTimeout(function(){$(".has-animation").each(function(){$(this).appear(function(){$(this).delay($(this).attr("data-delay")).queue(function(e){$(this).addClass("animate-in"),e()})})})},250)}function BackToTop(){$("#scrolltotop").on("click",function(){return $("html, body").animate({scrollTop:0},800),!1}),$(".scroll-down-wrap").on("click",function(){return $("html, body").animate({scrollTop:$("#main-content").offset().top+1},700),!1})}function ContactForm(){jQuery("#contact-formular").length>0&&$("#contactform").submit(function(){var e=$(this).attr("action");return $("#message").slideUp(750,function(){$("#message").hide(),$("#submit").attr("disabled","disabled"),$.post(e,{name:$("#name").val(),email:$("#email").val(),comments:$("#comments").val()},function(e){document.getElementById("message").innerHTML=e,$("#message").slideDown("slow"),$("#contactform img.loader").fadeOut("slow",function(){$(this).remove()}),$("#submit").removeAttr("disabled"),null!=e.match("success")&&$("#contactform").slideUp("slow")})}),!1})}function CollagePlus(){$(".collage").length>0&&($.fn.removeSpace=function(){$(this).contents().filter(function(){return 3===this.nodeType}).remove()},$(".collage").removeSpace(),$("#main").waitForImages({finished:function(){$(".collage").collagePlus({targetHeight:510,fadeSpeed:"fast",effect:"default",direction:"vertical",allowPartialLastRow:!0})},waitForAll:!0}))}function PageShare(){$("#share").jsSocials({showLabel:!1,showCount:!1,shares:["facebook","twitter","googleplus","pinterest"]})}function ContactMap(){if(jQuery("#map_canvas").length>0){var e=(new google.maps.LatLng(43.270441,6.640888),{zoom:14,center:new google.maps.LatLng(43.270441,6.640888),mapTypeControl:!1,scrollwheel:!1,draggable:!0,panControl:!1,scaleControl:!1,zoomControl:!1,streetViewControl:!1,navigationControl:!1}),t=[{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]}],o=(google.maps.MapTypeId.ROADMAP,new google.maps.Map(document.getElementById("map_canvas"),e)),a=new google.maps.StyledMapType(t,{name:"Grayscale"});o.mapTypes.set("holver",a),o.setMapTypeId("holver"),google.maps.event.addDomListener(window,"resize",function(){var e=o.getCenter();google.maps.event.trigger(o,"resize"),o.setCenter(e)});var n='<div id="content-map-marker" style="text-align:center; padding-top:10px; padding-left:10px"><div id="siteNotice"></div><h4 id="firstHeading" class="firstHeading" style="color:#000; font-weight:600; margin-bottom:0px;">Hello Friend!</h4><div id="bodyContent"><p color:#999; font-size:14px; margin-bottom:10px">Here we are. Come to drink a coffee!</p></div></div>',i=new google.maps.InfoWindow({content:n}),s=new google.maps.MarkerImage("images/marker.png",new google.maps.Size(58,63),new google.maps.Point(0,0),new google.maps.Point(35,20)),r=new google.maps.LatLng(43.270441,6.640888),l=new google.maps.Marker({position:r,map:o,icon:s,title:"Our Office",zIndex:3});google.maps.event.addListener(l,"click",function(){i.open(o,l)})}return!1}$(document).ready(function(){"use strict";PageLoad(),FirstLoad(),HeroSection(),AjaxLoad(),FullPage(),MasonryPortfolio(),NextProject(),FooterAppear(),Sliders(),Lightbox(),AppearIteam(),BackToTop(),ContactForm(),CollagePlus(),PageShare(),ContactMap()}),$(window).on("load",function(){});