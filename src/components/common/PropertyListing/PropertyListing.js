import React from 'react';
import PropertyCard from '../PropertyCard';

function PropertyListing({ 
  data, 
  type, 
  title,
  className = '',
}) {
  // Desain responsif mobile-first
  // Grid akan berubah sesuai breakpoint
  return (
    <section className={`w-full px-4 py-6 ${className}`}>
      {title && (
        <h2 className="text-xl font-bold mb-4 text-gray-800 md:text-2xl">
          {title}
        </h2>
      )}
      
      <div className="grid grid-cols-1 gap-4 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5">
        {data.map((item) => (
          <PropertyCard
            key={item.id}
            type={type}
            data={item}
          />
        ))}
      </div>
    </section>
  );
}

export default PropertyListing;