import axios from 'axios'

export default async function handler(req, res) {
    try {
        const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
            service_id: 'service_hksddal',
            template_id: 'template_4o1nmrp',
            user_id: 'cJtO8wfauBC7j8mbh',
            accessToken: "v7dnb7iEpjrBjmQCpKXHp",
            template_params: {
                'to_name': 'Touseef Haider',
                'from_name': req.body.name,
                'message': req.body.message
            }
        })
        return res.status(200).json({ message: response.data })
    } catch (err) {
        return res.status(error.response?.status || 500).json({ message: 'Email sending failed' });

    }
}