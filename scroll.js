let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calHeight);

    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }

   
    
    // Set the conic gradient background
    scrollProgress.style.background = `conic-gradient(purple ${scrollValue}%, transparent ${scrollValue}%)`;
    
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
