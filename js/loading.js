document.onreadystatechange = subSomething;

function subSomething() {
    if (document.readyState == "complete") {

        $(".loading").fadeOut();
        document.body.style.overflow = 'auto';
    }
}