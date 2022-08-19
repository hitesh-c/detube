

document.addEventListener(
  "DOMContentLoaded",
  function () {
    var checkButton = document.getElementById("switch");
    checkButton.addEventListener(
      "click",
      function (e) {
        checkButton.checked
          ? chrome.tabs.query(
              { active: true, currentWindow: true },
              function (activeTabs) {
                // WAY 1
                chrome.tabs.executeScript(activeTabs[0].id, {
                  file
                });
                
              }
            )
          : chrome.tabs.query(
              { active: true, currentWindow: true },
              function (activeTabs) {
                // WAY 1
                chrome.tabs.executeScript(activeTabs[0].id, {
                  code: ` document.getElementById('Dark_layer_hitesh').style.display = 'none';`,
                  
                });
              }
            );
      },
      false
    );
  },
  false
);
