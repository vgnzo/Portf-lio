document.addEventListener("DOMContentLoaded", () => {
  const btnCV = document.querySelector(".btn-cv")

  if (btnCV) {
    btnCV.addEventListener("click", (e) => {
      fetch("assets/Curriculo.pdf")
        .then((response) => {
          if (response.ok) {
            console.log("CV encontrado, iniciando download...")
          } else {
            throw new Error("CV não encontrado")
          }
        })
    })
  }

  // Efeitos hover nos ícones sociais
  const iconesMenu = document.querySelectorAll(".menu-icones a")

  iconesMenu.forEach((icone) => {
    icone.addEventListener("mouseenter", () => {
      icone.style.transform = "scale(1.1)"
      icone.style.transition = "transform 0.3s ease"
    })

    icone.addEventListener("mouseleave", () => {
      icone.style.transform = "scale(1)"
    })
  })

  // Animação de entrada suave para os elementos
  const elementos = document.querySelectorAll(".texto-apresentacao, .foto-animada, .menu-icones")

  elementos.forEach((elemento, index) => {
    elemento.style.opacity = "0"
    elemento.style.transform = "translateY(20px)"
    elemento.style.transition = "opacity 0.6s ease, transform 0.6s ease"

    setTimeout(() => {
      elemento.style.opacity = "1"
      elemento.style.transform = "translateY(0)"
    }, index * 200)
  })
})