const ControllerBase = require('./controllerBase');
const AboutModel = require('../models/aboutModel');

class AboutController extends ControllerBase {
    async getAbout() {
        try {
            const about = await AboutModel.findOne();
            this.ok(about);
        } catch (err) {
            this.error(err);
        }
    }

    async updateAbout() {
        try {
            const doc = await AboutModel.findOne();
            if (doc === null) {
                const about = new AboutModel({
                    title: this.body.title,
                    content: this.body.content
                });
                await about.save();
            } else {
                Object.keys(this.body).map((key) => {
                    doc[key] = this.body[key];
                    return false;
                });
                await doc.save();
            }

            this.created();
        } catch (err) {
            this.error(err);
        }
    }
}

module.exports = AboutController;
