let activeStatus = (e)=>{
     removeActive();
     e.target.className += " active";

}

let removeActive = ()=>{
    let links = document.getElementsByClassName("nav-center");
    for(i=0;i<links.length;i++){
        links[i].className = 'nav-link nav-center';
    }

}

