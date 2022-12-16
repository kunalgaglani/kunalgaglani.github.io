
  
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

      addLogo()
      
        // Baby you light up - fast disco
        clearInterval(interval1)
        document.body.className='';
          interval2=setInterval(()=>{
            ranColor();
            //document.getElementById('body').style.background=color;
          },150)
