const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function pageTransition(){
    // Button click active class
    for(let i=0; i< sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function() {
            // console.log(this.className, i);
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    // Section Active
    for (var i = 0 ; i < allSections.length; i++) {
        allSections[i].addEventListener('click', function (el) {
            const id = el.target.dataset.id;
            console.log(el.target)
            if(id){
                // Remove selected from the other btns
                sectBtn.forEach((btn) => {
                    btn.classList.remove('active')
                });
                
                el.target.classList.add('active');
    
                //Hide other sections
                sections.forEach((section) => {
                    section.classList.remove('active');
                });
                const element = document.getElementById(id);
                element.classList.add('active');
            }
        })
     }
}

pageTransition();