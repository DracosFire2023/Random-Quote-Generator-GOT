


$(document).ready(function() {
  $.ajaxSetup({
    cache: true
  });
  
  $("#getQuote").on("click", function() {
    $.getJSON("https://got-quotes.herokuapp.com/quotes", function(a) {

      quote = (a.quote + "<br>" + " - " + a.character);
      $(".quote").html(quote)
      var tweetQuote = (a.quote + " " + "-" + " " + a.character);
      console.log(tweetQuote);
      $("#tweet").attr('href', "https://twitter.com/intent/tweet?text=" + tweetQuote)
    });
  });

});