import React, { useCallback } from 'react'
import { useEffect } from 'react';
import apiClient from '../api/apiClient.js';

export default function contact() {
    const [loading, setLoading] = React.useState(false);
    const [contact, setContact] = React.useState([]);

    const fetchContact = useCallback(async () => {
        try {
            setLoading(true)
            const response = await apiClient.get('/expenses');
            console.log(response.data);
            setContact(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await apiClient.delete(`/expenses/${id}`);
            if (response.status === 200) {
                fetchContact();
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchContact();
    }, [fetchContact]);

    return (
        <div>
            <h1>Lihat Contact</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contact.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <td>{index +1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone_number}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}