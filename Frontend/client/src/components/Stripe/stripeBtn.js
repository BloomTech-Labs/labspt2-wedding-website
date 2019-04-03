import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeBtn = () => {
  const publishableKey = 'pk_test_hZ2cDD8WczHuPKhNyDhiIYsI'

  const onToken = token => {
    const body = {
      amount: 999,
      token: token,
    }
   
    axios
      .post('http://localhost:3700/stripe', body)
      .then(response => {
        console.log(response)
        alert('Payment Success')
      })
      .catch(error => {
        console.log('Payment Error: ', error)
        alert('Payment Error')
      })
  }
  return (
    <StripeCheckout
      label='Go Premium' //Component button text
      name='Join Our Big Day LLC' //Modal Header
      description='Let me upgrade you.'
      panelLabel='Go Premium' //Submit button in modal
      amount={999} //Dummy amount in cents $9.99
      token={onToken}
      stripeKey={publishableKey}
      billingAddress={false}
      allowRememberMe={false}

    />
  )
}
export default StripeBtn
