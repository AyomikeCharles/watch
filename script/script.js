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

    let slide = 1;

setInterval(()=>{



    if(slide == 1){

         document.getElementById(`img${slide}`).style.display = 'block';

         document.getElementById(`img2`).style.display = 'none';

         document.getElementById(`img3`).style.display = 'none';

        console.log(slide)

    }else if (slide == 2) {

        document.getElementById(`img${slide}`).style.display = 'block';

         document.getElementById(`img1`).style.display = 'none';

         document.getElementById(`img3`).style.display = 'none';

         
        console.log(slide)


    }else if (slide == 3) {

        document.getElementById(`img${slide}`).style.display = 'block';

         document.getElementById(`img2`).style.display = 'none';

         document.getElementById(`img1`).style.display = 'none';
            
        console.log(slide)
    }

    slide++

    if(slide>3){
        slide=1
    }



}, 3000)