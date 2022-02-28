/*-*************************************************************************************************
 * ▄▀▀▄ █  █ █▀▀▀    ▄▀▀▀ █  █ ▄▀▀▀▐▀█▀▌▄▀▀▄ ▐▀▄▀▌      █ ▄▀▀▀
 * █  █ █  █ █▀▀  ▀▀ █    █  █ ▀▀▀█  █  █  █ █ ▀ ▌   ▄  █ ▀▀▀█
 *  ▀▀   ▀▀  ▀▀▀▀     ▀▀▀  ▀▀  ▀▀▀   █   ▀▀  █   ▀ ▀ ▀▄▄█ ▀▀▀
 *
 * Custom JS code specific to the website of the Division of Academic Engagement and Student
 *   Achievement (DAESA) in the Office of the Provost at Washington State University (WSU).
 *
 * @version 1.0.0
 *
 * @author Daniel C. Rieck [daniel.rieck@wsu.edu] (https://github.com/invokeImmediately)
 * @link https://github.com/invokeImmediately/WSU-DAESA-JS/blob/master/oue-custom.js
 * @license MIT - Copyright (c) 2022 Washington State University
 *   Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 *     and associated documentation files (the “Software”), to deal in the Software without
 *     restriction, including without limitation the rights to use, copy, modify, merge, publish,
 *     distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the
 *     Software is furnished to do so, subject to the following conditions:
 *   The above copyright notice and this permission notice shall be included in all copies or
 *     substantial portions of the Software.
 *   THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 *     BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 *     NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 *     DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 *     FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 **************************************************************************************************/

////////////////////////////////////////////////////////////////////////////////////////////////////
// TABLE OF CONTENTS
// -----------------
//   §1: Persistent documentation for final output..............................................39
//   §2: DOM-Ready execution sequence...........................................................49
//     §2.1: Function for inserting header on news pages........................................57
//     §2.2: Function for shorting URL-based link text on calendar pages........................69
//     §2.3: DOM-ready execution entry point....................................................87
////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////
// §1: PERSISTENT DOCUMENTATION for final output

/*!***
 * oue-custom.js - v1.0.0
 * Custom JS code specific to the website of the Division of Academic Engagement and Student Achievement (DAESA) in the Office of the Provost at Washington State University (WSU).
 * By Daniel C. Rieck (daniel.rieck@wsu.edu). See [GitHub](https://github.com/invokeImmediately/daesa.wsu.edu/blob/master/JS/oue-custom.js) for more info.
 * Copyright (c) 2022 Washington State University and governed by the MIT license.
 ****/

////////////////////////////////////////////////////////////////////////////////////////////////////
// §2: DOM-Ready execution sequence

( function ( $ ) {

$( function () {
  'use strict';

  ////////
  // §2.1: Function for inserting header on news pages
  function insertNewsPgsHdr() {
    const siteURL = window.location.pathname;
    switch ( siteURL ) {
      case '/news/':
      case '/oue/news/':
        $('.column.one').first().parent('.row').before('<section id="builder-section-1543274513343" class="row single h1-header gutter pad-ends"><div style="" class="column one "><h1>News</h1></div></section>' );
        break;
    }
  }

  ////////
  // §2.2: Function for shorting URL-based link text on calendar pages
  function shortenCalendarUrl( selector ) {
    const $url = jQuery( selector );
    if ( $url.length ) {
      let txt = $url.text();
      txt = txt.replace( 'https://', '' );
      txt = txt.replace( 'http://', '' );
      if ( txt.charAt( txt.length - 1 ) == '/' ) {
        txt = txt.substr( 0, txt.length - 1 );
      }
      if ( txt.length > 32 ) {
        txt = txt.substr( 0, 31 ) + "…";
      }
      $url.text( txt );
    }
  }

  ////////
  // §2.3: DOM-ready execution entry point

  insertNewsPgsHdr();
  shortenCalendarUrl( '.single-tribe_events .tribe-events-event-url a' );
  shortenCalendarUrl( '.single-tribe_events .tribe-venue-url a' );
  shortenCalendarUrl( '.single-tribe_events .tribe-organizer-url a' );
} );

} )( jQuery );
