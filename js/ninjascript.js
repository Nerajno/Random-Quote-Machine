/*This will get the api on click and then will change the quote */
// Random Quote Generator
$(document).ready(function(){

  var randomQuote= "";
  var author;
  getQuote();

  function getQuote(){
    var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
   $.getJSON(url, function(data){
      $("#quote").html('"' + data.quoteText + '"');
      $("#author").html('"' + data.quoteAuthor + '"');
   });

   $("#refreshBtn").on("click", function(){
     getQuote();
   });

  };
});
// this is tedious
