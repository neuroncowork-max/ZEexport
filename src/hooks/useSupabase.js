import { useState, useEffect } from 'react'
import { getAllPerfumes, createOrder, createOrderItems, subscribeToNewsletter } from '../utils/db'

// Hook pour gérer les parfums
export const usePerfumes = () => {
  const [perfumes, setPerfumes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const loadPerfumes = async () => {
    try {
      setLoading(true)
      const data = await getAllPerfumes()
      setPerfumes(data)
      setError(null)
    } catch (err) {
      setError(err.message)
      console.error('Erreur lors du chargement des parfums:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadPerfumes()
  }, [])

  return { perfumes, loading, error, refetch: loadPerfumes }
}

// Hook pour gérer les commandes
export const useOrders = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const processOrder = async (customerInfo, cartItems) => {
    try {
      setLoading(true)
      setError(null)

      // Créer la commande
      const orderData = {
        customer_name: customerInfo.name,
        customer_email: customerInfo.email,
        customer_phone: customerInfo.phone,
        customer_address: customerInfo.address,
        total_amount: cartItems.reduce((total, item) => total + (item.price * item.quantity), 0),
        status: 'pending',
        created_at: new Date().toISOString()
      }

      const order = await createOrder(orderData)

      // Créer les items de la commande
      const orderItems = cartItems.map(item => ({
        order_id: order.id,
        perfume_id: item.id,
        quantity: item.quantity,
        price: item.price,
        perfume_name: item.name
      }))

      await createOrderItems(orderItems)

      return { success: true, order }
    } catch (err) {
      setError(err.message)
      console.error('Erreur lors du traitement de la commande:', err)
      return { success: false, error: err.message }
    } finally {
      setLoading(false)
    }
  }

  return { processOrder, loading, error }
}

// Hook pour la newsletter
export const useNewsletter = () => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const subscribe = async (email) => {
    try {
      setLoading(true)
      await subscribeToNewsletter(email)
      setMessage('Inscription réussie ! Merci de vous être abonné.')
      return { success: true }
    } catch (err) {
      const errorMessage = err.message.includes('duplicate') 
        ? 'Cette adresse email est déjà abonnée.'
        : 'Erreur lors de l\'inscription. Veuillez réessayer.'
      
      setMessage(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  return { subscribe, loading, message, setMessage }
}