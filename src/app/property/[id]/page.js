// src/app/property/[id]/page.js

import AddressInfo from "@/components/sections/Property/AddressInfo";
import Gallery from "@/components/sections/Property/Gallery";
import Header from "@/components/sections/Property/Header";

const PropertyDetailPage = () => {
  // Sample property data
  const property = {
    id: 1,
    title: "Adora Luxe at Terravia",
    price: "Rp4.484.253.000",
    type: "Dijual",
    developer: "Sinarmas Land",
    images: [
      {
        src: "https://images.pexels.com/photos/2437286/pexels-photo-2437286.jpeg",
        alt: "Image 1",
      },
      {
        src: "https://images.pexels.com/photos/4513940/pexels-photo-4513940.jpeg",

        alt: "Image 2",
      },
      {
        src: "https://images.pexels.com/photos/2893670/pexels-photo-2893670.jpeg",
        alt: "Image 3",
      },
    ],
    labels: ["CCTV", "Jogging Track", "Security", "Supermarket"],
    address: "Sinarmas Land",
    city: "BSD City",
    area: "Pagedangan",
    country: "Indonesia",
    description:
      "Discover unrivaled luxury and comfort at Terravia Adora Luxe! This dream home, spanning 190 m² on a 112 m² plot, offers 5+1 bedrooms and 2 Ensuite bedrooms. Embrace a modern, eco-friendly lifestyle with sustainable design features, including Smart Door Locks and Air Purifiers.",
  };

  return (
    <div className="container mx-auto px-4 py-6">
        
      <Gallery images={property.images} />
      <Header 
        title={property.title}
        price={property.price}
        type={property.type}
        city={property.city}
        country={property.country}
        developer={property.developer}
      />
      <AddressInfo
        address={property.address}
        city={property.city}
        area={property.area}
        country={property.country}
      />
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Description</h2>
        <p className="text-sm">{property.description}</p>
      </div>
      {/* Add other sections */}
    </div>
  );
};

export default PropertyDetailPage;
