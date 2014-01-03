$(document).ready(function() {

	var src, waiting;

	src = [];
	waiting = 0;

	$(document).on('runruby', function(){
		src = src.join("\n");
		src = src.replace( /\$\(/g, 'jQuery(' );

		Opal.eval( src );
	});

	$('script[type="application/ruby"]').each(function( idx, script ){
		$script = $(script);
		if( $script.attr('src') ){
			waiting++;
			src[idx] = null;
			$.ajax({
				url: $script.attr('src'),
				success: function( s ){
					//src[idx] = s;
					//waiting--;
					//if( waiting === 0 ){ $(document).trigger('runruby'); }
					$('body').append('<pre>'+s+'</pre>');
					Opal.eval( s );
				}
			});
		} else {
			//src[idx] = $script.text();
			var s;
			s = $script.text();
			$('body').append('<pre>'+s+'</pre>');
			Opal.eval( s );
		}
	});

});