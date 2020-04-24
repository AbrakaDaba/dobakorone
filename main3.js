$("body").css({
    background: "#172031f7",
    opacity: "0"
})
// $(".roto-loader img").animate({
//     width: "200px",
//     height: "200px"
// }, 5000)



window.onload = function () {

    (function () {
        var contentHeights = [];
        var clickedContentArr = [];
        var icons_btns = $('.icon-btn');
        var icons_contents = $(".icon-content");
        var contents_box = $(".icons-contents");

        // TAKING CONTENT HEIGHT
        $(window).resize(function () {

        });

        for (i = 0; i < icons_contents.length; i++) {
            contentHeights.push(icons_contents[i].offsetHeight);
        }
        // REMOVING CONTENT AFTER TAKING THEIR HEIGHTS
        $(".icon-content").css({
            position: "relative",
        })
        console.log(contentHeights)

        // ICONS-BTN-FUNCTION
        function icons_btn_fn(contentHeights) {

            let theIc;
            var mySwitch = false;

            $(".question").on("click", function () {
                $(".icons-contents").css({
                    height: "auto",
                    maxHeight: "auto"
                })
            })




            $('.icon-btn').on("click", function (el) {
                window.scrollTo(0, 0);

                console.log(mySwitch);
                if (clickedContentArr.length > 1) {
                    clickedContentArr.shift();
                }
                theIc = parseInt(el.target.getAttribute("data-index"));
                clickedContentArr.push(theIc);

                if ($(el.target).hasClass("active_icon")) {
                    // IF ACTIVE ICON IS CLICKED
                    clickActiveBtn(el, theIc, mySwitch, contents_box);
                    mySwitch = false;
                } else {

                    if (mySwitch == true) {
                        // IF SOME ICON IS OPENED AND SOME OTHER IS CLICKED
                        oneOpenedAnotherClicked(el, contentHeights, theIc, icons_btns, clickedContentArr, contents_box)

                    } else {
                        // IF THERE IS NO OPEN ICONS AND SOME IS CLICKED
                        firstClick(el, contentHeights, theIc, icons_btns)
                        mySwitch = true;
                        console.log(mySwitch);

                    }
                }

            }).children().on("click", function (e) {
                e.stopPropagation();
                $(e.target).parent().click()
            });



            // IF THERE IS NO OPEN ICONS AND SOME IS CLICKED
            function firstClick(el, contentHeights, theIc, icons_btns) {
                icons_btns[theIc].classList.remove("active_icon");
                $(el.target).addClass("active_icon");
                $("#" + theIc).css({
                    opacity: 1
                })
                $("#" + theIc).slideDown("fast")
                $("#" + theIc).show("fast");
            }

            // IF SOME ICON IS OPENED AND SOME OTHER IS CLICKED
            function oneOpenedAnotherClicked(el, contentHeights, theIc, icons_btns, clickedContentArr, contents_box) {
                for (i = 0; i < icons_btns.length; i++) {
                    icons_btns[i].classList.remove("active_icon");
                }
                $(el.target).addClass("active_icon");

                $(".icons-contents").css({
                    height: $("#" + theIc).outerHeight()
                })
                $("#" + clickedContentArr[0]).css({
                    opacity: 0
                }).slideUp(1)

                $("#" + theIc).slideDown("swing").css({
                    opacity: 1
                });
            }


            // IF ACTIVE ICON IS CLICKED
            function clickActiveBtn(el, theIc, contents_box) {
                console.log(el.target, theIc);

                $(".icons-contents").css({
                    height: "auto",
                    maxHeight: "auto"
                })
                $(el.target).removeClass("active_icon");

                $("#" + theIc).slideUp("fast");

                $(icons_contents).each(function () {
                    $(this).css({
                        transition: "max-height .35s,  opacity .35s"
                    })
                })
            }
        }




        icons_btn_fn(contentHeights)


        //     $.ajax({
        //         url: 'https://ipinfo.io/json',
        //         dataType: 'json',
        //         success: function(res) {

        //           console.log(res.country_code);
        //         }
        //       })
        //     $.getJSON('https://ipinfo.io/', function(result) {
        //   });



        var covid = document.getElementById("covid-results");




        function makingTotalTable(resTotal) {
            var tableTotal = document.getElementById("total-table");
            var tr1 = document.createElement("tr");
            var tr2 = document.createElement("tr");
            tableTotal.appendChild(tr1);
            tableTotal.appendChild(tr2);
            var totalKeys = Object.keys(resTotal);
            console.log(totalKeys);

            for (i = 0; i < totalKeys.length - 3; i++) {
                if (i == 1) {
                    i = 3
                };
                value = totalKeys[i];
                val = value.replace(/(total_)/g, ' ');
                val = val.replace(/["_"]/g, ' ');
                var th = document.createElement("th");
                th.innerText = val;
                tr1.appendChild(th);
                var tdValue = document.createElement("td");
                tdValue.innerText = resTotal[value].toFixed(0).replace(/(\d)(?=(\d{3})+$)/g, "$1,")
                tr2.appendChild(tdValue);
            }
        }


        function makingLocalTable(resLocal) {
            var tableLocal = document.getElementById("local-table");
            var tr1 = document.createElement("tr");
            var tr2 = document.createElement("tr");
            tableLocal.appendChild(tr1);
            tableLocal.appendChild(tr2);
            var totalKeys = Object.keys(results);
            console.log(totalKeys[0]);

            for (i = 0; i < totalKeys.length - 3; i++) {
                if (i == 1) {
                    i = 3
                };
                value = totalKeys[i];
                val = value.replace(/(total_)/g, ' ');
                val = val.replace(/["_"]/g, ' ');
                var th = document.createElement("th");
                th.innerText = val;
                tr1.appendChild(th);
                var tdValue = document.createElement("td");
                tdValue.innerText = resLocal[value].toFixed(0).replace(/(\d)(?=(\d{3})+$)/g, "$1,")
                tr2.appendChild(tdValue);
            }
        }

        ///////////////////////////////////////////////////////////
        ////////// CORS TROUBLE SHOTING /////////////
        ///////////////////////////////
        //////


        //   function createCORSRequest(method, url) {
        //     var xhr = new XMLHttpRequest();
        //     if ("withCredentials" in xhr) {

        //       // Check if the XMLHttpRequest object has a "withCredentials" property.
        //       // "withCredentials" only exists on XMLHTTPRequest2 objects.
        //       xhr.open(method, url, true);

        //     } else if (typeof XDomainRequest != "undefined") {

        //       // Otherwise, check if XDomainRequest.
        //       // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
        //       xhr = new XDomainRequest();
        //       xhr.open(method, url);

        //     } else {

        //       // Otherwise, CORS is not supported by the browser.
        //       xhr = null;

        //     }
        //     return xhr;
        //   }

        //   function getTitle(text) {
        //     return text.match('<title>(.*)?</title>')[1];
        //     console.log(text);

        //   }

        //   // Make the actual CORS request.
        //   function makeCorsRequest() {
        //     // This is a sample server that supports CORS.
        //     var url = 'https://thevirustracker.com/free-api?global=stats';

        //     var xhr = createCORSRequest('GET', url);
        //     if (!xhr) {
        //       alert('CORS not supported');
        //       return;
        //     }

        //     // Response handlers.
        //     xhr.onload = function() {
        //       var text = xhr.responseText;
        //       console.log(text);

        //       var title = getTitle(text);
        //       alert('Response from CORS request to ' + url + ': ' + title);
        //     };

        //     xhr.onerror = function() {
        //       alert('Woops, there was an error making the request.');
        //     };

        //     xhr.send();
        //   }

        //   makeCorsRequest()

        ///////
        //////////////////////////
        ///////////////////////////////////////////
        ////////////////////////////////////////////////////////////
        function getAjaxPriv() {

            let totalAjax = $.ajax({
                type: 'GET',
                url: 'https://thevirustracker.com/free-api?global=stats',
                contentType: 'text/plain',
                // dataType: 'json',
                xhrFields: {
                    // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
                    // This can be used to set the 'withCredentials' property.
                    // Set the value to 'true' if you'd like to pass cookies to the server.
                    // If this is enabled, your server must respond with the header
                    // 'Access-Control-Allow-Credentials: true'.
                    withCredentials: false
                },
                headers: {
                    // Set any custom headers here.
                    // If you set any non-simple headers, your server must include these
                    // headers in the 'Access-Control-Allow-Headers' response header.
                },
                success: function (data) {
                    console.log(data.results[0]);
                    results = data.results[0];
                    console.log(results);
                    makingTotalTable(results);
                },
                error: function () {
                    // Here's where you handle an error response.
                    // Note that if the error was due to a CORS issue,
                    // this function will still fire, but there won't be any additional
                    // information about the error.
                }
            })

        }
        // $.when(getLocation).then(getData);

        // let localAjax = $.ajax({
        //     url: 'https://thevirustracker.com/free-api?countryTotal=RS',
        //     // dataType: 'json',
        //     success: function (res) {
        //         res = res.countrydata[0];
        //         console.log(res);
        //         makingLocalTable(res);
        //     }
        // });

        // function getLocation() {
        //     console.log('buljaa');

        //     $.ajax({
        //         url: 'https://ipinfo.io/178.148.88.3/json?token=6a2a0f17aafb13',
        //         dataType: 'json',
        //         success: function (resLocation) {
        //             console.log(resLocation.country);
        //             makingLocalTable(res);
        //         }
        //     });
        // }

        function getData() {
            // $.when(totalAjax).then(localAjax);
            // $.when(totalAjax).then(console.log("oujea"));
        }


        // SCROLL UP BUTTON
        function scrollUpButton() {
            $(window).scroll(function () {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                    $(".scroll-up-btn").addClass("flex");
                    $("header").addClass("scroll");
                    $(".icons-contents").css({
                        marginTop: "12rem"
                    });
                    // $(".icons-bar--top").css({
                    //     height: "0"
                    // });
                    $(".logo_img").css({
                        height: "4.5rem"
                    });
                    $(".logo_img").attr("src","./assets/img/logo_doba_korone.png");
                } else {
                    $(".scroll-up-btn").removeClass("flex");
                    $("header").removeClass("scroll");
                    $(".icons-contents").css({
                        marginTop: "20rem"
                    });
                    // $(".icons-bar--top").css({
                    //     height: "10rem"
                    // });
                    $(".logo_img").css({
                        height: "5rem"
                    });
                    $(".logo_img").attr("src","./assets/img/logo10wl.png");
                }
            })
        }
        scrollUpButton()

        // Q&A ScrollUp
        // $("[data-i18n^='question']").on("click", function(el){
        //     el.target.scroll({
        //         top:300,
        //         behavior: 'smooth'
        //       });

        // })

        function qScrollUp() {


            // $(window).scrollTop(position + 5)
        }



        // SETTINGS FUNCTIONS //


        // checkSections //
        function checkSections() {
            const checks = Array.prototype.slice.call(document.querySelectorAll('.check'));
            $(checks).on("click", function (el) {
                el.stopPropagation();
                $(el.target).toggleClass("active");
                checkIndex = $(checks).index(el.target);
                var theIcon = $(`.icon-btn[data-index=${checkIndex}]`);
                console.log($(theIcon).toggleClass("hide"))
            })
        }
        checkSections();


        // settings button / close settings
        $(".settings-btn").on("click", function () {
            $(".settings-menu").addClass("active");
        })
        $(".section-list__close-btn").on("click", function () {
            $(".settings-menu").removeClass("active");
        })


    })()
    $("body").animate({
        opacity: "1",
        background: "linear-gradient(to right, #282828ba, #cfcfcf21, #cfcfcf21, #282828ba)"
    }, "slow")

}