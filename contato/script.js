// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".contato-card, .titulo-secao, .contato-info")
  elementos.forEach((elemento, index) => {
    elemento.style.opacity = "0"
    elemento.style.transform = "translateY(20px)"
    elemento.style.transition = "opacity 0.6s ease, transform 0.6s ease"

    setTimeout(() => {
      elemento.style.opacity = "1"
      elemento.style.transform = "translateY(0)"
    }, index * 200)
  })

  // Botão de Email - usando o href mailto diretamente
  const btnEmail = document.getElementById("btn-email")
  if (btnEmail) {
    btnEmail.addEventListener("click", (e) => {
      e.preventDefault() // Previne o comportamento padrão para adicionar confirmação

      // Confirmação antes de abrir o email
      const confirmar = confirm("Deseja abrir seu cliente de email para enviar uma mensagem?")

      if (confirmar) {
        // Abre o cliente de email
        window.location.href =
          "mailto:vinigcgaldino@gmail.com?subject=Contato%20via%20Portfólio&body=Olá%20Vinicius,%0A%0A"

        // Feedback visual após abrir
        setTimeout(() => {
          alert(
            "Cliente de email aberto! Se não abriu automaticamente, verifique se você tem um cliente de email configurado.",
          )
        }, 500)
      }

      console.log("Botão de email clicado - confirmação:", confirmar)
    })
  }

  // Botão LinkedIn
  const btnLinkedIn = document.querySelector(".contato-card a[href*='linkedin']")
  if (btnLinkedIn) {
    btnLinkedIn.addEventListener("click", (e) => {
      e.preventDefault() // Previne o comportamento padrão
      window.open("https://www.linkedin.com/in/vinicius-galdino-12a890344/", "_blank")
    })
  }

  // Botão GitHub
  const btnGitHub = document.querySelector(".contato-card a[href*='github']")
  if (btnGitHub) {
    btnGitHub.addEventListener("click", (e) => {
      e.preventDefault() // Previne o comportamento padrão
      window.open("https://github.com/vgnzo", "_blank")
    })
  }

  // Alternativa para o botão de email usando JavaScript (caso prefira)
  // Descomente as linhas abaixo se quiser usar JavaScript em vez do mailto direto
  /*
    const btnEmailJS = document.getElementById('btn-email');
    if (btnEmailJS) {
        btnEmailJS.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'mailto:vinigcgaldino@gmail.com?subject=Contato%20via%20Portfólio&body=Olá%20Vinicius,%0A%0A';
        });
    }
    */
})
