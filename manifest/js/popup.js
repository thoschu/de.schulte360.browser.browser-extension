 /**
 * Created by Tom S.
 */
 (function(){
     $( "#content" ).load( "http://188.68.54.193:3000/login", function() {
         console.log( "Load was performed." );
     });


     // $.get( "http://188.68.54.193:8080/api/v2.0/machine", function( data ) {
     //     $( "#content" ).html( data );
     //     alert( "Load was performed." );
     // });


 })();