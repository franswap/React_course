import {Card} from "./Card"


export const Table = (props) => {

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
                props.listEmployes.map(employes => <Card 

                    
                    key= {employes.id}
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