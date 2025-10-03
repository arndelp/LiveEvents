import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function VerifyEmail() {
  const location = useLocation();
  const navigate = useNavigate();
  const [message, setMessage] = useState('Vérification en cours...');

  useEffect(() => {
    // Extraire l'ID du customer depuis l'URL, exemple: /verify/123/verify
    const pathParts = location.pathname.split('/');
    const customerId = pathParts[2]; // '/verify/{id}/verify'

    axios.get(`/verify/${customerId}/verify`)
      .then(response => {
        if (response.data.success) {
          setMessage(response.data.message);

          // Redirection vers l'URL fournie par le backend
          window.location.href = response.data.redirect;
        } else {
          setMessage(response.data.message || 'Erreur inconnue');
        }
      })
      .catch(error => {
        console.error(error);
        setMessage('Erreur lors de la vérification de l\'email.');
      });
  }, [location.pathname]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>{message}</h2>
      <p>Merci de patienter pendant la vérification de votre email...</p>
    </div>
  );
}
