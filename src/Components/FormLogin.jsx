import React, { useState, useContext } from "react";
import Axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const apiURL = process.env.REACT_APP_API_URL;

function FormLogin() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const submit = async (e) => {
    e.preventDefault();  // empêche le rechargement de la page 
    setError(null); // reset erreur à chaque tentative

    try {
      const res = await Axios.post(`${apiURL}/api/custom_login_check`,
        { 
          email: data.email, 
          password: data.password 
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );      

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
        <p>Pas&nbsp;encore&nbsp;inscrit?</p>
      </div>
      <div className="registerLink ">
        <Link to="/LiveEvents/Register">
          <Button   className="registerLinka " variant="link" size="lg">                
            <p>S'enregistrer</p>                  
          </Button>
        </Link>
      </div>
    </>
  );
}

export default FormLogin;
