// Load RSS Through Google as JSON using jQuery //


    function displaySkiReport (feedResponse) {

    // Get ski report content strings
    var itemString = feedResponse.entries[0].content;
    var publishedDate = feedResponse.entries[0].publishedDate;

    // Clean up strings manually as needed
    itemString = itemString.replace("Primary: N/A", "Early Season Conditions");
    publishedDate = publishedDate.substring(0,17);

    // Parse ski report data from string
    var itemsArray = itemString.split("/");


    //Build Unordered List
    var html = '<h2>' + feedResponse.entries[0].title + '</h2>';
    html += '<ul>';

    html += '<li>Skiing Status: ' + itemsArray[0] + '</li>';
    // Last 48 Hours
    html += '<li>' + itemsArray[1] + '</li>';
    // Snow condition
    html += '<li>' + itemsArray[2] + '</li>';
    // Base depth
    html += '<li>' + itemsArray[3] + '</li>';

    html += '<li>Ski Report Date: ' + publishedDate + '</li>';

    html += '</ul>';

    $('body').append(html);

    }


    function parseRSS(url, callback) {
      $.ajax({
    url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
    dataType: 'json',
    success: function(data) {
        console.log(data);
        
      callback(data.responseData.feed);
    }
      });
    }

    $(document).ready(function() {





        // Ski report
        parseRSS("http://www.onthesnow.com/michigan/boyne-highlands/snow.rss", displaySkiReport);

    });
