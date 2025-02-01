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

document.addEventListener("DOMContentLoaded", function () {
    let imageFiles = [
        "assignment_grind.jpeg",
        "Capstone_buddies.jpeg",
        "Escape_room_artists.jpeg",
        "This_is_definity_broken.jpeg",
        "Wise_words.jpeg",
        "Conquered.jpeg",
        "Yum.jpeg"
    ];

    // Add image1 to image23 dynamically
    for (let i = 1; i <= 23; i++) {
        imageFiles.push(`image${i}.jpeg`);
    }

    // Shuffle the array to randomize image order
    imageFiles.sort(() => Math.random() - 0.5);

    let gallery = document.getElementById("gallery");

    if (gallery) {
        imageFiles.forEach(file => {
            let imgContainer = document.createElement("div");
            imgContainer.classList.add("img-container");

            let img = document.createElement("img");
            img.src = "photos/" + file;
            img.alt = "Life photo";
            img.classList.add("life-photo");

            imgContainer.appendChild(img);

            // Extract filename without extension
            let fileName = file.split(".")[0];

            // Check if filename is NOT image1-23 (only named images get captions)
            if (!/^image\d+$/.test(fileName)) {
                let caption = document.createElement("p");
                caption.classList.add("photo-caption");
                caption.textContent = fileName.replace(/_/g, " ").replace(/!/, ""); // Format title
                imgContainer.appendChild(caption);
            }

            gallery.appendChild(imgContainer);
        });
    }
});
