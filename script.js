(function() {
    function customScript() {
        jQuery(document).ready(function() {
            var linkUrl = {
              'booking-experts-nl.helpscoutdocs.com': 'booking-experts-en.helpscoutdocs.com',
              'booking-experts-en.helpscoutdocs.com': 'booking-experts-nl.helpscoutdocs.com',
              'support.bookingexperts.nl':            'support.bookingexperts.com',
              'support.bookingexperts.com':           'support.bookingexperts.nl'
            }
            var linkName = {
              'booking-experts-nl.helpscoutdocs.com': '🇬🇧  Change to English',
              'booking-experts-en.helpscoutdocs.com': '🇳🇱  Wijzig naar Nederlands',
              'support.bookingexperts.nl':            '🇬🇧  Change to English',
              'support.bookingexperts.com':           '🇳🇱  Wijzig naar Nederlands'
            }
            var domain = window.location.hostname
            var header = jQuery(
              '<header class="locale-switch">' +
                '<a href="//' + linkUrl[domain] + '" class="locale-switch__link">' +
                  linkName[domain] +
                '</a>' +
              '</header>'
            )
            jQuery('body').prepend(header);

            jQuery(document).on('click', '#fullArticle img', function() {
                var img = jQuery(this);
                var modal = jQuery(
                    '<div class="image-modal">' +
                       '<img src="'+ img.attr('src')  +'" />' +
                    '</div>'
                );
                jQuery('body').append(modal);
            });

            jQuery(document).on('click', '.image-modal', function() {
                jQuery(this).remove();
            });

        });
    }
    if (window.addEventListener) {
        window.addEventListener("load", customScript, false);
    } else if (window.attachEvent) {
        window.attachEvent("onload", customScript);
    }
})()
