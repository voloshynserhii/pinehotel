
interface AmenitiesProps {
  dict: {
    Home: {
      amenities: string;
      amenityRestaurant: string;
      amenityPool: string;
      amenityGardens: string;
      amenityParking: string;
    };
  };
}

export function Amenities({ dict }: AmenitiesProps) {
  return (
    <section className="py-section bg-white">
      <div className="container mx-auto px-gutter">
        <h2 className="text-4xl font-serif font-bold mb-12 text-center text-stone-900">
          {dict.Home.amenities}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">🍽️</div>
            <h3 className="font-serif text-xl font-bold mb-2 text-stone-900">
              {dict.Home.amenityRestaurant}
            </h3>
            <p className="text-stone-600 text-sm">
              La Ruta restaurant with local cuisine
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🏊</div>
            <h3 className="font-serif text-xl font-bold mb-2 text-stone-900">
              {dict.Home.amenityPool}
            </h3>
            <p className="text-stone-600 text-sm">Seasonal swimming pool</p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🌿</div>
            <h3 className="font-serif text-xl font-bold mb-2 text-stone-900">
              {dict.Home.amenityGardens}
            </h3>
            <p className="text-stone-600 text-sm">
              Beautiful gardens and outdoor spaces
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🅿️</div>
            <h3 className="font-serif text-xl font-bold mb-2 text-stone-900">
              {dict.Home.amenityParking}
            </h3>
            <p className="text-stone-600 text-sm">Complimentary parking</p>
          </div>
        </div>
      </div>
    </section>
  );
}
