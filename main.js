
var data = {
    A: {
      name: "Clap",
      sound: "sounds/clap.wav",
    },
    S: {
      name: "HiHat",
      sound: "sounds/hihat.wav",
    },
    D: {
      name: "Kick",
      sound: "sounds/kick.wav",
    },
    F: {
      name: "OpenHat",
      sound: "sounds/openhat.wav",
    },
    G: {
      name: "Boom",
      sound: "sounds/boom.wav",
    },
    H: {
      name: "Ride",
      sound: "sounds/ride.wav",
    },
    J: {
      name: "Snare",
      sound: "sounds/snare.wav",
    },
    K: {
      name: "Tom",
      sound: "sounds/tom.wav",
    },
    L: {
      name: "Tink",
      sound: "sounds/tink.wav",
    },
  };
  
  let drumkit = document.getElementById("drumkit")
  function card() {
    for (let key in data) {
      // console.log(key)
      let drumElement = document.createElement("div");
      // drumElement.className = "element";
      drumElement.classList.add("element", data[key].name);
      console.log(drumElement);
      drumkit.appendChild(drumElement)
  
      let h2 = document.createElement("h2")
      h2.textContent = key;
      drumElement.appendChild(h2)
  
  
      let span = document.createElement("span")
      span.textContent = data[key].name;
      console.log(span);
      drumElement.appendChild(span)
  
      drumElement.addEventListener("click", function (event) {
        let key = event.currentTarget.querySelector('h2').textContent;
        console.log(key)
        playDrum(key.toUpperCase());
      })
  
    }
  }
  function playDrum(key) {
    console.log(key);
    if (data.hasOwnProperty(key)) {
      let drumElement = document.querySelector(`.element.${data[key].name}`);
      console.log(drumElement);
      drumElement.classList.add("active");
  
      let audio = new Audio();
      console.log(audio);
      audio.src = data[key].sound;
      console.log(audio)
  
  
      audio.play();
  
      audio.addEventListener("timeupdate", function () {
        if (audio.currentTime >= audio.duration / 32) {
          drumElement.classList.remove("active");
          audio.removeEventListener('timeupdate', aruguments.callee,)
        }
      });
  
    }
  }
  
  
  document.addEventListener("keydown",function(event){
    playDrum(event.key.toUpperCase());
  });
  

  card()
  
  
  