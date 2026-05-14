import { useState } from "react"

const NUMERO_DESTINO = "5581988151055"

function App() {
  const [valor1, setValor1] = useState("")
  const [valor2, setValor2] = useState("")
  function executar(e) {
    e.preventDefault()
    const conteudo = `Campo 1: ${valor1}\nCampo 2: ${valor2}`
    const linkImpressao = `${window.location.origin}/imprimir.html?msg=${encodeURIComponent(conteudo)}`
    const msg = `${conteudo}\n\nImprimir pedido: ${linkImpressao}`
    const url = `https://wa.me/${NUMERO_DESTINO}?text=${encodeURIComponent(msg)}`
    window.open(url, "_blank")
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

      </form>
    </main>
  )
}

export default App
