import React, { useEffect, useState } from 'react';

const ProdTable = () => {
  const [products, setProducts] = useState([]);

  // 📥 Fetch data
 const getProducts = async () => {
  try {
    const res = await fetch('http://localhost:5000/view');
    const data = await res.json();
    setProducts(data);
  } catch (err) {
    console.log(err);
  }
};

useEffect(() => {
  getProducts();
}, []);



 const handleDelete = async (id) => {

  const confirmDelete = window.confirm("Are you sure you want to delete this product?");

 
  if (!confirmDelete) return;

  try {
    const res = await fetch(`http://localhost:5000/catdel/${id}`, {
      method: 'DELETE',
    });

    const data = await res.json();

    if (data.success) {
      alert('Deleted Successfully');
      getProducts(); 
    }
  } catch (err) {
    console.log(err);
  }
};

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Products List</h2>

      <table className="w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Stock</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((item) => (
            <tr key={item._id} className="text-center">
              
              {/* 🖼 Image (optional) */}
             

              <td className="border p-2">{item.name}</td>
              <td className="border p-2">Rs {item.price}</td>
              <td className="border p-2">{item.stock}</td>

              <td className="border p-2">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProdTable;