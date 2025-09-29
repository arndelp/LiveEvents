import React, { useState, useContext } from "react";
import Axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function FormLogin() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const url = "https://concertslives.store/api/custom_login_check";

  const submit = async (e) => {
    e.preventDefault();  // empêche le rechargement de la page 
    setError(null); // reset erreur à chaque tentative

    try {
      const res = await Axios.post(
        url,
        { email: data.email, password: data.password },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      console.log("Réponse du backend :", res.data);

      if (res.data.token) {
        // sauvegarde le token et les infos utilisateur dans le context
        login(res.data);

        // redirection vers la page d'accueil après login
        navigate("/LiveEvents/");
      } else {
        setError("Identifiants invalides.");
      }
    } catch (err) {      
      setError("Identifiants invalides.");
    }
  };

  const handle = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  return (
    <>
      <div className="contacth1">
        <h1>Se connecter</h1>
      </div>

      <form onSubmit={submit}>
        <Form.Group className="pb-5">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            className="field"
            id="email"
            type="email"
            value={data.email}
            onChange={handle}
            maxLength={40}
            required
          />

          <Form.Label htmlFor="password">Mot de passe</Form.Label>
          <Form.Control
            className="field"
            id="password"
            type="password"
            value={data.password}
            onChange={handle}
            maxLength={50}
            required
          />
            {/* affichage message d'erreur si erreur */}
          {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}

          <div className="submitbutton">
            <Button className="boutonSubmit" type="submit" variant="secondary" size="lg">
              Se connecter
            </Button>
          </div>
        </Form.Group>
      </form>

      <div className="registerLink ">
        <Link to="/LiveEvents/Register">
          <Button className="boutonSubmit" variant="link" size="lg">
            Pas&nbsp;encore&nbsp;inscrit?&nbsp;Créez&nbsp;un&nbsp;compte
          </Button>
        </Link>
      </div>
    </>
  );
}

export default FormLogin;
