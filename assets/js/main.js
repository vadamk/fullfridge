var navbarHeight = 50;

$(function() {

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$("#ModalForm form").submit(function() { //Change
	var th = $(this);
	var vals = th.serializeArray();

	if (vals[0].value != "" && vals[1].value != "" && vals[2].value != "") {
	
		console.log(vals)

		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize(),
		}).done(function() {
			alert("Thank you!\nWe will definitely contact you in the near future.");
		});
	} else {
		$("#ModalForm").modal('hide');
		alert("Name and e-mail is a required field!")
	}

  return false;
});

$('.faq-list li .collapse').on('show.bs.collapse', function () {
  $('.faq-list li a[href=#'+$(this).attr("id")+'] .close-icon').addClass('open')
})

$('.faq-list li .collapse').on('hide.bs.collapse', function () {
  $('.faq-list li a[href=#'+$(this).attr("id")+'] .close-icon').removeClass('open')
})

function changeFormTypeValue(v) {
	document.getElementById('ModalFormType').value = v;
}

$(document).on("click", ".btn-clear", function(e) {

	e.preventDefault();

	var speed = 600;
	var target = $(this).attr("href");
	var st = $(target).offset().top - navbarHeight;

	$('html,body').stop().animate({scrollTop: st}, speed);
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
