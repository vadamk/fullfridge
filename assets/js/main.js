var navbarHeight = 50;

$(function() {

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
});

$(document).ready(function() {
			// $("#ModalThx").modal('show');
	// CostCalc();
});

$("#ModalForm form").submit(function() { //Change
	var th = $(this);
	var vals = th.serializeArray();

	if (vals[0].value != "" && vals[1].value != "" && vals[2].value != "") {
	
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize(),
		}).done(function() {
			th[0].reset();
			$("#ModalForm").modal('hide');
			$("#ModalThx").modal('show');
		});
	} else {
		alert("Будь ласка заповніть обов'язкові поля.")
	}

  return false;
});

$("#FooterForm form").submit(function() { //Change
	var th = $(this);
	var vals = th.serializeArray();

	if (vals[0].value != "") {

		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize(),
		}).done(function() {
			th[0].reset();
			$("#ModalThx").modal('show');
		});
	} else {
		alert("Будь ласка заповніть обов'язкові поля.")
	}

  return false;
});

$("#TryForm form").submit(function() { //Change
	var th = $(this);
	var vals = th.serializeArray();

	if (vals[0].value != "" && vals[1].value != "") {

		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize(),
		}).done(function() {
			th[0].reset();
			$("#ModalThx").modal('show');
		});
	} else {
		alert("Будь ласка заповніть обов'язкові поля.")
	}

  return false;
});

$('.faq-list li .collapse').on('show.bs.collapse', function () {
  $('.faq-list li a[href=#'+$(this).attr("id")+'] .close-icon').addClass('open')
})

$('.faq-list li .collapse').on('hide.bs.collapse', function () {
  $('.faq-list li a[href=#'+$(this).attr("id")+'] .close-icon').removeClass('open')
})

// $("#costMonth").keyup(CostCalc);

// function CostCalc() {
// 	var costMonth = document.getElementById("costMonth").value;
// 	var costHour = Math.round(parseInt(costMonth, 10)/22/8);
// 	var costWeek = Math.round(costHour*8)+"-"+Math.round(costHour*10);
// 	document.getElementById('costHour').innerHTML = costHour;
// 	document.getElementById('costWeek').innerHTML = costWeek;
// };

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
