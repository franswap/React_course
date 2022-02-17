export const Card = (props) => {
    return (
        <tr className="align-middle">
        <td>{props.id}</td>
        <td>{props.prenom}</td>
        <td>{props.nom}</td>
        <td>{props.mail}</td>
        <td>
          <img className="img-fluid"
          src={`https://robohash.org/${props.img}.png?size=150x150`}
          />
        </td>
      </tr>  
    )
}