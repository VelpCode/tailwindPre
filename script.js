
const items = document.querySelectorAll(".accordian-item");

items.forEach(item => {
    item.addEventListener('click', () => {
        const toggle = item.querySelector('.toggle');
        const line = item.querySelector(".line");

        toggle.classList.toggle('hidden');
        line.classList.toggle('.hidden');
    })
})