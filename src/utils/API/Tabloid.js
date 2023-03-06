import Fetch from '.'

class TabloidModel {
  constructor() {
    this.BASE_SLUG = NEXT_PUBLIC_BASE_TABLOID
  }
  async get(slug = '') {
    try {
      return await Fetch.get(this.BASE_SLUG + slug)
    } catch (error) {
      return error
    }
  }
  async show(params) {
    if (!params) throw new Error('No ID Preserved')

    try {
      return await Fetch.get(this.BASE_SLUG + '/' + params)
    } catch (error) {
      return error
    }
  }

  async store(data) {
    if (!data) throw new Error('No Data Preserved')

    try {
      return await Fetch.get(this.BASE_SLUG, data)
    } catch (error) {
      return error
    }
  }

  async update(id, data) {
    if (!id) throw new Error('No ID Preserved')
    if (!data) throw new Error('No Data Preserved')

    try {
      return await Fetch.get(this.BASE_SLUG, data)
    } catch (error) {
      return error
    }
  }

  async delete(id) {
    if (!id) throw new Error('No ID Preserved')

    try {
      return await Fetch.get(this.BASE_SLUG)
    } catch (error) {
      return error
    }
  }
}

const Tabloid = new TabloidModel()

export default Tabloid
