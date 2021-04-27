document.onreadystatechange = subSomething;

function subSomething() {
    if (document.readyState == "complete") {

        document.getElementById(".loading").style.display="none";
        document.body.style.overflow = 'auto';
    }
}
