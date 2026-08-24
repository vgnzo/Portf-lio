// Script da página de Certificados
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card-certificado")
  const filtros = document.querySelectorAll(".filtro")
  const vazioMsg = document.querySelector(".vazio-msg")

  // ===== Animação de entrada =====
  const elementos = document.querySelectorAll(".titulo-secao, .subtitulo, .filtros, .card-certificado")
  elementos.forEach((elemento, index) => {
    elemento.style.opacity = "0"
    elemento.style.transform = "translateY(20px)"
    elemento.style.transition = "opacity 0.6s ease, transform 0.6s ease"

    setTimeout(() => {
      elemento.style.opacity = "1"
      elemento.style.transform = "translateY(0)"
    }, index * 120)
  })

  // ===== Filtro por categoria =====
  filtros.forEach((botao) => {
    botao.addEventListener("click", () => {
      filtros.forEach((b) => b.classList.remove("ativo"))
      botao.classList.add("ativo")

      const alvo = botao.dataset.filtro
      let visiveis = 0

      cards.forEach((card) => {
        const categorias = (card.dataset.categoria || "").split(" ")
        const mostrar = alvo === "todos" || categorias.includes(alvo)

        card.hidden = !mostrar
        if (mostrar) visiveis++
      })

      vazioMsg.hidden = visiveis > 0
    })
  })
})