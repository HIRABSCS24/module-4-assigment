// byeSpeaker.js
(function (window) {
  var byeSpeaker = {};
  var speakWord = "Good Bye";

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
    const msg = document.createElement("div");
    msg.className = "message goodbye";
    msg.textContent = speakWord + " " + name;
    document.getElementById("output").appendChild(msg);
  };

  window.byeSpeaker = byeSpeaker;
})(window);
