document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor");
    const cursorTrail = document.querySelector(".cursor-trail");

    if (!cursor || !cursorTrail) {
        console.error("❌ ERREUR : Les éléments '.cursor' et '.cursor-trail' ne sont pas trouvés dans le DOM.");
        return;
    }

    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
    
    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Correction : Utiliser les vraies coordonnées de la souris
        cursor.style.left = `${mouseX - cursor.offsetWidth / 2}px`;
        cursor.style.top = `${mouseY - cursor.offsetHeight / 2}px`;
    });

    function animateCursorTrail() {
        trailX += (mouseX - trailX) * 0.15;
        trailY += (mouseY - trailY) * 0.15;
        
        // Correction du flou (garder le bon alignement)
        cursorTrail.style.left = `${trailX - cursorTrail.offsetWidth / 2}px`;
        cursorTrail.style.top = `${trailY - cursorTrail.offsetHeight / 2}px`;

        requestAnimationFrame(animateCursorTrail);
    }
    animateCursorTrail();
});
