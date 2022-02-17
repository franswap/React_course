export const Formulaire = () => {
    return (

      <form>
      <div className="mb-3">
        <label htmlFor="prenom" className="form-label">
          Prénom
        </label>
        <input type="text" className="form-control" id="prenom" />
      </div>
      <div className="mb-3">
        <label htmlFor="nom" className="form-label">
          Nom
        </label>
        <input type="text" className="form-control" id="prenom" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Adresse Email
        </label>
        <input
          type="email"
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