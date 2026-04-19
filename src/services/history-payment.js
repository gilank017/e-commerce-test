import api from '../plugin/axios'

export const getListHistoryPayment = async () => {
  try {
    const res = await api.get('/transactions')
    return res.data
  } catch (err) {
    throw err
  }
}

export const addTransaction = async (data) => {
  try {
    const res = await api.post('/transactions', data)
    return res.data
  } catch (err) {
    throw err
  }
}