var Ruby;

Ruby = WEBRUBY();
Ruby.run();

$(document).ready(function() {

	var src, waiting;

	src = [];
	waiting = 0;

	$(document).on('runruby', function(){
		src = src.join("\n");
		src = src.replace( /\$\(/g, 'jQuery(' );

		Ruby.run_source( src );
	});

	$('script[type="application/ruby"]').each(function( idx, script ){
		$script = $(script);
		if( $script.attr('src') ){
			waiting++;
			src[idx] = null;
			$.ajax({
				url: $script.attr('src'),
				success: function( s ){
					src[idx] = s;
					waiting--;
					if( waiting === 0 ){ $(document).trigger('runruby'); }
				}
			});
		} else {
			src[idx] = $script.text();
		}
	});

});