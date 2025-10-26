import http from "@api/apiClient";
import Button from "@components/ui/Button";
import Input from "@components/ui/Input";
import { useId, useState } from "react";

export default function CreateNewContact() {
    // State untuk menyimpan status loading
    const [isLoading, setIsLoading] = useState(false);
    
    // State untuk menyimpan data form
    const [form, setForm] = useState({
        id: "",
        name: "",
        email: "",
        phone_number: "",
        address: ""
    });
    const handleOnChange = (event) => {
        const { name, value } = event.target;

        setForm({
            ...form,
            [name]: value
        });
    }

    const onSubmit = async (event) => {
        event.preventDefault(); // Mencegah reload halaman
        try {
            setIsLoading(true);

            // Kirim data 'form' ke endpoint '/quotes'
            const response = await http.post("/contact", form);

            // Jika sukses (status 201 Created)
            if (response.status === 201) {
                // Arahkan kembali ke halaman utama
            }
        } catch (error) {
            console.error("Gagal menambahkan contact:", error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="container mx-auto">
            <form onSubmit={onSubmit}>
                <div className="space-y-3">
                    <Input id={useId()} name="name" value={form.name} onChange={handleOnChange} label="Name" placeholder="Name.." />
                    <Input id={useId()} name="email" value={form.email} onChange={handleOnChange} label="Email" placeholder="Email..." />
                    <Input id={useId()} name="phone_number" value={form.phone_number} onChange={handleOnChange} label="Phone_Nuumber" placeholder="Phone Number..." />
                    <Input id={useId()} name="address" value={form.address} onChange={handleOnChange} label="Address" placeholder="Address..." />
                    
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? "Saving..." : "Save"}
                    </Button>
                </div>
            </form>
        </div>
    )
}