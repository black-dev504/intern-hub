import React, { useEffect, useState } from 'react';
import Offer from './Offer';

const Offerlist = () => {
  const [offerData, setOfferData] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch('https://dummyjson.com/c/5775-b748-440f-988a'); 
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setOfferData(data); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }; 

    fetchOffers();
  }, []);

  if (loading) return <p>Loading offers...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {offerData.length === 0 ? (
        <p>No offers available at the moment.</p>
      ) : (
        offerData.map((offer, index) => (
          <Offer
            key={index}
            position={offer.position}
            company={offer.company}
            tags={offer.tags}
            description={offer.description}
            location={offer.location}
            price={offer.price}
          />
        ))
      )}
    </div>
  );
};

export default Offerlist;
