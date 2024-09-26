import React, {useState} from "react";
import config from "../../shared/api/config";

export const SendPhishingEmailFeature = () => {
    const [email, setEmail] = useState('');

    const handleSendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        await config.post('/phishing/send', {email});
        alert('sent')
        setEmail('');
    };

    return <>
        <form onSubmit={handleSendEmail} className="phishing-form">
            <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit">
                send
            </button>
        </form>
    </>
}