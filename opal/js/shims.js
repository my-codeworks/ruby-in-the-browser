function opal_run( src ){
	var el;

	src = src.replace(/^\s+/gm, '');
	src = src.replace(/\$\(/g,'jQuery(');

	el = $('<pre></pre>');
	el.text( src );
	$('body').append( el );

	Opal.eval( src );

	$('body').append( '<hr/>' );
}

$(document).ready(function() {

	$('script[type="application/ruby"]').each(function( idx, script ){
		$script = $(script);
		if( $script.attr('src') ){
			$.ajax({
				url: $script.attr('src'),
				success: opal_run
			});
		} else {
			var s;
			s = $script.text();
			opal_run( s );
		}
	});

});