document.addEventListener('DOMContentLoaded', function(){
    const tocbox = document.querySelector('.toc-box');
    var headers = document.querySelectorAll('.subject-name');

    headers.forEach((h) => {
        let tocItem = document.createElement("li");
        tocItem.id = "toc-id-" + h.textContent;

        let itemLink = document.createElement("a");
        itemLink.classList.add("content-link");
        itemLink.textContent = h.textContent;

        tocItem.append(itemLink);

        tocItem.addEventListener('click', function(){
            h.scrollIntoView({
                behavior: 'smooth'
            });
        });

        tocbox.append(tocItem);
    });

    var contents = document.querySelectorAll('.subject, .item');

    setInterval(function(){
        var scrollPos = document.documentElement.scrollTop;
        var wh = window.innerHeight;

        Array.from(tocbox.querySelectorAll('li')).forEach(function(tocItem){
            tocItem.classList.remove('active');
        });

        var currHead;

        Array.from(headers).forEach(function(h){
            let headPos = h.getBoundingClientRect().top + window.scrollY - wh/2;

            if (scrollPos > headPos) currHead = h;
        });

        Array.from(contents).forEach(function(c){
            let contentPos = c.getBoundingClientRect().top + window.scrollY - wh;

            if (c.classList.contains("appear")) return;

            if (scrollPos < contentPos) return;

            c.classList.add('appear');
        });

        if (currHead != undefined){
            let tocLink = document.getElementById("toc-id-" + currHead.textContent);
            tocLink.classList.add('active');
        }
    }, 200);

    // Convert Skills / Technical Languages section comma-separated lists into beautiful interactive badges
    const targetSections = ["Skills", "Technical Languages"];
    targetSections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            const listItems = section.querySelectorAll(".item");
            listItems.forEach(item => {
                const paragraphs = item.querySelectorAll("p");
                paragraphs.forEach(p => {
                    const parentHeader = p.closest(".content-header");
                    if (!parentHeader && p.textContent.includes(",")) {
                        const skills = p.textContent.split(",").map(s => s.trim());
                        p.innerHTML = "";
                        skills.forEach(skill => {
                            const badge = document.createElement("span");
                            badge.className = "skill-badge";
                            badge.textContent = skill;
                            p.appendChild(badge);
                        });
                    }
                });
            });
        }
    });
});