import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

function Media() {
  const [hoveredCard, setHoveredCard] = useState(null); // pour gérer le survol

  const cardStyle = (isHovered) => ({
    width: '18rem',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: isHovered
      ? '0 12px 25px rgba(0,0,0,0.3)'
      : '0 8px 16px rgba(0,0,0,0.2)',
    transform: isHovered ? 'scale(1.03)' : 'scale(1)',
    transition: 'all 0.3s ease',
    border: 'none',
    borderRadius: '12px',
    overflow: 'hidden',
  });

  const imageStyle = (isHovered) => ({
    height: '180px',
    objectFit: 'cover',
    transform: isHovered ? 'scale(1.08)' : 'scale(1)',
    transition: 'transform 0.4s ease',
  });

  const bodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  };

  const textStyle = {
    flex: 1,
  };

  const buttonStyle = {
    backgroundColor: '#0d6efd',
    border: 'none',
    transition: 'all 0.3s ease',
  };

  const prixStyle = {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#0ec758ff',
    marginBottom: '10px',
    backgroundColor: '#e8f5e9',
    padding: '5px 10px',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: 'inset 0 0 5px rgba(0,0,0,0.1)',
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: '40px 0 10px 0',
    position: 'relative',
  };

  const underlineStyle = {
    width: '100px',
    height: '8px',
    backgroundColor: '#FF6347',
    margin: '10px auto 0',
    borderRadius: '2px',
  };

  const products = [
    {
      id: 1,
      title: 'Ray-Ban Round',
      img: 'https://media.mykenza.tn/uploads/2022/09/Lunette-de-Soleil-Homme-et-Femme-Ray-Ban-Round-RB3447-0013F-prix-Tunisie.jpg',
      desc: 'Lunette de soleil Unisexe – Référence :RB344 – Forme :Rond – Style : Sport – Cadre :Métal',
      price: '320 TND',
    },
    {
      id: 2,
      title: 'Cartier',
      img: 'https://www.lunette-opticien-paris.com/wp-content/uploads/2025/02/Lunettes-de-soleil-Cartier-CT0439S-002-L-1.webp',
      desc: 'Cartier branche corne – Référence : CT0439S-001 – Taille : L – Verres facettés',
      price: '850 TND',
    },
    {
      id: 3,
      title: 'Dior',
      img: 'https://assets.christiandior.com/is/image/diorprod/CDIRS5IXR25D2_E03?$default_GHC$&crop=68,663,1864,865&wid=1024&hei=1107&scale=0.4843&bfc=on&qlt=85',
      desc: 'Lunettes de soleil carrées effet écaille brun et miel — Signature Christian Dior dorée.',
      price: '720 TND',
    },
  ];

  return (
    <div>
      {/* 🔹 Titre */}
      <div style={titleStyle}>
        Nos Lunettes de Soleil
        <div style={underlineStyle}></div>
      </div>

      {/* 🔹 Cartes */}
      <div
        style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: '20px',
        }}
      >
        {products.map((p) => (
          <Card
            key={p.id}
            style={cardStyle(hoveredCard === p.id)}
            onMouseEnter={() => setHoveredCard(p.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Card.Img
              variant="top"
              src={p.img}
              style={imageStyle(hoveredCard === p.id)}
            />
            <Card.Body style={bodyStyle}>
              <Card.Title>{p.title}</Card.Title>
              <Card.Text style={textStyle}>{p.desc}</Card.Text>
              <div style={prixStyle}>{p.price}</div>

              <Button
                variant="primary"
                style={buttonStyle}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#084298';
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#0d6efd';
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Commande
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Media;
