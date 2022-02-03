 /*__________________________ For Owl Carousel______________________ */
 
 $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        }
    },
    mouseDrag:true,
    touchDrag:true,
    dots:false,
    smartSpeed:500,
    navText:['<i class="fas fa-long-arrow-alt-left cus-bg-color text-white fs-5 px-3 py-1 mx-1 mt-4 rounded-pill rounded-end cus-transition"></i>'
    ,'<i class="fas fa-long-arrow-alt-right cus-bg-color text-white fs-5 px-3 py-1 mt-4 mx-1 rounded-pill rounded-start cus-transition"></i>'],
})

 /*__________________________ To Remove fixed Top button when we already at the top of page ______________________ */

window.onscroll=function(){
    myFunc()
}

function myFunc (){
    var topIcon = document.getElementById('top-icon')
    var pos = document.documentElement.scrollTop
    console.log(pos)

    if (pos < 400){
        topIcon.classList.add('d-none')
    }else {
        topIcon.classList.remove('d-none')
    }
}   

 /*__________________________ For Our Simple Form Validation ______________________ */

var id = (id) => document.getElementById(id);
var cls = (cls) => document.getElementsByClassName(cls);

var form = id("form")
var userName = id("userName");
var email = id("email");
var subject = id ("subject");
var msg = id("msg")
var err = cls("err")
var rightIcon = cls("fa-check-circle")
var wrongIcon = cls("fa-exclamation-circle")

form.addEventListener ("submit", (e)=>{
    e.preventDefault();
    engine(userName, 0, "Please Enter Your Name")
    engine(email, 1, "Please Enter Your Email")
    engine(subject, 2, "Please Enter The Subject")
    engine(subject, 3, "Please Enter Your Message")

})

var engine = (id, order, message) => {
    if (id.value.trim() === ""){
        err[order].innerHTML= message
        rightIcon[order].classList.add("opacity-0")
        wrongIcon[order].classList.remove("opacity-0")
    }else{
        err[order].innerHTML = ""
        rightIcon[order].classList.remove("opacity-0")
        wrongIcon[order].classList.add("opacity-0")
    }
}

console.log(wrongIcon)
