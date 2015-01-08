$(function() {
	console.log('right page..');
	lat = 0;
	longi = 0;

	myLocation = '';

	$('#findEvent').click(function() {
		window.location.href = "/explore.html";
	});

	$('#createEvent').click(function() {
		$('#welcome').hide();
		if (lat == 0 && longi == 0)
			getLocation();
		else{
			$('#overlay').show();
			$('#modalCreate').slideDown(500);
			modalHere = true;
			$('#closeModal').show();
			$('#eName').focus();
		}
	});
	$('#overlay').click(function() {
		if (modalHere){
			$('#welcome').show();
			$('#closeModal').hide();
			$('#modalCreate').hide('drop');
			modalHere = false;
		}
	});
	$('#closeModal').click(function() {
		if (modalHere){
			$('#welcome').show();
			$(this).hide();
			$('#closeModal').hide();
			$('#modalCreate').hide('drop');
			modalHere = false;
		}

	})

	/*handle creation of new page*/
	$("#eventForm").submit(function(e) {
		e.preventDefault();
		console.log('hey');

		eName = $('#eName').val();
		eDetails = $('#eDetails').val();
		adminPass = $('#adminPass').val();
		eventPass = $('#eventPass').val();

		Parse.initialize("5ai5K40eruZd75H1e7DJKm9yFflPDcrY4p8CBhYz", "7ZPkok5QEJePRza2GmHIu7l7HZBRpLcygrGODbAr");

		// create NewEvent subclass
		var NewEvent = Parse.Object.extend("NewEvent");
		// create instance of NewEvent object
		var newEvent = new NewEvent();
		var eventLoc = new Parse.GeoPoint(lat, longi);
		console.log("geopt object is: " + eventLoc);
		
		var parseEvent = newEvent.save(
			{name: eName, details: eDetails, eventlocation: eventLoc, adminPass: adminPass, eventPass: eventPass},
			{
				success:function(object) {
					console.log('we made it');
					mostRecent = object.id;
					createPage();

				},
				error:function(model, error) {
					console.log('shucks')
				}
			});

		
	});



/*


var NewEvent = Parse.Object.extend("NewEvent");
var newEvent = new NewEvent();
newEvent.save({penis: "micro",poop: "smelly"}, {
	success: function(object) {
		$(".success").show();
	},
	error: function(model, error) {
		$(".error").show();
	}
});*/
});


function getLocation() {
	console.log('trying to get location...');
	$('#waiting').show();
	$('#overlay').show();

	if (navigator.geolocation) {
		console.log('entered 1st part');
		navigator.geolocation.getCurrentPosition(usePosition);
	} else {
		alert('If you want to create an event, please update your browser. Geolocation services need to be supported.');
	}
	/*navigator.geolocation.watchPosition(function(position) {
		console.log('entered second part');
		$('#waiting').hide();
		$('#modalCreate').slideDown(500);
		modalHere = true;
		$('#closeModal').show();
		$('#eName').focus();
	},
	function(error) {
		if (error.code == error.PERMISSION_DENIED)
		{
			$('#waiting').hide();
			$('#overlay').hide();
			alert('Geolocation is necessary to create an event. Please adjust your browser geolocation settings.');
			locAllowed = false;
			return;
		}
	});*/
}
function usePosition(position) {
	console.log('entered show position fn');
	lat = position.coords.latitude;
	longi = position.coords.longitude;
	console.log('entered second part');
	$('#waiting').hide();
	$('#modalCreate').slideDown(500);
	modalHere = true;
	$('#closeModal').show();
	$('#eName').focus();
}

// create page
/*create new page with all the right html*/
function createPage(){
	$.ajax({
		url: 'createPage.php',
		type: 'POST',
		data: {
			eURL: mostRecent,
			eName: eName,
			eDetails: eDetails,
			adminPass: adminPass,
			eventPass: eventPass
		},
		beforeSend: function() {
			console.log('sending...');
			/*console.log('test');*/
		},
		success: function(data) {
			console.log('send success');
			window.location.href = mostRecent + '.html';

		},
		error: function(e) {
			console.log(e);
		}
	});
}