import { config } from '@/config'

export const generateOwnerEmail = (
    name: string,
    phone: string,
    email: string,
    message: string = ''
): string => (
    `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; color: #333; direction: rtl; text-align: right;">
  <h2 style="color: #0070f3;">📩 פנייה חדשה מהאתר</h2>

  <p><strong>שם מלא:</strong> ${name}</p>
  <p><strong>טלפון:</strong> ${phone}</p>
  <p><strong>אימייל:</strong> ${email || 'לא סופק'}</p>

  <div style="margin-top: 24px; padding: 16px; background-color: #f9f9f9; border-right: 4px solid #0070f3;">
    <strong>📝 הודעה:</strong><br />
    ${message.replace(/\n/g, '<br />')}
  </div>

  <hr style="margin: 32px 0;" />

  <small style="color: #888;">
    הודעה זו נשלחה מטופס יצירת הקשר באתר שלך.
  </small>
</div>
    `
)

export const generateUserConfirmationEmail = (
    name: string,
    phone: string,
    message: string
) => (
    `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; color: #333; direction: rtl; text-align: right;">
  <h2 style="color: #0070f3;">שלום ${name}, פנייתך התקבלה!</h2>

  <p>קיבלנו את ההודעה שלך ונחזור אליך בהקדם האפשרי.</p>

  <div style="margin-top: 24px; padding: 16px; background-color: #f1f5f9; border-right: 4px solid #0070f3;">
    <p><strong>📞 טלפון:</strong> ${phone}</p>
    <p><strong>📝 הודעה:</strong><br />
      ${message.replace(/\n/g, '<br />')}
    </p>
  </div>

  <p style="margin-top: 32px;">
    בברכה,<br />
    ${config.businessName || 'הצוות שלנו'}
  </p>
</div>
    `
)

