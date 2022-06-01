function mountApp() {
  let reg = new RegExp("(^|&)" + "appName" + "=([^&]*)(&|$)");
  let r = window.location.search.substr(1).match(reg);
  window.appName = "Lottonow";
  if (r != null) {
    window.appName =
      unescape(r[2]) && unescape(r[2]) != "0" ? unescape(r[2]) : "Lottonow";
  }
  let DOM = document.querySelector(".wrapper-progress-text");
  let Img = document.querySelector(".skeleton-wrapper-logo");
  Img.src = `https://file.brobonds.com/Image/${window.appName}_Index_Logo.svg`;
  window.appLogo = `https://file.brobonds.com/Image/${window.appName}_Index_Logo.svg`;
  Img.addEventListener("error", () => {
    console.log("render_img_error");
    window.appLogo = "https://file.brobonds.com/Image/Lottonow_Index_Logo.svg";
  });

  let i = 0;
  let timer = null;
  const processStep = () => {
    i += 3;
    DOM.style.width = i + "%";
    timer = requestAnimationFrame(processStep);
    if (i >= 90) {
      cancelAnimationFrame(timer);
    }
  };
  processStep();
}

window.mountApp = mountApp;
if (window.STYLE_READY) {
  console.log("style ready");
  mountApp();
}
