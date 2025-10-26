import React from 'react'
import { useState, useEffect, useCallback } from 'react';
import apiClient from '../api/apiClient.js';

export default function ListContact() {
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        address: ''
    });

    const handleInputChange = async (event) => {
        const {value, name} = event.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            setLoading(true)

            const response = await apiClient.post('/expenses', formData)

            console.log(response)

            if (response.status === 201) {
                setFormData({
                    name: '',
                    email: '',
                    phone_number: '',
                    address: ''
                });
                
            }

        } catch (error) {
            console.error(error);
        }finally {
            setLoading(false)
        }
    };

  return (
    <div>
        <h1>Input Contact</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input name='name' type="text" placeholder="name" value={formData.name} onChange={handleInputChange} />
            </div>
            <div>
                <label>Email:</label>
                <input name='email' type="text" placeholder="email" value={formData.email} onChange={handleInputChange} />
            </div>
            <div>
                <label>Phone Number:</label>
                <input name='phone_number' type="number" placeholder="phone_number" value={formData.phone_number} onChange={handleInputChange} />
            </div>
            <div>
                <label>Address:</label>
                <input name='address' type="text" placeholder="address" value={formData.address} onChange={handleInputChange} />
            </div>
            <button type="submit">Simpan</button>
        </form>
        
    </div>
  )
}