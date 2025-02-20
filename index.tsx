import { createFileRoute, Link } from '@tanstack/react-router'
import {useState} from 'react'
export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="p-2">
      <h3>
        <Link to="/defered" className="hover:text-blue-600 hover:underline">
        Rama Card Breaks LLC
        </Link>
      </h3>
    </div>
  )
}

export function BaseballBoxForm() {
  const [formData, setFormData] = useState({
    boxType: '',
    year: '',
    brand: '',
    specialInstructions: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-2xl mb-4">Baseball Box Opening Request</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="boxType" className="block mb-2">Box Type:</label>
          <input
            type="text"
            id="boxType"
            name="boxType"
            value={formData.boxType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="e.g., Hobby Box, Retail Box"
            required
            />
            </div>
    
            <div className="mb-4">
              <label htmlFor="year" className="block mb-2">Year:</label>
              <input
                type="text"
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                placeholder="e.g., 2023"
                required
              />
            </div>
            <div className="mb-4">
        <label htmlFor="specialInstructions" className="block mb-2">Special Instructions:</label>
        <textarea
          id="specialInstructions"
          name="specialInstructions"
          value={formData.specialInstructions}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Any special requests for the box opening..."
          rows={3}
        />
      </div>

      <button 
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Submit Request
      </button>
    </form>
  </div>
);
}