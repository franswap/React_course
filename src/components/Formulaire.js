import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export const Formulaire = (props) => {
    const [prenom, setPrenom] = useState("")
    const [nom, setNom] = useState("")
    const [email, setMail] = useState("")

    // Fonction pour envoyer le formulaire
    const submit = (evt) => {
        evt.preventDefault()
        
        //chaque employes est un objet
        const newEmp = {
            id: uuidv4(),
            prenom: prenom,
            nom: nom,
            email:email,
            avatar: `https://robohash.org/${prenom+nom}.png?size=50x50&set=set1`,
        }
        
        props.ajoutEmploye ([newEmp,...props.listEmployes])
    }

    return (

      <form onSubmit={submit}>
      <div className="mb-3">
        <label 
        htmlFor="prenom" 
        className="form-label">
          Prénom
        </label>
        <input 
        Value={prenom} 
        onChange={(evt) => setPrenom(evt.target.value)}
        type="text" 
        className="form-control" 
        id="prenom" />
      </div>
      <div className="mb-3">
        <label htmlFor="nom" className="form-label">
          Nom
        </label>
        <input 
        type="text"  
        Value={nom}
        onChange={(evt) => setNom(evt.target.value)}
        className="form-control" 
        id="prenom" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Adresse Email
        </label>
        <input 
          type="email" 
          Value={email}
          onChange={(evt) => setMail(evt.target.value)}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Envoyer
      </button>
    </form>

    )

}