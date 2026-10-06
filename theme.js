/* Applies the look before the page paints (kept separate: the CSP forbids inline scripts).
   Solo is light only (Nat, 7 Oct: no dark version); an old "dark" choice is forgotten. */
(function () {
  var t = "light";
  try { localStorage.removeItem("solo:theme"); } catch (e) {}
  var root = document.documentElement;
  root.setAttribute("data-theme", t);
  var metas = document.querySelectorAll('meta[name="theme-color"]');
  for (var i = 0; i < metas.length; i++) { metas[i].removeAttribute("media"); metas[i].setAttribute("content", "#FFC93C"); }
})();
