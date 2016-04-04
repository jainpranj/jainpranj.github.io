$('#search').keyup(function() {
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, "i");
	$.getJSON('data.json', function(data) {
		var output = '<ul class="searchresults">';
		$.each(data, function(key, val) {
			if ((val.name.search(myExp) != -1) ||
			(val.bio.search(myExp) != -1)) {
				output += '<li>';
				output += '<h2>'+ val.name +'</h2>';
				output += '<img src="images/designer/'+ val.shortname +'_tn.jpg" alt="'+ val.name +'" />';
				output += '<p>'+ val.bio +'</p>';
				output += '</li>';
			}
		});
		output += '</ul>';
		$('#update').html(output);
	}); //get JSON
});
$('#login').submit(function() {
	var enteredEmailID = $('#emailID').val();

    var enteredPassword = $('#password').val();
	$.getJSON('login.json', function(data) {
		$.each(data, function(key, val) {
            alert(val);
			if ((val.emailID.search(enteredEmailID) != -1) &&
			(val.password.search(enteredPassword) != -1)) {
alert("logged in successfully");
             $("#login").prop('action','index.html');
                $('#login').submit();
			}
            else{
                alert("password woring");
            }
		});


	}); //get JSON
});
$('document').ready(function() {
	$.getJSON('data.json', function(data) {
		var output = '<ul class="searchresults">';
		$.each(data, function(key, val) {
				output += '<li>';
				output += '<h2>'+ val.name +'</h2>';
				output += '<img src="images/designer/'+ val.shortname +'_tn.jpg" alt="'+ val.name +'" />';
				output += '<p>'+ val.bio +'</p>';
				output += '</li>';
			}
		);
		output += '</ul>';
		$('#update').html(output);
	}); //get JSON
});
