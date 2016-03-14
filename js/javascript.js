$(document).ready(function() {

	var par = $('#about-des');
	$(par).hide();
	$("#about-lab").click(function() {
		$("#about-des").toggle(500);
		if ($("#about-lab").text() == "+about") {
			$("#about-lab").text("-about")
		} else {
			$("#about-lab").text("+about")
		};

	});

	var dar = $('#resume-des');
	$(dar).hide();
	$("#resume-lab").click(function() {
		$("#resume-des").toggle(500);
		if ($("#resume-lab").text() == "+resume")
			$("#resume-lab").text("-resume")
		else
			$("#resume-lab").text("+resume");
	});

	var car = $('#portfolio-des');
	$(car).hide();
	$("#portfolio-lab").click(function() {
		$("#portfolio-des").toggle(500);
		if ($("#portfolio-lab").text() == "+my work")
			$("#portfolio-lab").text("-my work")
		else
			$("#portfolio-lab").text("+my work");
	});

	var far = $('#contact-des');
	$(far).hide();
	$("#contact-lab").click(function() {
		$("#contact-des").toggle(500);
		if ($("#contact-lab").text() == "+contact")
			$("#contact-lab").text("-contact")
		else
			$("#contact-lab").text("+contact");
	});

	//typewriter effect at the top of the page

	//define text
	var text = 'Hello visitor! Please check out the information below to get to know a little more about me...';

	//text is split up to letters
	$.each(text.split(''), function(i, letter) {
		setTimeout(function() {
			//we add the letter to the container
			$('#top-blurb').html($('#top-blurb').html() + letter);

		}, 100 * i);
	});


});