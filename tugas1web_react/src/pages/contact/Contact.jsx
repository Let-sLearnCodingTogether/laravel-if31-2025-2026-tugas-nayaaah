import http from "@api/apiClient";
import { useCallback, useEffect, useState } from "react"

export default function ContactsPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [contact, setQuotes] = useState([]);

    const fetchContacts = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await http.get("/contact");

            setContacts(response.data.data);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, [])

    useEffect(() => {
        fetchContacts()
    }, [fetchContacts])

    if (isLoading) {
        return <div>Loading...</div>
    } else {
        return <div className="container mx-auto space-y-5">
            <h1 className="font-semibold text-2xl">Contact</h1>
            <ul className="space-y-4 divide-y divide-zinc-200 dark:divide-zinc-700">
                {contact.map((contact) => (
                    <li key={contact.id} className="pt-4 p-5 border border-slate-300">
                        <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                            — {contact.name}
                            {contact.email && <span className="ml-1">({contact.email})</span>}
                            {contact.phone_number && <span className="ml-2 italic">• {contact.phone_number}</span>}
                        </div>
                        {contact.address && (
                            <span className="mt-2 inline-block text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
                                {contact.address}
                            </span>
                        )}
                        <div className="mt-5">
                            <Button onClick={() => deleteQuote(quote.id)}>Hapus</Button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    }
}