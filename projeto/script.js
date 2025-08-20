// Script para página de projetos
document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] Página de projetos carregada")

  const elementos = document.querySelectorAll(".titulo-secao, .card-projeto")
  elementos.forEach((elemento, index) => {
    elemento.style.opacity = "0"
    elemento.style.transform = "translateY(20px)"
    elemento.style.transition = "opacity 0.6s ease, transform 0.6s ease"

    setTimeout(() => {
      elemento.style.opacity = "1"
      elemento.style.transform = "translateY(0)"
    }, index * 200)
  })

  // Adicionar efeitos hover nos cards
  const cards = document.querySelectorAll(".card-projeto")
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)"
      this.style.transition = "transform 0.3s ease"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })

  // Adicionar funcionalidade aos botões
  const botoes = document.querySelectorAll(".btn, .btn2")
  botoes.forEach((botao) => {
    botao.addEventListener("click", function (e) {
      if (this.href === "#" || this.href.endsWith("#")) {
        e.preventDefault()
        alert("Link em desenvolvimento! Em breve estará disponível.")
      }
    })
  })
})
