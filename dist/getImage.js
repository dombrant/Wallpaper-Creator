const input=document.querySelector("input"),checkForImage=()=>new Promise((e,n)=>{0===input.files.length?(document.querySelector(".main-section").innerHTML='\n      <h3 class="vertical-center"> Please upload one image </h3> \n      <div class="button-container"> \n        <button onclick="location.reload()">Retry</button> \n      </div>',n("Please upload one image")):e()}),getImage=()=>new Promise((e,n)=>{const t=new FileReader;t.onload=n=>e(n.target.result),t.readAsDataURL(input.files[0])});export{checkForImage,getImage};