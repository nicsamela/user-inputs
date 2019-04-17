// A $( document ).ready() block.
$( document ).ready(function() {
  console.log( "ready!" );
});

// Binding a named function
function sayHello( event ) {
  alert( "Hello." );
}

$( "#helloBtn" ).on( "click", sayHello );