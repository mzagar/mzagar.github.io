/* Language detection for a plain two-language site.
 *
 * English pages live at /, Croatian ones at /hr/. A first visit is routed by
 * the browser's language list; after that the choice is remembered, so the
 * language switch in the header always wins. The switch itself is plain
 * links, so the site still works with JavaScript disabled.
 */
(function () {
  var STORE = 'mzagar-lang';
  var CROATIAN = ['hr', 'bs', 'sr', 'sl'];
  var CROATIAN_DIR = '/hr/';

  function remember(code) {
    try { window.localStorage.setItem(STORE, code); } catch (error) { /* storage blocked */ }
  }

  function remembered() {
    try { return window.localStorage.getItem(STORE); } catch (error) { return null; }
  }

  function browsedLanguage() {
    var list = navigator.languages || [navigator.language || 'en'];
    for (var i = 0; i < list.length; i += 1) {
      var code = String(list[i]).slice(0, 2).toLowerCase();
      if (CROATIAN.indexOf(code) !== -1) return 'hr';
    }
    return 'en';
  }

  var path = window.location.pathname.replace(/index\.html$/, '');
  var onCroatianPage = path.indexOf(CROATIAN_DIR) === 0;
  var saved = remembered();
  var language = saved || browsedLanguage();

  if (!saved) remember(language);

  if (language === 'hr' && !onCroatianPage) {
    window.location.replace(CROATIAN_DIR + path.slice(1) + window.location.search + window.location.hash);
    return;
  }

  if (language === 'en' && onCroatianPage) {
    window.location.replace(path.slice(CROATIAN_DIR.length - 1) + window.location.search + window.location.hash);
    return;
  }

  document.addEventListener('click', function (event) {
    var link = event.target.closest && event.target.closest('a[data-lang]');
    if (link) remember(link.getAttribute('data-lang'));
  });
}());
