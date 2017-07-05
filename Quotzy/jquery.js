$(document).ready(function()
{ 
    var currentQuote;
    var currentAuthor;

    getQuote();
    // createTweetButton();
    $("#nextButton").on("click", function(){
        getQuote();
    });

    $("#tweetButton").on("click", function(){
        sendTweet();
    })

    function getQuote () 
    {

        $.ajax(
        {

            url: 'https://andruxnet-random-famous-quotes.p.mashape.com/', // The URL to the API. You can get this in the API page of the API you intend to consume
            type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
            data: {}, // Additional parameters here
            dataType: 'json',
            success: function(data) { 
                //console.dir((data.source)); 
                console.log(data);
                addQuote(data)
            },
            error: function(err) { alert(err); },
            beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "bgl70dPWrDmshtba1LMO0KuWFf00p1bHW9QjsnboAloLdqdcae"); // Enter here your Mashape key
            }
            
        });

    }

    function sendTweet() {
        $("#tweetButton")
        .attr({"href":"https://twitter.com/intent/tweet?hashtags=quotes%2Cquotzy&related=freecodecamp&text='" + encodeURIComponent('"' + currentQuote + '"' + currentAuthor),
         "target": "_blank"});
        console.log("The quote is : " + currentQuote + " by " + currentAuthor); 
    }

    function addQuote (newQuote) 
    { 
        $("#quote").fadeOut("slow", function () {
            currentQuote = newQuote.quote;
            currentAuthor = newQuote.author;
            var html = "<p id='theQuote'> <i class='fa fa-quote-left fa-1x' aria-hidden='true'></i> "+ currentQuote + " </p> <p class = 'author text-right'> " + currentAuthor + "</p>";
            $("#quote").html(html).fadeIn("slow");
        });
        
        // console.log(newQuote);
        
    }

});

