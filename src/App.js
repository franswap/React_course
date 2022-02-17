import { useState } from "react"
import { Table } from "./components/Table"
import { Formulaire } from "./components/Formulaire"

export const App = () => {
  const [isVisible, setisVisible] = useState(true)

  return (
    <main className="container my">
      <div className="d-flex align-items-center justify-content-between">
        <h1>Intranet</h1>
        <button className="btn btn-dark">Ajouter un employé</button>
      </div>

        {isVisible && (
      
      <Formulaire />

        )}

      <Table />
    </main>
  )
}
