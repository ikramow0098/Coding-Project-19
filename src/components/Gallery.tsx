// src/components/Gallery.tsx
import { useEffect, useState } from "react";
import TourCard from "./TourCard";
import { tours as tourData } from "../data";


type Tour = {
  id: string;
  name: string;
  info: string;
  price: string;
  image: string;
};

type Props = {
  tours: Tour[];
  setTours: React.Dispatch<React.SetStateAction<Tour[]>>;
  onRemove: (id: string) => void;
};

export default function Gallery({ tours, setTours, onRemove }: Props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTours(tourData);
    setLoading(false);
  }, []);
  
    if (loading) {
      return <main><h2>Loading...</h2></main>;
    }
    
    return (
      <section className="gallery">
        {tours.map((tour) => (
          <TourCard key={tour.id} {...tour} onRemove={onRemove} />
        ))}
      </section>
    );
  }    