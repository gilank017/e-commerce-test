import api from '../plugin/axios'

export const getListProvider = async (params) => {
  try {
    const res = await api.get('/providers', { params })
    return res.data
  } catch (err) {
    throw err
  }
}