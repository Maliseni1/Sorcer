import React, { useContext } from 'react'
import { track } from '@vercel/analytics'
import { plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'motion/react'
import { Buy } from '@coinbase/onchainkit/buy'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Button, Card, IconBadge } from '../components/ui'
import { theme } from '../styles/theme'

const BuyCredit = () => {
  const { user, backendUrl, token, loadCreditData, setShowLogin } = useContext(AppContext)

  const handlePaymentSuccess = async (plan) => {
    try {
      const { data } = await axios.post(`${backendUrl}/api/user/add-credits`, {
        credits: plan.credits
      }, { headers: { token } })

      if (data.success) {
        toast.success('Credits added successfully!')
        loadCreditData()
        track('Credits Purchased', { plan: plan.id, amount: plan.price, credits: plan.credits })
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error('Failed to add credits')
      console.error(error)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='min-h-[80vh] text-center pt-14 mb-10 px-4'
    >
      <Button variant="outline" className='px-10 py-2 mb-6'>
        Our Plans
      </Button>
      <h1 className={`text-center text-3xl font-medium mb-6 sm:mb-10 ${theme.text.heading}`}>
        Choose the plan
      </h1>

      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item, index) => (
          <Card
            key={index}
            className={`shadow-sm rounded-2xl py-12 px-8 ${theme.text.body} hover:scale-105 transition-all duration-500 w-72`}
          >
            <IconBadge
              className="mb-4"
              icon={
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" />
                </svg>
              }
            />
            <p className={`font-semibold text-lg ${theme.text.heading}`}>{item.id}</p>
            <p className='text-sm mt-1'>{item.desc}</p>
            <p className={`mt-6 ${theme.text.heading}`}>
              <span className='text-3xl font-bold'>${item.price}</span>
              <span className={`${theme.text.muted} text-sm`}> / {item.credits} credits</span>
            </p>

            {user ? (
              <Button
                as={Buy}
                productId={item.id}
                amount={item.price}
                recipient="0x59c773bFdeFb999084725937A12B27684A782676"
                onSuccess={() => handlePaymentSuccess(item)}
                className='w-full mt-8 text-sm py-3 min-w-0 hover:opacity-90 transition-opacity'
              >
                Purchase
              </Button>
            ) : (
              <Button
                onClick={() => setShowLogin(true)}
                className='w-full mt-8 text-sm py-3 hover:opacity-90 transition-opacity'
              >
                Get Started
              </Button>
            )}
          </Card>
        ))}
      </div>
    </motion.div>
  )
}

export default BuyCredit
