const ModelBase = require("./modelBase");

class ProjectModel extends ModelBase {
  constructor(data) {
    super();
    this.id = data._id;
    this.name = data.name;
    this.description = data.description;
    this.shortDescription = data.shortDescription;
    this.country = data.country;
    this.language = data.language;
  }

  async getResource() {
    const resource = super.getResource({
      id: this.id,
      name: this.name,
      description: this.description,
      shortDescription: this.shortDescription,
      country: this.country,
      language: this.language,
    });

    return resource;
  }
}

module.exports = ProjectModel;
