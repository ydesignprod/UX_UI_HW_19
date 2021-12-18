

console.log("You index.js file is loaded correctly!");

console.log("Hello world!");

$("#BackgroundImageToggle").on("click", function(){
	//console.log("You clicked on #ParagraphJS");
	$("#BackgroundImageToggle").fadeToggle("slow");
})


$( "h3" ).hover(
  function() {
    $( this ).append( $( "<span> *</span>" ) );
  },
  function() {
    $( this ).find( "span" ).last().remove();
  }
);