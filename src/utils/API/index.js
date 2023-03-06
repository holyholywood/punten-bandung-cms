import axiosInstance from '../plugins/axios'

/**
 * Client handler for API communication
 */
class restClient {
  constructor() {
    this.BASE_URL = process.env.NEXT_PUBLIC_BASE_API
  }
  async get(url) {
    try {
      return await axiosInstance.get(this.BASE_URL + url).data
    } catch (error) {
      return error
    }
  }
  async post(url) {
    try {
      return await axiosInstance.post(this.BASE_URL + url).data
    } catch (error) {
      return error
    }
  }
  async patch(url) {
    try {
      return await axiosInstance.patch(this.BASE_URL + url).data
    } catch (error) {
      return error
    }
  }
  async delete(url) {
    try {
      return await axiosInstance.delete(this.BASE_URL + url).data
    } catch (error) {
      return error
    }
  }
}

const Fetch = new restClient()

export default Fetch
