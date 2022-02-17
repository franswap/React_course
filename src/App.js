import { useState } from "react"
import { Table } from "./components/Table"
import { Formulaire } from "./components/Formulaire"
import { list } from "./data/Employés"

export const App = () => {

  // On initialise une variable isVisible, avec pour valeur false.
  const [isVisible, setisVisible] = useState(false)
  const [listEmployes, setListEmployes] = useState(list)


  return (
    <main className="container my">
      <div className="d-flex align-items-center justify-content-between">
        <h1>Intranet</h1>
        <button onClick = {() => setisVisible(!isVisible)} className="btn btn-dark">Ajouter un employé</button>
      </div>

        {/* {isVisible ? <form /> : null */}
        {/* Si et seulement si, isVisible est true, le formulaire s'affichera */}
        {isVisible && 
        <Formulaire ajoutEmploye={setListEmployes} listEmployes={listEmployes} />
        }

      <Table listEmployes={listEmployes} />

    </main>
  )
}
