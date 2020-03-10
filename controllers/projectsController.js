const ControllerBase = require('./controllerBase');
const ProjectModel = require('../models/projectModel');

class ProjectsController extends ControllerBase {
    async getProjects() {
        try {
            const projects = await ProjectModel.find();
            this.ok(projects);
        } catch (err) {
            this.error(err);
        }
    }

    async addProject() {
        try {
            const newProject = new ProjectModel({
                name: 'test3',
                description: 'test3',
                shortDescription: 'test3'
            });

            await newProject.save();
            this.ok('new project added');
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
