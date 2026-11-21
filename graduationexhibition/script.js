/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});


/* =========================
   CLOSE MOBILE MENU
========================= */

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });

});


/* =========================
   WORK FILTER
========================= */

const filters = document.querySelectorAll(".filter");
const workCards = document.querySelectorAll(".work-card");

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        // Remove active from all buttons
        filters.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active
        filter.classList.add("active");

        const category = filter.dataset.filter;

        workCards.forEach(card => {

            if (
                category === "all" ||
                card.dataset.category === category
            ) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* =========================
   WORK MODAL
========================= */

const modal = document.getElementById("workModal");

const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalDescription = document.getElementById("modalDescription");


function showWork(title, category, description) {

    modalTitle.textContent = title;

    modalCategory.textContent = category;

    modalDescription.textContent = description;

    modal.classList.add("show");

}


function closeWork() {

    modal.classList.remove("show");

}


/* =========================
   CLOSE MODAL BY CLICKING
   OUTSIDE
========================= */

modal.addEventListener("click", function(event) {

    if (event.target === modal) {

        closeWork();

    }

});


/* =========================
   CLOSE MODAL WITH ESC
========================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeWork();

    }

});