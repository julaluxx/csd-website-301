document.addEventListener("DOMContentLoaded", () => {
    const filters = document.querySelectorAll("#filters button");
    const posts = document.querySelectorAll("#newses .news-post");

    filters.forEach(button => {
        button.addEventListener("click", () => {
            // เอา active ออกจากทุกปุ่ม
            filters.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const selected = button.dataset.filter;

            posts.forEach(post => {
                if (selected === "all") {
                    post.style.display = "block";
                } else {
                    post.style.display = post.classList.contains(selected) ? "block" : "none";
                }
            });
        });
    });
});