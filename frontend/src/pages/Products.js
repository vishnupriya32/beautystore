import React from 'react';
import './Products.css';

const Products = () => {
  // Example product list. Replace this with data fetched from an API or database.
  const products = [
    { id: 1, name: 'Face Cream', description: 'Ayurvedic beauty products are often made using sustainable practices, including eco-friendly packaging and ethical sourcing of ingredients. This helps reduce your environmental footprint.', price: 'Rs.25', img: 'https://th.bing.com/th/id/R.d9c72c63bb707127219c47024fd9d467?rik=%2fbt87Of0tV5vtg&riu=http%3a%2f%2fwww.leafmonk.com%2fcdn%2fshop%2ffiles%2fDSC_6369_1200x1200.jpg%3fv%3d1684926964&ehk=RRkL7bOzvWi7Puu0M%2f9F8Zd5SZlSTYZiXfuY1JnP75E%3d&risl=&pid=ImgRaw&r=0' },
    { id: 2, name: 'Shampoo', description: 'Ayurvedic beauty products are often made using sustainable practices, including eco-friendly packaging and ethical sourcing of ingredients. This helps reduce your environmental footprint.', price: 'Rs.1578', img: 'https://th.bing.com/th/id/OIP.wmPX25LFwPFSNWrVd6M3SgHaHa?w=800&h=800&rs=1&pid=ImgDetMain' },
    { id: 3, name: 'Body-Lotion', description: 'Ayurvedic beauty products are often made using sustainable practices, including eco-friendly packaging and ethical sourcing of ingredients. This helps reduce your environmental footprint.', price: 'Rs.599', img: 'https://cdn.shopify.com/s/files/1/0579/0262/9029/files/Lip_Range_Square.jpg?v=1627717216' },
    { id: 3, name: 'Lip Balm', description: 'Ayurvedic beauty products are often made using sustainable practices, including eco-friendly packaging and ethical sourcing of ingredients. This helps reduce your environmental footprint.', price: 'Rs.566', img: 'https://th.bing.com/th/id/R.33d16c3da8fb6f1ed4d019e2c14296d1?rik=UrZDpiH9Miyo%2fw&riu=http%3a%2f%2farcadevoice.com%2fwp-content%2fuploads%2f2016%2f09%2fayurvedic-products-for-skin.jpg&ehk=82u%2baAuDzTK%2fuRIDuhYEm2mpIIRRjGn3gMt%2b1Meza9M%3d&risl=&pid=ImgRaw&r=0' },
    { id: 3, name: 'Sunscreen', description: 'Ayurvedic beauty products are often made using sustainable practices, including eco-friendly packaging and ethical sourcing of ingredients. This helps reduce your environmental footprint.', price: 'Rs.565', img: 'https://th.bing.com/th/id/OIP.oZ2vFszwLctCVg-rFuaDvgHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain' },
    { id: 3, name: 'Fashwash', description: 'Ayurvedic beauty products are often made using sustainable practices, including eco-friendly packaging and ethical sourcing of ingredients. This helps reduce your environmental footprint.', price: 'Rs.590', img: 'https://c.ndtvimg.com/2018-12/o24sqf0g_face-wash-650_625x300_11_December_18.jpg' },
    // Add more products as needed
  ];

  return (
    <div className="container mt-3">
      <h1 className='text-white p-3'>Beauty Products</h1>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4">
            <div className="card mb-3">
              <img src={product.img} style={{width:"355px",height:"300px"}} className="card-img-top align-items-center" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>{product.price}</strong></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
