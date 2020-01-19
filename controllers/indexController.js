const halson = require("halson");
const ControllerBase = require("./controllerBase");

class IndexController extends ControllerBase {
  async index() {
    const resource = halson({ api: "api v1" });
    try {
      super.ok(resource);
    } catch (err) {
      super.error(err);
    }
  }
}

module.exports = IndexController;
