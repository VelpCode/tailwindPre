
const items = document.querySelectorAll(".accordian-item")


items.forEach(item => {

    item.addEventListener("click", () => {

        const toggleItem = item.querySelector(".toggle")
        const inLine = item.querySelector('.line')

        toggleItem.classList.toggle('hidden');
        line.classList.toggle('.hidden');
    })

})


