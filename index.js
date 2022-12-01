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

var video = document.createElement('video');
video.setAttribute('loop', '');
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

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

 let globalInterval;

 firebase.database().ref('flagValue').on('value',(snap)=>{

    console.log("snap",snap.val())
    if(snap.val()===0){
      // Home page
      document.body.className='';
      document.getElementById('body').style.background="white";
      var containerElement = document.getElementsByClassName("container")
        console.log("containerEements",containerElement,containerElement[0].hasChildNodes())
        if(!containerElement[0].hasChildNodes()){
            console.log("child")
            //document.body.style.backgroundColor="white";
            var img = document.createElement('img');
            img.className="logo"
            img.src = 'logo_black_ring.png';
            document.getElementById('container').appendChild(img);
        }
    }
    else if(snap.val() === 1){
      // Chand ne kaho- slow pastels
        console.log("if",1)
        document.body.className='';
        const containerElement1 = document.getElementById("container");
        containerElement1.hasChildNodes()?containerElement1.removeChild(containerElement1.firstElementChild):null;
        let element=document.getElementById('body')
        element.classList.add('transitions-pastels');
        /*const containerElement1 = document.getElementById("container");
        containerElement1.hasChildNodes()?containerElement1.removeChild(containerElement1.firstElementChild):null;
        const color = ["red","blue","white","black","green","yellow"];
        function changeColor(num){
			//console.log("hi",num,color[num])
			document.body.style.backgroundColor = color[num];
			num=(num+1) % color.length;*/

		//}

		//setInterval(changeColor,currentTime%15)
		/*globalInterval=setInterval(()=>{
			var currentTime = new Date().getUTCSeconds();
			console.log("currenttime",currentTime)
			changeColor(Math.floor(currentTime/10))
		},1)*/
  }
  else if(snap.val() === 2){
    // Mere naam tu- slow neon
      console.log("if",2)
      document.body.className='';
      const containerElement1 = document.getElementById("container");
      containerElement1.hasChildNodes()?containerElement1.removeChild(containerElement1.firstElementChild):null;
      let element=document.getElementById('body')
      element.classList.add('transitions-neon');
  }
    else if(snap.val() === 3){
      // Uff - slow disco
      console.log("if",3)
      document.body.className='';
        console.log("else",snap.val())
        setInterval(()=>{
          const color=ranColor();
          console.log("color",color)
          document.getElementById('body').style.background=color;
        },400)
        const ranColor = () =>{
          return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
        }
        /*globalInterval?clearInterval(globalInterval):null;
        var containerElement = document.getElementsByClassName("container")
        console.log("containerEements",containerElement,containerElement[0].hasChildNodes())
        if(!containerElement[0].hasChildNodes()){
            console.log("child")
            document.body.style.backgroundColor="white";
            var img = document.createElement('img');
            img.className="logo"
            img.src = 'logo_black_ring.png';
            document.getElementById('container').appendChild(img);
        }*/
    }
    else if(snap.val() === 4){
      // Baby you light up - fast disco
      console.log("if",4)
      document.body.className='';
        console.log("else",snap.val())
        setInterval(()=>{
          const color=ranColor();
          console.log("color",color)
          document.getElementById('body').style.background=color;
        },150)
        const ranColor = () =>{
          return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
        }
        /*globalInterval?clearInterval(globalInterval):null;
        var containerElement = document.getElementsByClassName("container")
        console.log("containerEements",containerElement,containerElement[0].hasChildNodes())
        if(!containerElement[0].hasChildNodes()){
            console.log("child")
            document.body.style.backgroundColor="white";
            var img = document.createElement('img');
            img.className="logo"
            img.src = 'logo_black_ring.png';
            document.getElementById('container').appendChild(img);
        }*/
    }
  });