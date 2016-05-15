$(function(){
	//alert('halo!');
	//alert(data);

	$('button').click(function(){
		var data = $('input#data').val();

		$.post("proses.php", {angka:data}, function(dataserver){
			//alert(dataserver);
			$('input#data').val(dataserver);

			if(dataserver == 10) {
				$('input#data').hide(5000);
			}

		});

		//alert(data);
		return false;
	});

});

