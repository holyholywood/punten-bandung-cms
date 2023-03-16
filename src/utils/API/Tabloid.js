import Fetch from ".";

class TabloidModel {
  constructor() {
    this.BASE_SLUG = process.env.NEXT_PUBLIC_BASE_TABLOID;
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

  store(data) {
    if (!data) throw new Error("No Data Preserved");
    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("image", data.image);
    formData.append("body", data.body);
    formData.append("type", "berita");
    // Append tag array to each  tag1-5
    data.tags.forEach((tag, i) => {
      formData.append(`tag${++i}`, tag);
    });
    try {
      // return await Fetch.post(this.BASE_SLUG, formData);
      return formData;
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
