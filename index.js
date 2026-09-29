let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList.remove (" dark-theme")
    }
    else {
        document.body.classList.remove(" dark-theme");
    
    }
}



function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classlist += " modal__overlay--visible"
    
    emailjs                
       .sendForm(
        'service_21vdhsr'
        (template_79h6ci5)
        .event.target,
        'user_Zu0RDIbKPMMLYq7UN'
       )
         .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visable";
        })
        .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly on email@dam.oilbrokr55@gmail.com"
        );
    })
}

    let (isModalOpen) = false;
        function toggleModal() {
    if (modalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    // toggle modal
document.body.classList += " modal--open";
}

   