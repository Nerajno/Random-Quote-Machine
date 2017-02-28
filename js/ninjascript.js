/*This will get the api on click and then will change the quote */
// Random Quote Generator
$(document).ready(function(){

  var randomQuote= "";
  var author;
  getQuote();

  function getQuote(){
    var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
    //  var url = "http://quotes.stormconsultancy.co.uk/quotes/1.json?callback=my_method";

   $.getJSON(url, function(data){
      $("#quote").html('"' + data.quoteText + '"');
      $("#author").html(' - ' + data.quoteAuthor + '.');
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
