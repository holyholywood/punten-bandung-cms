import Fetch from '.'

class GalleryModel {
  constructor() {
    this.BASE_SLUG = NEXT_PUBLIC_BASE_GALLERY
  }
  async get(slug = '') {
    try {
      return await Fetch.get(this.BASE_SLUG + slug)
    } catch (error) {
      return error
    }
  }
  async show(id) {
    if (!id) throw new Error('No ID Preserved')

    try {
      return await Fetch.get(this.BASE_SLUG + '/' + id)
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

const Gallery = new GalleryModel()

export default Gallery
