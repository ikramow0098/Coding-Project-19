// src/components/Gallery.tsx
import { useEffect, useState } from "react";
import TourCard from "./TourCard";

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
    fetch("https://course-api.com/react-tours-project")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        return res.json();
      })
      .then((data) => {
        setTours(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch tours", error);
        setLoading(false);
      });
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