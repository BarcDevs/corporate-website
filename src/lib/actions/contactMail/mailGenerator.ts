export const generateOwnerEmail = (
    name: string,
    phone: string,
    email: string,
    message: string = ''
): string => (
    `
You’ve received a new message via the website:

👤 Name: ${name}
📞 Phone: ${phone}
✉️ Email: ${email}

📝 Message:
${message}

────────────────────────────
This message was sent from your website contact form.
  `
)

export const generateUserConfirmationEmail = (
    name: string,
    phone: string,
    message: string
) => ( `
Hi ${name},

Thank you for contacting us! We’ve received your message and will get back to you shortly.

Here’s a copy of your submitted message:
────────────────────────────
📞 Phone: ${phone}
📝 Message:
${message}
────────────────────────────

Best regards,  
${process.env.BUSINESS_NAME || 'Our Team'}
  `
)

