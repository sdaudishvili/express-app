const ControllerBase = require("./controllerBase");

class AboutController extends ControllerBase {
  getAbout() {
    try {
      const about = {
        about: "about us"
      };

      this.ok(about);
    } catch (err) {
      this.error(err);
    }
  }
}

module.exports = AboutController;
