import { useState } from "react"


function App() {

  const [valor1, setValor1] = useState()
  const [valor2, setValor2] = useState()

  function valorS1(v){
    setValor1(v)
  }

  function valorS2(v){
    setValor2(v)
  }

 function executar(){
   console.log(valor1)
   console.log(valor2)
 }
 

  return (
    <>
    <main className="flex justify-center mt-5">

        <form onSubmit={v => v.preventDefault()} className="p-5 rounded-2xl shadow flex flex-col gap-2.5">
         <input onChange={v => valorS1(v.target.value)} className="p-2 border rounded-2xl" type="text" />
         <input onChange={v => valorS2(v.target.value)} className="p-2 border rounded-2xl" type="text" />
         <button onClick={executar} className="border rounded-2xl hover:bg-gray-300">Enviar</button>
        </form>

    </main>
    </>
  )
}

export default App
