import Fetch from ".";

class TabloidModel {
  constructor() {
    this.BASE_SLUG = NEXT_PUBLIC_BASE_TABLOID;
  }
  async get(slug = "") {
    try {
      return await Fetch.get(this.BASE_SLUG + slug);
    } catch (error) {
      return error;
    }
  }
  async show(params) {
    if (!params) throw new Error("No ID Preserved");

    try {
      return await Fetch.get(this.BASE_SLUG + "/" + params);
    } catch (error) {
      return error;
    }
  }

  async store(data) {
    if (!data) throw new Error("No Data Preserved");

    formData.append("title", data.title);
    formData.append("image", data.image);
    formData.append("body", data.body);
    for (let i = 1; i <= data.tags.length - 1; i++) {
      formData.append(`tag${i}`, data.tags[i - 1]);
    }
    try {
      return await Fetch.post(this.BASE_SLUG, data);
    } catch (error) {
      return error;
    }
  }

  async update(id, data) {
    if (!id) throw new Error("No ID Preserved");
    if (!data) throw new Error("No Data Preserved");

    try {
      return await Fetch.get(this.BASE_SLUG, data);
    } catch (error) {
      return error;
    }
  }

  async delete(id) {
    if (!id) throw new Error("No ID Preserved");

    try {
      return await Fetch.get(this.BASE_SLUG);
    } catch (error) {
      return error;
    }
  }
}

const Tabloid = new TabloidModel();

export default Tabloid;
