import express from 'express'
import cors from 'cors'
import { Resend } from 'resend'
import 'dotenv/config'

const app = express()
const resend = new Resend(process.env.RESEND_API_KEY)

const TO_EMAIL = process.env.CONTACT_TO || 'matthieustudio@proton.me'
const FROM_EMAIL = process.env.CONTACT_FROM || 'onboarding@resend.dev'
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.post('/api/contact', async (req, res) => {
  const { name, email, projectType, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Champs obligatoires manquants.' })
  }

  const projectLabels = {
    vitrine: 'Site Vitrine',
    ecommerce: 'Boutique E-Commerce',
    automatisation: 'Automatisation / Sur-mesure',
    autre: 'Autre',
  }
  const projectLabel = projectLabels[projectType] || 'Non précisé'

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `[Portfolio] Nouveau contact de ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:560px;margin:auto;color:#111">
          <h2 style="border-bottom:2px solid #eee;padding-bottom:12px">
            Nouveau message depuis le portfolio
          </h2>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:10px 0;color:#555;width:130px"><strong>Nom</strong></td>
              <td style="padding:10px 0">${name}</td>
            </tr>
            <tr style="background:#f9f9f9">
              <td style="padding:10px 0;color:#555"><strong>E-mail</strong></td>
              <td style="padding:10px 0">
                <a href="mailto:${email}" style="color:#0070f3">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#555"><strong>Type de projet</strong></td>
              <td style="padding:10px 0">${projectLabel}</td>
            </tr>
          </table>
          <h3 style="margin-top:24px">Message</h3>
          <div style="background:#f4f4f5;padding:16px;border-radius:8px;white-space:pre-wrap;line-height:1.6">
            ${message}
          </div>
          <p style="margin-top:24px;color:#999;font-size:12px">
            Envoyé depuis matthieustudio.fr · Répondre directement à cet e-mail contacte ${name}.
          </p>
        </div>
      `,
    })

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Resend error:', err)
    return res.status(500).json({ error: "Erreur lors de l'envoi de l'e-mail." })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})