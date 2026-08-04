document.addEventListener("mousemove", function(e) {

    const particle = document.createElement("span");

    particle.className = "mouse-particle";

    document.body.appendChild(particle);

    particle.style.left = e.clientX + "px";
    particle.style.top = e.clientY + "px";

    let size = Math.random() * 8 + 3;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    let colors = [
        "#7c3cff",
        "#00d9ff",
        "#ffffff"
    ];

    let color = colors[Math.floor(Math.random() * colors.length)];

    particle.style.background = color;
    particle.style.color = color;


    particle.style.setProperty(
        "--x",
        (Math.random() - 0.5) * 100 + "px"
    );

    particle.style.setProperty(
        "--y",
        Math.random() * 100 + 50 + "px"
    );


    setTimeout(() => {
        particle.remove();
    }, 1000);

});