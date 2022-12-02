const firebaseConfig = {
  apiKey: "AIzaSyBWl7e2fXkK72HzuGC2TmKS3BKqugyU1D4",
  authDomain: "kunalsangeet-5a776.firebaseapp.com",
  databaseURL: "https://kunalsangeet-5a776-default-rtdb.firebaseio.com/",
  projectId: "kunalsangeet-5a776",
  storageBucket: "kunalsangeet-5a776.appspot.com",
  messagingSenderId: "27621617178",
  appId: "1:27621617178:web:56359beeec1a8990f9eba3",
  measurementId: "G-ECG2ZWP75L"
};

const fakeVideo = () =>{
  var video = document.createElement('video');
  video.setAttribute('loop', '');
  video.setAttribute('autoplay', '');
  video.setAttribute('playsinline', '');
  video.setAttribute('muted', '');
  // Add some styles if needed
  video.setAttribute('style', 'position: fixed;');

  // A helper to add sources to video
  function addSourceToVideo(element, type, dataURI) {
      var source = document.createElement('source');
      source.src = dataURI;
      source.type = 'video/' + type;
      element.appendChild(source);
  }

  // A helper to concat base64
  var base64 = function(mimeType, base64) {
      return 'data:' + mimeType + ';base64,' + base64;
  };

  // Add Fake sourced
  addSourceToVideo(video,'webm', base64('video/webm', 'GkXfo0AgQoaBAUL3gQFC8oEEQvOBCEKCQAR3ZWJtQoeBAkKFgQIYU4BnQI0VSalmQCgq17FAAw9CQE2AQAZ3aGFtbXlXQUAGd2hhbW15RIlACECPQAAAAAAAFlSua0AxrkAu14EBY8WBAZyBACK1nEADdW5khkAFVl9WUDglhohAA1ZQOIOBAeBABrCBCLqBCB9DtnVAIueBAKNAHIEAAIAwAQCdASoIAAgAAUAmJaQAA3AA/vz0AAA='));
  addSourceToVideo(video, 'mp4', base64('video/mp4', 'AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAAG21kYXQAAAGzABAHAAABthADAowdbb9/AAAC6W1vb3YAAABsbXZoZAAAAAB8JbCAfCWwgAAAA+gAAAAAAAEAAAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAIVdHJhawAAAFx0a2hkAAAAD3wlsIB8JbCAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAIAAAACAAAAAABsW1kaWEAAAAgbWRoZAAAAAB8JbCAfCWwgAAAA+gAAAAAVcQAAAAAAC1oZGxyAAAAAAAAAAB2aWRlAAAAAAAAAAAAAAAAVmlkZW9IYW5kbGVyAAAAAVxtaW5mAAAAFHZtaGQAAAABAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAAEcc3RibAAAALhzdHNkAAAAAAAAAAEAAACobXA0dgAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAIAAgASAAAAEgAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABj//wAAAFJlc2RzAAAAAANEAAEABDwgEQAAAAADDUAAAAAABS0AAAGwAQAAAbWJEwAAAQAAAAEgAMSNiB9FAEQBFGMAAAGyTGF2YzUyLjg3LjQGAQIAAAAYc3R0cwAAAAAAAAABAAAAAQAAAAAAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAEAAAABAAAAFHN0c3oAAAAAAAAAEwAAAAEAAAAUc3RjbwAAAAAAAAABAAAALAAAAGB1ZHRhAAAAWG1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAAK2lsc3QAAAAjqXRvbwAAABtkYXRhAAAAAQAAAABMYXZmNTIuNzguMw=='));

  // Append the video to where ever you need
  document.body.appendChild(video);

  // Start playing video after any user interaction.
  // NOTE: Running video.play() handler without a user action may be blocked by browser.
  var playFn = function() {
      video.play();
      document.body.removeEventListener('touchend', playFn);
  };
  document.body.addEventListener('touchend', playFn);
}
fakeVideo();
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

 let globalInterval;
 let interval1, interval2;

 const addLogo = ()=>{
    var containerElement = document.getElementsByClassName("container")
    if(!containerElement[0].hasChildNodes()){
        var img = document.createElement('img');
        img.className="logo"
        img.src = 'logo_black_ring.png';
        document.getElementById('container').appendChild(img);
    }
 }

 const ranColor = () =>{
  const colorCode = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
  document.getElementById('body').style.background=colorCode;
}

 firebase.database().ref('flagValue').on('value',(snap)=>{
    addLogo()
    console.log("snap",snap.val())
    if(snap.val()===0){
      // Home page
      clearInterval(interval1)
      clearInterval(interval2)
      document.body.className='';
      document.getElementById('body').style.background="white";
      
    }
    else if(snap.val() === 1){
      // Chand ne kaho- slow pastels
      clearInterval(interval1)
      clearInterval(interval2)
      document.body.className='';
      let element=document.getElementById('body')
      element.classList.add('transitions-pastels');
  }
  else if(snap.val() === 2){
    // Mere naam tu- slow neon
      clearInterval(interval1)
      clearInterval(interval2)
      document.body.className='';
      let element=document.getElementById('body')
      element.classList.add('transitions-neon');
  }
    else if(snap.val() === 3){
      // Uff - slow disco
      clearInterval(interval2)
      document.body.className='';
      interval1=setInterval(()=>{
        ranColor();
        //console.log("color",color)
        //document.getElementById('body').style.background=color;
      },400)
        
    }
    else if(snap.val() === 4){
      // Baby you light up - fast disco
      clearInterval(interval1)
      document.body.className='';
        interval2=setInterval(()=>{
          ranColor();
          //console.log("color",color)
          //document.getElementById('body').style.background=color;
        },150)
    }
  });