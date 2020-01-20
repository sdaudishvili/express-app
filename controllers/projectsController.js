const ControllerBase = require("./controllerBase");
const ProjectModel = require("../models/projectModel");

class ProjectsController extends ControllerBase {
  async getProjects() {
    try {
      const projects = [
        { _id: 0, name: "0" },
        { _id: 1, name: "1" },
        { _id: 2, name: "2" }
      ];
      const resources = await Promise.all(
        projects.map(async project => {
          const model = new ProjectModel(project);
          const resource = await model.getResource();
          return resource;
        })
      );

      this.ok(resources);
    } catch (err) {
      this.error(err);
    }
  }

  async getProject() {
    const { id } = this.params;

    try {
      const projectModel = new ProjectModel({ _id: id });
      const resource = await projectModel.getResource();
      this.ok(resource);
    } catch (err) {
      this.error(err);
    }
  }

  async removeProject() {
    try {
      this.noContent();
    } catch (err) {
      this.error(err);
    }
  }
}

module.exports = ProjectsController;
