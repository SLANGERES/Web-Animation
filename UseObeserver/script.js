const box = document.querySelectorAll(".box")
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle("show",entry.isIntersecting)
    })
})

box.forEach(boxs=>{
    observer.observe(boxs) 
    console.log(boxs)
})