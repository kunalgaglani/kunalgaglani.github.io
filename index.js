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

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

 let globalInterval;

 firebase.database().ref('flagValue').on('value',(snap)=>{

    console.log("snap",snap.val())
    if(snap.val()===0){
      document.body.className='';
      var containerElement = document.getElementsByClassName("container")
        console.log("containerEements",containerElement,containerElement[0].hasChildNodes())
        if(!containerElement[0].hasChildNodes()){
            console.log("child")
            document.body.style.backgroundColor="white";
            var img = document.createElement('img');
            img.className="logo"
            img.src = 'logo_black_ring.png';
            document.getElementById('container').appendChild(img);
        }
    }
    else if(snap.val() === 1){
        console.log("if",1)
        let element=document.getElementById('body')
        element.classList.add('transitions');
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
    else{
        console.log("else",snap.val())
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