let activeStatus = (e)=>{
     removeActive();
     e.target.className += " active";
     console.log(e.target);
}

let removeActive = ()=>{
    let links = document.getElementsByClassName("nav-center");
    for(i=0;i<links.length;i++){
        links[i].className = 'nav-link';
    }

}