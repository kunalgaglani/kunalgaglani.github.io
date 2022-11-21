
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

/*const dbRef = firebase.database().ref(); 
console.log("firebase",dbRef,dbRef.child("StartFlag"));

dbRef.on("value", snap => {
    let flagEnabled = snap.val();
    console.log("flagEnabled",flagEnabled)
 });*/
 let globalInterval;
 firebase.database().ref('StartFlag').on('value',(snap)=>{
    console.log("snap",snap.val())
    if(snap.val() === true){
        console.log("if")
        const containerElement1 = document.getElementById("container");
        containerElement1.removeChild(containerElement1.firstElementChild);
        /*globalInterval=setInterval(() => {
            var currentTime = new Date().getUTCSeconds();
            console.log("currenttime",currentTime)
            if(currentTime >=0 && currentTime <=10){
                document.body.style.backgroundColor = "red";
            }
            else if(currentTime >=11 && currentTime <= 20){
                document.body.style.backgroundColor = "blue";
            }
            else if(currentTime >=21 && currentTime <= 30){
                document.body.style.backgroundColor = "white";
            }
            else if(currentTime >=31 && currentTime <= 40){
                document.body.style.backgroundColor = "black";
            }
            else if(currentTime >=41 && currentTime <= 50){
                document.body.style.backgroundColor = "green";
            }
            else{
                document.body.style.backgroundColor = "yellow";
            }
        },10)*/
        const color = ["red","blue","white","black","green","yellow"];
        function changeColor(num){
			//console.log("hi",num,color[num])
			document.body.style.backgroundColor = color[num];
			num=(num+1) % color.length;
		}

		//setInterval(changeColor,currentTime%15)
		globalInterval=setInterval(()=>{
			var currentTime = new Date().getUTCSeconds();
			console.log("currenttime",currentTime)
			changeColor(Math.floor(currentTime/10))
		},1000)
    }
    else{
        console.log("else")
        globalInterval?clearInterval(globalInterval):null;
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
  });