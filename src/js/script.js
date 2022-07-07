$(document).ready(function () {

// Form

	$(".header-form .form-control input, .header-form .form-control textarea"
	).focus(function () {
		$(this).parent().addClass("focused");
	});
	$(
		".header-form .form-control input, .header-form .form-control textarea"
	).blur(function () {
		var txtName = $(this).val();
		if (txtName) {
			$(this).parent().addClass("focused");
		} else {
			$(this).parent().removeClass("focused");
		}
	});
  
});

// PopUpVideo

$(function() {
  $('.popup-youtube').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
  });
});


  

  