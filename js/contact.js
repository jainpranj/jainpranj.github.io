//jQuery(function($) {'use strict',
//
//	var form = $('.contact-form');
//	form.submit(function () {'use strict',
//		$this = $(this);
//		$.post("sendemail.php", $(".contact-form").serialize(),function(result){
//			if(result.type == 'success'){
//				$this.prev().text(result.message).fadeIn().delay(3000).fadeOut();
//			}
//		});
//		return false;
//	});
//
//});

// Google Map Customization
(function(){

	var map;

	map = new GMaps({
		el: '#gmap',
		lat: 42.35,
		lng: -71.06,
		scrollwheel:false,
		zoom: 14,
		zoomControl : false,
		panControl : false,
		streetViewControl : false,
		mapTypeControl: false,
		overviewMapControl: false,
		clickable: false
	});

	var image = 'images/map-icon.png';
	map.addMarker({
	lat: 42.35,
		lng: -71.06,
		// icon: image,
		animation: google.maps.Animation.DROP,
		verticalAlign: 'bottom',
		horizontalAlign: 'center',
		backgroundColor: '#ffffff',
	});

	var styles = [ 

	{
		"featureType": "road",
		"stylers": [
		{ "color": "" }
		]
	},{
		"featureType": "water",
		"stylers": [
		{ "color": "#A2DAF2" }
		]
	},{
		"featureType": "landscape",
		"stylers": [
		{ "color": "brown" }
		]
	},{
		"elementType": "labels.text.fill",
		"stylers": [
		{ "color": "black" }
		]
	},{
		"featureType": "poi",
		"stylers": [
		{ "color": "white" }
		]
	},{
		"elementType": "labels.text",
		"stylers": [
		{ "saturation": 1 },
		{ "weight": 0.1 },
		{ "color": "black" }
		]
	}

	];

	map.addStyle({
		styledMapName:"Styled Map",
		styles: styles,
		mapTypeId: "style_map"  
	});

	map.setStyle("style_map");
}());