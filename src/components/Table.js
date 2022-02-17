import {Card} from "./Card"

export const Table = (props) => {
    return (
        <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Prenom</th>
            <th scope="col">Nom</th>
            <th scope="col">Mail</th>
            <th scope="col">Avatar</th>
          </tr>
        </thead>
        <tbody>
      
          <Card id="1"
          prenom="John" 
          nom="Snow" 
          mail="john.snow@nordist.com" 
          img="john-snow" />
      
          <Card id="2"
          prenom="Bob" 
          nom="De la jungle" 
          mail="Bob.delajungle@chaleur.com" 
          img="bobjungle" />
      
        </tbody>
        </table>
    )
}