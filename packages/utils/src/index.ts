export function supportsPassiveEvents() {
  // Test via a getter in the options object to see if the passive property is accessed
  let supportsPassive = false;
  try {
    var opts = Object.defineProperty({}, "passive", {
      get: function() {
        supportsPassive = true;
      }
    });
    window.addEventListener("testPassive", null, opts);
    window.removeEventListener("testPassive", null, opts);
  } catch (e) {}

  return supportsPassive;
}

export function isEdge() {
  return window.navigator.userAgent.indexOf("Edge") !== -1;
}

export function isIE() {
  return window.navigator.userAgent.indexOf("Trident/") !== -1;
}

export function isSafari() {
  return window.navigator.userAgent.indexOf("WebKit") !== -1;
}
