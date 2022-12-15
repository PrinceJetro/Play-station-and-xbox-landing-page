p = document.querySelector(".ps_div");
x = document.querySelector(".xbox_div");

auto();
function auto(){
    p.style.width="65%";
    x.style.width="33%";
    x.style.width="65%";
    p.style.width="33%";

    setTimeout(() => {
     auto()   
    }, 5000);
}
function ps(){
    
    p.style.width="65%";
    x.style.width="33%";
    
}


function xbox(){
    
    x.style.width="65%";
    p.style.width="33%";
}

function fill() {
    alert('Congratulations, fill the form shown below and your XBOX will be shipped to the address given');
    document.querySelector("form").style.display="block";
    document.querySelector(".btn").style.display="none";

}

function fi() {
    alert('Congratulations, fill the form shown below and your PlayStation 5 will be shipped to the address given');
    document.querySelector("form").style.display="block";
    document.querySelector(".btn").style.display="none";

}