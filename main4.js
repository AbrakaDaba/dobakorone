// window.onload = function(){
// setTimeout(function(){



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
            // left: 0,
            // maxHeight: "0px"
        })
        console.log(contentHeights)

        // ICONS-BTN-FUNCTION
        function icons_btn_fn(contentHeights) {

            let theIc;
            var mySwitch = false;


            $('.icon-btn').on("click", function (el) {
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
                $(".icons-contents").css({
                    opacity:1/////////////////////////////////////NEW
                })
                icons_btns[theIc - 1].classList.remove("active_icon");
                $(el.target).addClass("active_icon");
                $("#" + theIc).css({
                    opacity: 1
                })
                $("#" + theIc).slideDown("fast")
                $("#" + theIc).show("fast");
            }

            // IF SOME ICON IS OPENED AND SOME OTHER IS CLICKED
            function oneOpenedAnotherClicked(el, contentHeights, theIc, icons_btns, clickedContentArr, contents_box) {
                // $(".icons-contents").removeClass("opacity")
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

                    $("#" + theIc).slideDown(500).css({
                        opacity: 1
                    });

                        $(".icons-contents").addClass("opacity")
            }


            // IF ACTIVE ICON IS CLICKED
            function clickActiveBtn(el, theIc, contents_box) {

                $(".icons-contents").css({
                    height: "auto",
                    maxHeight: "auto",
                    opacity:0/////////////////////////////////////NEW
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



        let totalAjax = $.ajax({
            url: 'https://thevirustracker.com/free-api?global=stats',
            dataType: 'json',
            success: function (data) {
                console.log(data.results[0]);
                results = data.results[0];
                console.log(results);
                makingTotalTable(results);
            }
        })

        $.when(getLocation).then(getData);

        let localAjax = $.ajax({
            url: 'https://thevirustracker.com/free-api?countryTotal=RS',
            dataType: 'json',
            success: function (res) {
                res = res.countrydata[0];
                console.log(res);
                makingLocalTable(res);
            }
        });

        function getLocation() {
            console.log('buljaa');

            $.ajax({
                url: 'https://ipinfo.io/178.148.88.3/json?token=6a2a0f17aafb13',
                dataType: 'json',
                success: function (resLocation) {
                    console.log(resLocation.country);
                    makingLocalTable(res);
                }
            });
        }

        function getData() {
            $.when(totalAjax).then(localAjax);
        }

    })()


    // },3000);
    // }