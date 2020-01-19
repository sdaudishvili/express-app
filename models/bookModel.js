const ModelBase = require("./modelBase");

class BookModel extends ModelBase {
  constructor(data) {
    super();
    this.id = data._id;
    this.name = data.name;
    this.author = data.author;
    this.language = data.language;
    this.rating = data.rating;
  }

  async getResource() {
    const resource = super.getResource({
      id: this.id,
      name: this.name,
      author: this.author,
      language: this.language,
      rating: this.rating
    });

    return resource;
  }
}

module.exports = BookModel;
