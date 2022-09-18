window.onscroll = function(){
        myfun();
    };

    var nav = document.querySelector('.top-nav');
    var sticky = nav.offsetTop;


    function myfun(){
        if(window.pageYOffset > sticky){
            document.querySelector('.top-nav').classList.add('top-nav-add')
            document.querySelectorAll('.linkC').forEach((item)=>(item.classList.add('nav-item-add')))

        }else{
            document.querySelector('.top-nav').classList.remove('top-nav-add')
            document.querySelectorAll('.linkC').forEach((item)=>(item.classList.remove('nav-item-add')))
        }
    }


var bars = document.querySelector('.menu-bars');
bars.addEventListener('click', (e)=>{
     document.querySelector('.sidebar').style.display = 'block'
     document.querySelector('.sidebar').style.left = '0'
})

var times = document.querySelector('.menu-times');
times.addEventListener('click', (e)=>{
     document.querySelector('.sidebar').style.display = 'none'
     document.querySelector('.sidebar').style.left = '-795.98px'
})
