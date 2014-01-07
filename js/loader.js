function run_ruby( src ){
  var el;

  src = src.replace(/^\s+/gm, '');
  src = src.replace(/\$\(/g,'jQuery(');

  el = $('<pre><code class="language-ruby"></code></pre>');
  el.find('code').text( src );

  $('article').append( '<hr/>' );
  $('article').append( el );

  if ( hljs ){ hljs.highlightBlock( el[0] ); }

  execute( src );
}

$(document).ready(function() {

  $('script[type="application/ruby"]').each(function( idx, script ){
    $script = $(script);

    if( $script.attr('src') ){
      $.ajax({
        url: $script.attr('src'),
        success: run_ruby
      });
    } else {
      var s;
      s = $script.text();
      run_ruby( s );
    }
  });

});