$(document).ready(function(){

  getQuote();

  function getQuote(){
    var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

   $.getJSON(url, function(data){
      $("#quote").html('"' + data.quoteText + ' " ');
      $("#author").html(' - ' + data.quoteAuthor + ' ');
   });
  
   $("#refreshBtn").one("click", function(){
     getQuote();
   });
 //attempts - 4
   $(".twitter-share-button").click(function(){
      window.open('https://twitter.com/intent/tweet?text=' + $("#quote").text()+ " " + $("#author").text());
      break; //break needed to kill 
      //Found a solution in someone else's code and tweaked it into mine. - hint(I can explain how it works if needed)
    });


   };
});
