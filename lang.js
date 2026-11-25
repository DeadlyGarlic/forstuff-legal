(function () {
  function apply(lang) {
    document.documentElement.lang = lang;
    var article = document.querySelector('[data-copy="' + lang + '"][data-title]');
    if (article) document.title = article.getAttribute("data-title");
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      var on = btn.getAttribute("data-set-lang") === lang;
      btn.classList.toggle("is-on", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }

  document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var lang = btn.getAttribute("data-set-lang");
      try {
        localStorage.setItem("forstuff-lang", lang);
      } catch (e) {}
      apply(lang);
    });
  });

  apply(document.documentElement.lang || "ru");
})();
