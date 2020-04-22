$.i18n().locale = "cyr";
var set_locale_to = function (locale) {
  if (locale)
    $.i18n().locale = "locale";
    

};
jQuery(function () {
  $.i18n().load({
      'lat': './jquery.i18n/languages/lat.json',
      "cyr": './jquery.i18n/languages/cyr.json'
    })
    .done(function () {
      set_locale_to(url('?locale'));
      History.Adapter.bind(window, 'statechange', function () {
        set_locale_to(url('?locale'));
      });



      /////////// FOR CUSTOM LAGUAGE SWITCHER: ///////////

      /////////// (INCLUDE THIS UL IN YOUR HTML CODE)///////////

      //<ul class="switch-locale">
      //<li><a href="#" data-locale="en">En</a></li>
      //<li><a href="#" data-locale="de">De</a></li>
      //</ul>/

      //////////  END --- (INCLUDE THIS UL IN YOUR HTML CODE) //////////

      $('.switch-locale').on('click', 'a', function (e) {
        $('body').animate({
          opacity: "0.5"
        },"swing")
        History.pushState(null, null, "?locale=" + $(this).data('locale'));


        e.preventDefault();
        $('body').animate({
          opacity: "1"
        }, "swing")
      });

      ////////// END --- FOR CUSTOM LAGUAGE SWITCHER:  /////////////

    });
});
var set_locale_to = function (locale) {
  if (locale) {
    $.i18n().locale = locale;
  }
  $('body').i18n();
}