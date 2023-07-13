// /**
//  * Set the color theme
//  * @param {string} theme
//  */
// function setColorTheme(theme) {
//   // set body attribute for CSS selector
//   document.body.setAttribute("theme", theme);
//   // set root color scheme
//   // https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
//   document.documentElement.style.setProperty(
//     "color-scheme",
//     theme === "light" ? "light" : "dark"
//   );
//   // save to local storage
//   window.localStorage && localStorage.setItem("theme", theme);
//   // set window.isDark for js
//   window.isDark = !(theme === "light");
// }

// // window.switchThemeEventSet = new Set();

// /**
//  * Initialize the select theme button.
//  */
// function initSelectTheme() {
//   Array.from(document.getElementsByClassName("color-theme-select")).forEach(
//     (themeSelect) => {
//       // Get the current theme
//       const currentTheme =
//         window.localStorage && localStorage.getItem("theme")
//           ? localStorage.getItem("theme")
//           : "auto";
//       // Set the selected Index
//       for (let j = 0; j < themeSelect.options.length; j++) {
//         const i = themeSelect.options[j];
//         if (i.value === currentTheme) {
//           themeSelect.selectedIndex = j;
//           break;
//         }
//       }

//       themeSelect.addEventListener("change", () => {
//         const theme = themeSelect.value;
//         window.localStorage && localStorage.setItem("theme", theme);
//         if (theme !== "auto") {
//           setColorTheme(theme);
//         } else {
//           window.localStorage && localStorage.removeItem("theme");
//           if (
//             window.matchMedia &&
//             window.matchMedia("(prefers-color-scheme: dark)").matches
//           ) {
//             document.body.setAttribute("theme", "dark");
//           } else {
//             document.body.setAttribute("theme", "light");
//           }
//         }
//       });
//     }
//   );
// }

// initSelectTheme();

// 监听暗色、亮色切换
if (
  (window.localStorage && !localStorage.getItem("theme")) ||
  (window.localStorage && localStorage.getItem("theme") === "auto")
) {
  let lightMedia = window.matchMedia("(prefers-color-scheme: light)");

  let darkMedia = window.matchMedia("(prefers-color-scheme: dark)");

  let callback = (e) => {
    let prefersDarkMode = e.matches;

    if (prefersDarkMode) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        document.body.setAttribute("theme", "dark");
      } else {
        document.body.setAttribute("theme", "light");
      }
    }
  };

  if (
    typeof darkMedia.addEventListener === "function" ||
    typeof lightMedia.addEventListener === "function"
  ) {
    lightMedia.addEventListener("change", callback);
    darkMedia.addEventListener("change", callback);
  }
}
// 监听暗色、亮色切换End

mediumZoom('[data-zoomable]',{background:"var(--color-backdrop)"})