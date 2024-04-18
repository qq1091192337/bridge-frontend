import axios from 'axios';

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export function sendContactForm(data: ContactFormData) {
    return axios.post('/api/contact/form', data);
}
