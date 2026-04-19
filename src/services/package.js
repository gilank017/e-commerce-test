import api from '../plugin/axios'

export const getListPackages = async (params) => {
  try {
    const res = await api.get('/packages', { params })
    return res.data
  } catch (err) {
    throw err
  }
}