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
      $("#author").html('"  ' + data.quoteAuthor + '"');
   });

   //refresh button ..... it loops through all the quotes or rather it increments per loop.... need to fix
   $("#refreshBtn").on("click", function(){
     getQuote();
   });
 //attempts - 4
   $(".twitter-share-button").click(function(){
      window.open('https://twitter.com/intent/tweet?text=' + $("#quote").text()+ " " + $("#author").text());
      //'http://twitter.com/intent/tweet?text=' + ('#quote').text + ('#author').text);
    });
//I made this work now, I have to go to bed.  

  };
});
// this is tedious

//this is the HTML
/*
<a class="twitter-share-button" href="http://twitter.com/share" target="_blank">
     <button type="button" class="btn btn-primary">Tweet this!</button>
    </a>
*/

// this is the JS
/*
$(".twitter-share-button").click(function(){
   $(this).attr("href", 'https://twitter.com/intent/tweet?text=' + randomQuote);
 });
*/
