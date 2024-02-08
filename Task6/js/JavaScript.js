// Page1
function clock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let flag = "AM"
    if (hours==0){
        hours = 12
    }
    if (hours >12) {
        hours-=12;
        flag = "PM"
    }
    if (hours < 10) hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    document.querySelector('.clock').innerText=`${hours}: ${minutes}: ${seconds} ${flag}`
    setTimeout(function(){
        clock()
    },1000)
    console.log(hours);
}
clock()

// Page2
var slideIndex=1;

function plusSlides(n) {
    showSlide(slideIndex+=n);
}
function currentSlides(n) {
    showSlide(slideIndex=n)
}
function showSlide(n) {
    var slides=document.getElementsByClassName("mySlides");
    var dots=document.getElementsByClassName("dot");
    var len=slides.length;
    if (n>slides.length) {
        slideIndex =1 ;
    }
    if (n<1){
        slideIndex=len;
    }
    for(var i=0;i<len;i++)
        slides[i].style.display="none";
    for(var i=0;i<len;i++)
        dots[i].className.replace(" active"," ");

        slides[slideIndex -1].style.display ="block";
    dots[slideIndex -1].className += " active";
}

// Dropdown
function myHide() {
    document.getElementById("myDropdown").style.display="none";
}
function myFunction() { 
    document.getElementById("myDropdown").style.display="block";
}

// Page4
function insert() {
    var  f=document.getElementById("ffform");
    var  t=document.getElementById("out").insertRow(1);
    for (var i = 0; i <f.length; i++){
        t.insertCell(i).innerHTML=f.elements[i].value;
    }
    var pr= parseInt(document.getElementById("price").value); 
    var total= parseInt(document.getElementById("TotalPrice").textContent); 
    total +=pr;
    document.getElementById("TotalPrice").innerHTML=total;
}

// Page5
function search() {
    var input = document.getElementById("myInput");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("myTable");
    var tr = table.getElementsByTagName("tr");

    for (var i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[0];
        if (td) {
        var tValue = td.textContent || td.innerText;
        if (tValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
        }
    }
}