// // Load RSS Through Google as JSON using jQuery //


//     function displaySkiReport (feedResponse) {

//     // Get ski report content strings
//     var itemString = feedResponse.entries[0].content;
//     var publishedDate = feedResponse.entries[0].publishedDate;

//     // Clean up strings manually as needed
//     itemString = itemString.replace("Primary: N/A", "Early Season Conditions");
//     publishedDate = publishedDate.substring(0,17);

//     // Parse ski report data from string
//     var itemsArray = itemString.split("/");


//     //Build Unordered List
//     var html = '<h2>' + feedResponse.entries[0].title + '</h2>';
//     html += '<ul>';

//     html += '<li>Skiing Status: ' + itemsArray[0] + '</li>';
//     // Last 48 Hours
//     html += '<li>' + itemsArray[1] + '</li>';
//     // Snow condition
//     html += '<li>' + itemsArray[2] + '</li>';
//     // Base depth
//     html += '<li>' + itemsArray[3] + '</li>';

//     html += '<li>Ski Report Date: ' + publishedDate + '</li>';

//     html += '</ul>';

//     $('body').append(html);

//     }


//     function parseRSS(url, callback) {
//       $.ajax({
//     url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
//     dataType: 'json',
//     success: function(data) {
//         console.log(data);

//       callback(data.responseData.feed);
//     }
//       });
//     }

//     $(document).ready(function() {





//         // Ski report
//         parseRSS("http://www.onthesnow.com/michigan/boyne-highlands/snow.rss", displaySkiReport);

//     });

$(document).ready(function(){




  var x=21; // your X iteration limit

  // load the xml data. it is parsed by jquery
  $.get("https://insajder.net/sr/feed/", function(data) {
      var $xml = $(data);

         var patt= /koron|policijski čas|vanredno stanje|vanrednog stanja|policijsskog časa|policijskom času|vanrednom stanju|epidemij/gi;


      $xml.find("item").each(function(i, val) { // find the items in the rss and loop

          // create an item object with all the necessary information out of the xml
          var $this = $(this),
              item = {
                  title: $this.find("title").text(),
                  link: $this.find("link").text(),
                  description: $this.find("description").text(),
                  pubDate: $this.find("pubDate").text(),
                  author: $this.find("author").text(),
                  guid: $this.find("guid").text(),
                  // content: $this.find("*", "encoded").text()
          };
          item.title = item.title.replace("<![CDATA[", "").replace("]]>", "");


          if(patt.test(item.title)){
            $('#feed').append($('<li class="dot my-4"><p><a class="text-white" href="' +item.guid +'">' +item.title +'</a><span class="text-cta"> &#187;</span></p></li>'));

          }else{
            return;
            // content = false;
          }
          // console.log(content);

          // replace the CDATA in the item title

          // #feed selects the ul element with the id feed
          // and append() appends a newly created li element
          // to the ul

          return i<(x-1); // (stop after x iterations)
      });
  });
  });