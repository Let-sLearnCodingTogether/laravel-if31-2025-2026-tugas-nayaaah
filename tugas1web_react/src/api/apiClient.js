import axios from "axios";

// Membuat instance Axios dengan konfigurasi default
const apiClient = axios.create({
    // URL dasar untuk semua permintaan ke API kita
    baseURL: 'http://127.0.0.1:8000/api', 
    // Header default yang akan dikirim pada setiap permintaan
    headers: {
        "Accept": "application/json"
    }
});

export default apiClient;