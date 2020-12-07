const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "images/FB_IMG_15995709697153414.jpg" },
  { name: "Voluptatem", image: "images/IMG_20200805_171219.jpg" },
  { name: "Explicabo", image: "images/IMG_20200805_171314.jpg" },
  { name: "Rchitecto", image: "images/IMG_20200805_171340.jpg" },
  { name: " Beatae", image: "images/IMG_20200805_171407.jpg" },
  { name: " Vitae", image: "images/IMG_20200805_171407.jpg" },
  { name: "Inventore", image: "images/IMG_20200805_171407.jpg" },
  { name: "Veritatis", image: "images/IMG_20200805_171407.jpg" },
  { name: "Accusantium", image: "images/IMG_20200805_171407.jpg" },
]

const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showCoffees)
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }
  