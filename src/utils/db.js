import { supabase } from '../lib/supabase'

// === PRODUITS ===
export const getAllPerfumes = async () => {
  try {
    const { data, error } = await supabase
      .from('perfumes')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Erreur lors de la récupération des parfums:', error)
    return []
  }
}

export const createPerfume = async (perfume) => {
  try {
    const { data, error } = await supabase
      .from('perfumes')
      .insert([perfume])
      .select()
    
    if (error) throw error
    return data[0]
  } catch (error) {
    console.error('Erreur lors de la création du parfum:', error)
    throw error
  }
}

export const updatePerfume = async (id, updates) => {
  try {
    const { data, error } = await supabase
      .from('perfumes')
      .update(updates)
      .eq('id', id)
      .select()
    
    if (error) throw error
    return data[0]
  } catch (error) {
    console.error('Erreur lors de la mise à jour du parfum:', error)
    throw error
  }
}

// === COMMANDES ===
export const createOrder = async (orderData) => {
  try {
    const { data, error } = await supabase
      .from('orders')
      .insert([orderData])
      .select()
    
    if (error) throw error
    return data[0]
  } catch (error) {
    console.error('Erreur lors de la création de la commande:', error)
    throw error
  }
}

export const createOrderItems = async (orderItems) => {
  try {
    const { data, error } = await supabase
      .from('order_items')
      .insert(orderItems)
      .select()
    
    if (error) throw error
    return data
  } catch (error) {
    console.error('Erreur lors de la création des items de commande:', error)
    throw error
  }
}

// === LISTE DE SOUHAITS ===
export const addToWishlist = async (userId, perfumeId) => {
  try {
    const { data, error } = await supabase
      .from('wishlist')
      .insert([{ user_id: userId, perfume_id: perfumeId }])
      .select()
    
    if (error) throw error
    return data[0]
  } catch (error) {
    console.error('Erreur lors de l\'ajout à la wishlist:', error)
    throw error
  }
}

export const removeFromWishlist = async (userId, perfumeId) => {
  try {
    const { error } = await supabase
      .from('wishlist')
      .delete()
      .eq('user_id', userId)
      .eq('perfume_id', perfumeId)
    
    if (error) throw error
    return true
  } catch (error) {
    console.error('Erreur lors de la suppression de la wishlist:', error)
    throw error
  }
}

export const getUserWishlist = async (userId) => {
  try {
    const { data, error } = await supabase
      .from('wishlist')
      .select(`
        *,
        perfumes (*)
      `)
      .eq('user_id', userId)
    
    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Erreur lors de la récupération de la wishlist:', error)
    return []
  }
}

// === NEWSLETTER ===
export const subscribeToNewsletter = async (email) => {
  try {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email, subscribed_at: new Date().toISOString() }])
      .select()
    
    if (error) throw error
    return data[0]
  } catch (error) {
    console.error('Erreur lors de l\'inscription à la newsletter:', error)
    throw error
  }
}