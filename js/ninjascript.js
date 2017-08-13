/*This will get the api on click and then will change the quote */
// Random Quote Generator
$(document).ready(function(){

  var randomQuote= "";
  var author;
  getQuote();

  function getQuote(){
    var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";


   $.getJSON(url, function(data){
      $("#quote").html('"' + data.quoteText + ' " ');
      $("#author").html(' - ' + data.quoteAuthor + ' ');
   });

   //refresh button ..... it loops through all the quotes or rather it increments per loop.... need to fix
   //Fixing the on("click") that it no long increments to one.("click"). - Thanks Kenan @Starbucks Fairburn on 28/28/2017
   $("#refreshBtn").one("click", function(){
     getQuote();
   });
 //attempts - 4
   $(".twitter-share-button").click(function(){
      window.open('https://twitter.com/intent/tweet?text=' + $("#quote").text()+ " " + $("#author").text());
      //Found a solution in someone else's code and tweaked it into mine. - hint(I can explain how it works if needed)
    });


  };
});
