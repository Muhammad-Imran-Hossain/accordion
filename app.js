const header = document.querySelectorAll('.accordion-header');
const body = document.querySelectorAll('.accordion-body');
const accordion = document.querySelectorAll('.accrodion-item');


header.forEach( item => {
    item.addEventListener('click',function(){
        item.classList.toggle('active');
        item.nextElementSibling.classList.toggle('active');

        header.forEach(item => {
            if(item != this){
                item.classList.remove('active');
                item.nextElementSibling.classList.remove('active');
            }
        });


    });
});