import React, { useContext } from 'react'
import { track } from '@vercel/analytics'
import { plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'motion/react'
import { Buy } from '@coinbase/onchainkit/buy'
import axios from 'axios'
import { toast } from 'react-toastify'

const BuyCredit = () => {
  const { user, backendUrl, token, loadCreditData } = useContext(AppContext)

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
      <button className='border border-night/30 dark:border-cream/30 text-night/70 dark:text-cream/70 px-10 py-2 rounded-full mb-6 hover:bg-night/5 dark:hover:bg-cream/10 transition-colors'>
        Our Plans
      </button>
      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10 text-night dark:text-cream'>
        Choose the plan
      </h1>

      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item, index) => (
          <div
            key={index}
            className='bg-white dark:bg-cream/[0.04] shadow-sm border border-night/10 dark:border-cream/10 rounded-2xl py-12 px-8 text-night/60 dark:text-cream/60 hover:scale-105 transition-all duration-500 w-72'
          >
            <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-4">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-gold-dark dark:text-gold">
                <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" />
              </svg>
            </div>
            <p className='font-semibold text-lg text-night dark:text-cream'>{item.id}</p>
            <p className='text-sm mt-1'>{item.desc}</p>
            <p className='mt-6 text-night dark:text-cream'>
              <span className='text-3xl font-bold'>${item.price}</span>
              <span className='text-night/50 dark:text-cream/50 text-sm'> / {item.credits} credits</span>
            </p>

            {user ? (
              <Buy
                productId={item.id}
                amount={item.price}
                recipient="0x59c773bFdeFb999084725937A12B27684A782676"
                onSuccess={() => handlePaymentSuccess(item)}
                className='w-full bg-night dark:bg-gold text-cream dark:text-night mt-8 text-sm rounded-lg py-3 min-w-0 font-medium hover:opacity-90 transition-opacity'
              >
                Purchase
              </Buy>
            ) : (
              <button className='w-full bg-night dark:bg-gold text-cream dark:text-night mt-8 text-sm rounded-lg py-3 font-medium hover:opacity-90 transition-opacity'>
                Get Started
              </button>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default BuyCredit