// Script para página Sobre - Melhorias de interatividade
document.addEventListener("DOMContentLoaded", () => {
  console.log("Script da página Sobre carregado")

  const elementos = document.querySelectorAll(".titulo-secao, .sobre-conteudo, .habilidades-secao, .tecnologias-secao")
  elementos.forEach((elemento, index) => {
    elemento.style.opacity = "0"
    elemento.style.transform = "translateY(20px)"
    elemento.style.transition = "opacity 0.6s ease, transform 0.6s ease"

    setTimeout(() => {
      elemento.style.opacity = "1"
      elemento.style.transform = "translateY(0)"
    }, index * 200)
  })

  const habilidadeItems = document.querySelectorAll(".habilidade-item")
  habilidadeItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)"
      this.style.transition = "transform 0.3s ease"
    })

    item.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)"
    })
  })

  const techItems = document.querySelectorAll(".tech-item")
  techItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)"
      this.style.transition = "transform 0.2s ease"
    })

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })

  const navLinks = document.querySelectorAll("nav a")
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Apenas adiciona transição suave, não interfere na navegação
      this.style.transition = "color 0.3s ease"
    })
  })
})
