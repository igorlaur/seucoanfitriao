Endpoint POST /api/contato

Body: form-data
- nome (string)
- email (string)
- mensagem (string)

Requer variáveis no ambiente:
- RESEND_API_KEY
- RESEND_FROM (ex: "Seu Coanfitrião <contato@seucoanfitriao.com.br>")
- RESEND_TO
