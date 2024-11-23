$("#Header").load("layout/header.html")

$("#Footer").load("layout/footer.html")


// howgroup3slider start
$('.howgroup3slider').slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 4,
  centerMode: true,
  centerPadding: "0",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// howgroup3slider end

$('.tech-img-first img, .tech-img-second img').on('click', function() {
  // Change the main image source to the clicked image's source
  $('.tech-main1').attr('src', $(this).attr('src'));
  
  // If the clicked image is in .tech-img-second, update heading text
  if ($(this).closest('.tech-img-second').length) {
      const headingText = $(this).siblings('h5').text();
      $('.tech-heading h2').text(headingText);
  } else {
      // Reset the heading text if it's from tech-img-first
      $('.tech-heading h2').text('One Technology');
  }
});


$(window).on('load', function () {
  var str = location.href.toLowerCase();
  var isActiveSet = false; // Flag to check if an active menu item is found

  $("#act>li>a").each(function () {
    var thisHref = this.href.toLowerCase();
    if (str.indexOf(thisHref) > -1) {
      $("#act li a.active").removeClass("active");
      $(this).parent().addClass("active");
      isActiveSet = true; // Set the flag to true if a matching URL is found
    }
  });

  // If no menu item is active, set the Home link as active by default
  if (!isActiveSet) {
    $("#act li a.home").parent().addClass("active");
  }
});

// let totalSeconds = 6 * 60 * 60; // 6 hours in seconds

// function startCountdown() {
//     const hoursElement = document.getElementById('hours');
//     const minutesElement = document.getElementById('minutes');
//     const secondsElement = document.getElementById('seconds');

//     const interval = setInterval(() => {
//         const hours = Math.floor(totalSeconds / 3600);
//         const minutes = Math.floor((totalSeconds % 3600) / 60);
//         const seconds = totalSeconds % 60;

//         hoursElement.innerText = String(hours).padStart(2, '0');
//         minutesElement.innerText = String(minutes).padStart(2, '0');
//         secondsElement.innerText = String(seconds).padStart(2, '0');

//         if (totalSeconds <= 0) {
//             clearInterval(interval);
//         }
//         totalSeconds--;
//     }, 1000);
// }

// startCountdown();



// eventsslider start
$('.eventsslider').slick({
  dots: true,
  arrows:false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

var $slider = $('.eventsslider');
var $progressBar = $('.progress3');
var $progressBarLabel = $('.slider__label');

$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

    $progressBar
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc);

    $progressBarLabel.text(calc + '% completed');
});


// eventsslider end


// blogslider start
$('.blogslid').slick({
  dots: true,
  arrows:true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// blogslider end

// product slider jas start

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
// product slider jas end

// simple slick slider start
$(".regular").slick({
  dots: true,
  infinite: true,
  speed:300,
  autoplay:true,
  slidesToShow: 3,
  slidesToScroll: 3
});

// simple slick slider end

// wow animation js 

$(function () {
    new WOW().init();
  });


// responsive menu js 

$(function () {
  $('#menu').slicknav();
});



// slick slider in tabs js start

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += "active";
}


// slick slider in tabs js end



// search button js

(function ($) {	

	$.fn.searchBox = function(ev) {

		var $searchEl = $('.search-elem');
		var $placeHolder = $('.placeholder');
		var $sField = $('#search-field');

		if ( ev === "open") {
			$searchEl.addClass('search-open')
		};

		if ( ev === 'close') {
			$searchEl.removeClass('search-open'),
			$placeHolder.removeClass('move-up'),
			$sField.val(''); 
		};

		var moveText = function() {
			$placeHolder.addClass('move-up');
		}

		$sField.focus(moveText);
		$placeHolder.on('click', moveText);
		
		$('.submit').prop('disabled', true);
		$('#search-field').keyup(function() {
	        if($(this).val() != '') {
	           $('.submit').prop('disabled', false);
	        }
	    });
	}	

}(jQuery));

$('.search-btn').on('click', function(e) {
	$(this).searchBox('open');
	e.preventDefault();
});

$('.close').on('click', function() {
	$(this).searchBox('close');
});


