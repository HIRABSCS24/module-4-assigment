// helloSpeaker.js
(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
    const msg = document.createElement("div");
    msg.className = "message hello";
    msg.textContent = speakWord + " " + name;
    document.getElementById("output").appendChild(msg);
  };

  window.helloSpeaker = helloSpeaker;
})(window);
