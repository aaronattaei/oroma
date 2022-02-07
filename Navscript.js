
    function openNav() {

        if (window.innerWidth < 700) {
            document.getElementById("side-bar").style.width = "100%";
            document.getElementById("content-area").style.overflow = "hidden";
            document.body.style.position = 'sticky';
            document.body.style.top = `-${window.scrollY}px`;
            document.getElementById("side-bar-overlay").style.visibility = "visible";
            
        }
        else {
            document.getElementById("side-bar").style.width = "300px";
            document.getElementById("content-area").style.overflow = "hidden";
            document.body.style.scrollSnapStop = 'fixed';
            document.body.style.top = `-${window.scrollY}px`;
            document.getElementById("side-bar-overlay").style.visibility = "visible";
        }
    }

    function closeNav() {
    document.getElementById("side-bar").style.width = "0";
    document.getElementById("content-area").style.marginLeft = "0";
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.getElementById("side-bar-overlay").style.visibility = "hidden";

    }