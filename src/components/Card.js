export const Card = (props) => {
    return (
        <tr className="align-middle">
        <td>{props.id}</td>
        <td>{props.prenom}</td>
        <td>{props.nom}</td>
        <td>
            <a href={`mailto:${props.mail}`}>{props.mail}</a>
        </td>
        <td>
          <img className="img-fluid"
          src={`https://robohash.org/${props.img}.png?size=150x150`}
          />
        </td>
        <td><a className="btn btn-primary" href="#"> Voir le profil </a>
        </td>
      </tr>  
    )
}