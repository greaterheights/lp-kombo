
document.querySelectorAll("span").forEach((span) => {
    let tekst = span.innerHTML;
    tekst = tekst.replace(/(\s)([\S])[\s]+/g,"$1$2&nbsp;"); //jednoznakowe
    tekst = tekst.replace(/(\s)([^<][\S]{1})[\s]+/g,"$1$2&nbsp;"); //dwuznakowe
    span.innerHTML = tekst ;
});

document.querySelectorAll("h1").forEach((span) => {
    let tekst = span.innerHTML;
    tekst = tekst.replace(/(\s)([\S])[\s]+/g,"$1$2&nbsp;"); //jednoznakowe
    tekst = tekst.replace(/(\s)([^<][\S]{1})[\s]+/g,"$1$2&nbsp;"); //dwuznakowe
    span.innerHTML = tekst ;
});

document.querySelectorAll("h2").forEach((span) => {
    let tekst = span.innerHTML;
    tekst = tekst.replace(/(\s)([\S])[\s]+/g,"$1$2&nbsp;"); //jednoznakowe
    tekst = tekst.replace(/(\s)([^<][\S]{1})[\s]+/g,"$1$2&nbsp;"); //dwuznakowe
    span.innerHTML = tekst ;
});


document.querySelectorAll("p").forEach((span) => {
    let tekst = span.innerHTML;
    tekst = tekst.replace(/(\s)([\S])[\s]+/g,"$1$2&nbsp;"); //jednoznakowe
    tekst = tekst.replace(/(\s)([^<][\S]{1})[\s]+/g,"$1$2&nbsp;"); //dwuznakowe
    span.innerHTML = tekst ;
});

function addSlideUp (buttonClass) {
    document.addEventListener( 'DOMContentLoaded', function () {
        const buttons = document.getElementsByClassName(buttonClass)
        Array.from(buttons).forEach(function (button) {
            let container = button.parentElement.children[1]
            if(window.innerWidth > 600) {
                moreSlideUp(button, "moreContent", buttons)
            }
            moreSlideDown(button, container)
        })
    })
}

function moreSlideUp (button , containerClass, buttons) {
    button.addEventListener('click', () => {
        const containers = document.getElementsByClassName(containerClass)
        Array.from(containers).forEach(function (container) {
            if(container.classList.contains("active")) {
                container.style.height = container.clientHeight + "px"
                container.style.height = "0px"

                container.addEventListener('transitionend', () => {
                    container.classList.remove('active')
                    container.parentElement.classList.remove('active')
                    Array.from(buttons).forEach(function (button2) {
                        console.log(button2, "button2")
                        console.log(button, "button")
                        console.log(button !== button2)
                        if(button !== button2 ) {
                            button2.style.height = "24px";
                            button2.classList.remove("active")
                        }
                    })
                }, {once: true})
            }
        })
        console.log(buttons)
    })
}

function moreSlideDown (button, container) {
    button.addEventListener('click', () => {
        if( button.classList.contains("active")) {
            button.classList.remove("active")
        } else {
            button.classList.add("active")
        }

        /** Slide down. */
        button.style.height = "0px";
        if(!container.classList.contains('active')) {
            container.classList.add('active')
            container.style.height = "auto"

            let height = container.clientHeight + "px"

            container.style.height = "0px"

            setTimeout(() => {
                container.style.height = height
            }, 0)
            /** Slide up. */
        }
    })
}

window.addEventListener("resize", () => {
    const containers = document.getElementsByClassName("moreContent")
    Array.from(containers).forEach(function (container) {

        if(container.classList.contains("active")) {
            container.style.height = "auto"
            setTimeout(()=> {
                container.style.height = container.clientHeight + "px"
            },100)
        }
    })
})

function addSlideDownAndUp (buttonClass) {
    document.addEventListener( 'DOMContentLoaded', function () {
        const buttons = document.getElementsByClassName(buttonClass)
        Array.from(buttons).forEach(function (button) {
            let container = button.parentElement.children[1]
            buttonEventOnOffers(button,container)
        })
    })
}

window.addEventListener('resize', function () {
    const buttons = document.getElementsByClassName("pointRow")
    Array.from(buttons).forEach(function (button) {
        let container = button.parentElement.children[1]

        if(container.classList.contains('active')) {
            container.style.height = "auto"

            container.style.height = container.clientHeight + "px"
        }
    })
});

function buttonEventOnOffers (button, container) {
    button.addEventListener('click', () => {
        if( button.classList.contains("active")) {
            button.classList.remove("active")
            button.children[1].classList.remove("active")
        } else {
            button.classList.add("active")
            button.children[1].classList.add("active")
        }

        /** Slide down. */
        if(!container.classList.contains('active')) {
            container.classList.add('active')
            container.style.height = "auto"

            container.parentElement.classList.add('active')

            let height = container.clientHeight + "px"

            container.style.height = "0px"

            setTimeout(() => {
                container.style.height = height
            }, 0)
            /** Slide up. */
        } else {
            container.style.height = container.clientHeight + "px"
            container.style.height = "0px"

            container.addEventListener('transitionend', () => {
                container.classList.remove('active')
                container.parentElement.classList.remove('active')
            }, {once: true})
        }
    })
}

function modalButtons () {
    document.addEventListener( 'DOMContentLoaded', function () {
        const buttons = document.querySelectorAll('[data-modal]');

        Array.from(buttons).forEach(function (button) {
            button.addEventListener("click",() => {
                document.getElementById("modalBackground").classList.remove("modalBackgroundHidden")
                document.getElementById(button.dataset.modal).classList.remove("modalWrapperHidden")
            })

        })
    })
}

function closeModal () {
    document.addEventListener( 'DOMContentLoaded', function () {
        const buttons = document.getElementsByClassName("close")
        Array.from(buttons).forEach(function (button) {
            button.addEventListener("click",() => {
                button.parentElement.parentElement.parentElement.classList.add("modalWrapperHidden")
                setTimeout(() => {
                    document.getElementById("modalBackground").classList.add("modalBackgroundHidden")
                },200)
            })
        })
    })
}

function closeModalBack () {
    document.addEventListener( 'DOMContentLoaded', function () {
        const buttons = document.getElementsByClassName("modalWrapper")
        Array.from(buttons).forEach(function (button) {
            button.addEventListener("click",(event) => {
                if(event.target === button) {
                    button.classList.add("modalWrapperHidden")
                    setTimeout(() => {
                        document.getElementById("modalBackground").classList.add("modalBackgroundHidden")
                    },200)
                }
            })
        })
    })
}

document.addEventListener( 'DOMContentLoaded', function () {
    const buttons = document.getElementsByClassName("buttonScroll")

    Array.from(buttons).forEach(function (button) {
        button.addEventListener("click", function() {
            console.log(button.dataset.scroll)
            document.getElementById(button.dataset.scroll).scrollIntoView({ behavior: 'smooth' });
        })
    })
});


addSlideUp("moreButton");
addSlideDownAndUp("pointRow");
modalButtons();
closeModal()
closeModalBack()

AOS.init({
    easing: 'ease-in-out-sine',
    duration: 500
});

