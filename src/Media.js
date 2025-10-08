import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Media() {
    const cardStyle = {
    width: '18rem',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 10px 8px 0 rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19)',
  };

  const imageStyle = {
    height: '180px',
    objectFit: 'cover'
  };

  const bodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  };

  const textStyle = {
    flex: 1
  };
  return (
 <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' ,margin:'150px'}}>
      {/* card 1 */}
      <Card style={cardStyle}>
        <Card.Img variant="top"src="https://media.mykenza.tn/uploads/2022/09/Lunette-de-Soleil-Homme-et-Femme-Ray-Ban-Round-RB3447-0013F-prix-Tunisie.jpg"  style={imageStyle} />
        <Card.Body style={bodyStyle}>
          <Card.Title>Ray-Ban Round</Card.Title>
          <Card.Text style={textStyle}>                                                                                                               
           Lunette de soleil Unisexe de la Marque : Ray-Ban
          – Référence : RB3447 001/3F – Forme : Rond – Style : Sport – Matière du cadre : Métal 
          </Card.Text>
          <Button variant="primary">Commande</Button>
        </Card.Body>
      </Card>

     
      {/* card 1 */}
      <Card style={cardStyle}>
        <Card.Img variant="top" src="https://www.lunette-opticien-paris.com/wp-content/uploads/2025/02/Lunettes-de-soleil-Cartier-CT0439S-002-L-1.webp"style={imageStyle} />
        <Card.Body style={bodyStyle}>
          <Card.Title>CARTIER</Card.Title>
          <Card.Text style={textStyle}>
          Lunettes de soleil Cartier branche corne- Matériau de la lunette : Corne-Référence : CT0439S-001 Taille : L
          Caractéristiques des verres : Verres Facettés
          
         </Card.Text>
          <Button variant="primary">Commande</Button>
        </Card.Body>
      </Card>

       
      {/* card 1 */}
      <Card style={cardStyle}>
        <Card.Img variant="top" src="https://assets.christiandior.com/is/image/diorprod/CDIRS5IXR25D2_E03?$default_GHC$&crop=68,663,1864,865&wid=1024&hei=1107&scale=0.4843&bfc=on&qlt=85" style={imageStyle} />
        <Card.Body style={bodyStyle}>
          <Card.Title>DIOR</Card.Title>
          <Card.Text style={textStyle}> lunettes de soleil Dior-
           Référence: CDIRS5IXR_24L6Les - Lunettes de soleil carrées effet écaille brun et miel est sublimée par la signature Christian Dior en métal doré 
           
          </Card.Text>
          <Button variant="primary">Commande</Button>
        </Card.Body>
      </Card>
      

    
    </div>
    
    
  );
}

export default Media;
