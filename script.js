// Smooth scrolling for internal links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = this.getAttribute('href');

        if (target.includes('.html')) {
            return; 
        }

        e.preventDefault();
        const section = document.querySelector(target);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Dynamically load images in the Life Gallery
document.addEventListener("DOMContentLoaded", function () {
    let imageFiles = [
        "assignment_grind.jpeg",
        "Capstone!.jpeg",
        "cat.jpeg",
        "Cool_vending_machine.jpeg",
        "Escape_room_artists.jpeg",
        "grin.jpeg",
        "kitty.jpeg",
        "Lego!.jpeg",
        "Mahjong.jpeg",
        "Plants.jpeg",
        "Shiba.jpeg",
        "This_is_definity_broken.jpeg",
        "two_shibas.jpeg",
        "Wise_words.jpeg",
        "Conquered.jpeg",
        "yum.jpeg"
    ];

    // Add image1 to image23 dynamically
    for (let i = 1; i <= 23; i++) {
        imageFiles.push(`image${i}.jpeg`);
    }

    let gallery = document.getElementById("gallery");

    if (gallery) {
        imageFiles.forEach(file => {
            let img = document.createElement("img");
            img.src = "photos/" + file;
            img.alt = "Life photo";
            img.classList.add("life-photo");
            gallery.appendChild(img);
        });
    }
});
