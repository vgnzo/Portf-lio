// Script da página de Certificados
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card-certificado")
  const filtros = document.querySelectorAll(".filtro")
  const vazioMsg = document.querySelector(".vazio-msg")

  const modal = document.getElementById("modal-cert")
  const modalImagem = document.getElementById("modal-imagem")
  const modalTitulo = document.getElementById("modal-titulo")
  let ultimoFoco = null

  // ===== Animação de entrada =====
  const elementos = document.querySelectorAll(
    ".texto-certificados, .card-principal, .subtitulo-lista, .filtros, .card-certificado"
  )
  elementos.forEach((elemento, index) => {
    elemento.style.opacity = "0"
    elemento.style.transform = "translateY(20px)"
    elemento.style.transition = "opacity 0.6s ease, transform 0.6s ease"

    setTimeout(() => {
      elemento.style.opacity = "1"
      elemento.style.transform = "translateY(0)"
    }, index * 120)
  })

  // ===== Modal do certificado =====
  function abrirModal(caminho, titulo) {
    ultimoFoco = document.activeElement
    modalImagem.src = caminho
    modalImagem.alt = "Certificado: " + titulo
    modalTitulo.textContent = titulo
    modal.hidden = false
    document.body.classList.add("modal-aberto")
    modal.querySelector(".modal-fechar").focus()
  }

  function fecharModal() {
    modal.hidden = true
    modalImagem.src = ""
    document.body.classList.remove("modal-aberto")
    if (ultimoFoco) ultimoFoco.focus()
  }

  // Qualquer botão com data-cert abre o modal
  document.querySelectorAll("[data-cert]").forEach((botao) => {
    botao.addEventListener("click", () => {
      abrirModal(botao.dataset.cert, botao.dataset.titulo || "Certificado")
    })
  })

  // Fechar: X, fundo escuro ou Esc
  modal.querySelectorAll("[data-fechar]").forEach((el) => {
    el.addEventListener("click", fecharModal)
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) fecharModal()
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