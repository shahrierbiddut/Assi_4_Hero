const filterBtns = document.querySelectorAll('.filter-btn');

let currentFilter = "all";

// ====== FILTER BUTTON =====
filterBtns.forEach(btn => {
    btn.addEventListener("click", function() {

        filterBtns.forEach(b => {
            b.classList.remove("btn-primary");
            b.classList.add("btn-outline");
        });

        this.classList.add("btn-primary");
        this.classList.remove("btn-outline");

        currentFilter = this.dataset.filter;

        filterCards();
        updateCounts();
    });
});

// ====EVENT DELEGATION ====
document.addEventListener("click", function(e) {

    // INTERVIEW
    if (e.target.classList.contains("btn-success")) {

        const card = e.target.closest(".job-card");
        card.dataset.status = "interview";

        updateBadge(card, "interview");

        filterCards();
        updateCounts();
    }

    // REJECTED
    if (e.target.classList.contains("btn-error")) {

        const card = e.target.closest(".job-card");
        card.dataset.status = "rejected";

        updateBadge(card, "rejected");

        filterCards();
        updateCounts();
    }

    // DELETE
    if (e.target.closest(".fa-trash")) {

        const card = e.target.closest(".job-card");
        card.remove();

        filterCards();
        updateCounts();
    }
});

// ===== FILTER FUNCTION ========
function filterCards() {

    const jobCards = document.querySelectorAll('.job-card');
    let visibleCount = 0;

    jobCards.forEach(card => {

        if (currentFilter === "all") {
            card.style.display = "block";
            visibleCount++;
        } else if (card.dataset.status === currentFilter) {
            card.style.display = "block";
            visibleCount++;
        } else {
            card.style.display = "none";
        }

    });

    const noJobsMessage = document.getElementById("no-jobs-message");

    if (visibleCount === 0) {
        noJobsMessage.classList.remove("hidden");
    } else {
        noJobsMessage.classList.add("hidden");
    }
}

// ===== BADGE UPDATE =====
function updateBadge(card, status) {

    const badge = card.querySelector(".badge");

    badge.classList.remove("badge-warning", "badge-success", "badge-error");

    if (status === "interview") {
        badge.textContent = "INTERVIEW";
        badge.classList.add("badge-success");
    }

    if (status === "rejected") {
        badge.textContent = "REJECTED";
        badge.classList.add("badge-error");
    }
}

// ==== DASHBOARD COUNT =====
function updateCounts() {

    const total = document.querySelectorAll('.job-card').length;
    const interview = document.querySelectorAll('.job-card[data-status="interview"]').length;
    const rejected = document.querySelectorAll('.job-card[data-status="rejected"]').length;

    const processed = interview + rejected;

    document.getElementById("total-count").textContent = total;
    document.getElementById("interview-count").textContent = interview;
    document.getElementById("rejected-count").textContent = rejected;

    const progressText = document.getElementById("progress-count");

    if (currentFilter === "all") {
        progressText.textContent = total + " jobs";
    } else {
        progressText.textContent = processed + " of " + total + " jobs";
    }
}
updateCounts();