require('dotenv').config
const sendgrid = require('sendgrid').email
const sg = require('sendgrid')(process.env.SENDGRID_KEY)

module.exports = {
  sendVerificationEmail: (to, token) => {
    console.log('email verification fired')
    const hostUrl = process.env.HOST_URL
    const request = sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: {
        personalizations: [
          {
            to: [
              {
                email: to,
              },
            ],
            subject: 'Verify Your Email',
          },
        ],
        from: {
          email: 'no-reply@joinourbigday.com',
        },
        content: [
          {
            type: 'text/plain',
            value: `Click on this link to verify your email ${hostUrl}/verify?vtoken=${token}&email=${to}`,
          },
        ],
      },
    })
    return new Promise(function(resolve, reject) {
      sg.API(request, function(error, response) {
        if (error) {
          return reject(error)
        } else {
          return resolve(response)
        }
      })
    })
  },

  sendGuestEmail: (to, code, url) => {
    console.log('guest email fired')
    const hostUrl = process.env.HOST_URL
    const request = sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: {
        personalizations: [
          {
            to: [
              {
                email: to,
              },
            ],
            subject: 'Wedding RSVP',
          },
        ],
        from: {
          email: 'no-reply@joinourbigday.com',
        },
        content: [
          {
            type: 'text/plain',
            value: `You are invited to our Weeding, please rsvp with this code: ${code} ${hostUrl}/${url}`,
          },
        ],
      },
    })
    return new Promise(function(resolve, reject) {
      sg.API(request, function(error, response) {
        if (error) {
          console.log('sendgird err', error)
          return reject(error)
        } else {
          console.log('sendgird res', response.body.errors)
          return resolve(response)
        }
      })
    })
  },
}
