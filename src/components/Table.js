import { useState } from "react"
import {Card} from "./Card"
import {list} from "../data/Employés"

export const Table = (props) => {
    const [listEmployes, setListEmployes] = useState(list)

    return (
        <table className="table table-warning">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Prenom</th>
            <th scope="col">Nom</th>
            <th scope="col">Mail</th>
            <th scope="col">Avatar</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
            {
                listEmployes.map(employes => <Card 

                    id={employes.id}
                    prenom={employes.prenom}
                    nom={employes.nom} 
                    mail={employes.email}
                    img= {employes.avatar}
                    
                />)
            }
      
        </tbody>
        </table>
    )
}