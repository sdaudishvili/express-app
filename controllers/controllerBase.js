class ControllerBase {
    constructor({ params, query, body, send }) {
        this.params = params;
        this.query = query;
        this.body = body;
        this.send = send;
    }

    error(err) {
        const status = err.statusCode || err.status;
        const statusCode = status || 500;
        this.send({ statusCode, err });
    }

    created(location, data) {
        if (location) {
            this.send({ statusCode: 201, data: null, location });
        }
        this.send({ statusCode: 201, data });
    }

    ok(data) {
        this.send({ statusCode: 200, data });
    }

    noContent() {
        this.send({ statusCode: 204 });
    }
}

module.exports = ControllerBase;
