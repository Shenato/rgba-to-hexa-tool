var pushState = history.pushState;

history.pushState = function () {
  pushState.apply(history, arguments);
};

window.addEventListener("popstate", function (e) {});
