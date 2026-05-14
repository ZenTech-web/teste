import { useState } from "react"

const NUMERO_DESTINO = "5581988151055"

function App() {
  const [valor1, setValor1] = useState("")
  const [valor2, setValor2] = useState("")
  const [mensagemGerada, setMensagemGerada] = useState("")

  function executar(e) {
    e.preventDefault()
    const msg = `Bem-vindo a Vivo! Seu novo número é ${NUMERO_DESTINO}.\nNome: ${valor1}\nDado: ${valor2}`
    setMensagemGerada(msg)
    const url = `https://wa.me/${NUMERO_DESTINO}?text=${encodeURIComponent(msg)}`
    window.open(url, "_blank")
  }

  function abrirImpressao() {
    const win = window.open("", "_blank")
    win.document.write(`
      <!DOCTYPE html>
      <html lang="pt-BR">
        <head>
          <meta charset="UTF-8" />
          <title>Impressão</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 60px; }
            h2 { color: #660099; }
            p { font-size: 1.1rem; margin-top: 20px; white-space: pre-line; }
          </style>
          <script>window.onload = () => window.print()</script>
        </head>
        <body>
          <h2>Vivo</h2>
          <p>${mensagemGerada.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
        </body>
      </html>
    `)
    win.document.close()
  }

  return (
    <main className="flex justify-center mt-5">
      <form onSubmit={executar} className="p-5 rounded-2xl shadow flex flex-col gap-2.5 w-80">
        <input
          value={valor1}
          onChange={e => setValor1(e.target.value)}
          placeholder="Campo 1"
          className="p-2 border rounded-2xl"
          type="text"
          required
        />
        <input
          value={valor2}
          onChange={e => setValor2(e.target.value)}
          placeholder="Campo 2"
          className="p-2 border rounded-2xl"
          type="text"
          required
        />
        <button type="submit" className="border rounded-2xl p-2 hover:bg-gray-300">
          Enviar
        </button>

        {mensagemGerada && (
          <button
            type="button"
            onClick={abrirImpressao}
            className="text-blue-600 underline text-sm cursor-pointer text-left"
          >
            Clique aqui para imprimir a mensagem
          </button>
        )}
      </form>
    </main>
  )
}

export default App
