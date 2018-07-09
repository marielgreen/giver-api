"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("@loopback/rest");
/* tslint:disable:no-unused-variable */
// Binding and Booter imports are required to infer types for BootMixin!
const boot_1 = require("@loopback/boot");
const repository_1 = require("@loopback/repository");
//how does the path know which dirname to use?
/* tslint:enable:no-unused-variable */
const repository_1 = require("@loopback/repository");
// the below is where the error is coming from, but matches the index
class GiverApiApplication extends boot_1.BootMixin(repository_1.RepositoryMixin(rest_1.RestApplication)) {
    constructor(options) {
        super(options);
        var dataSourceConfig = new repository_1.juggler.DataSource({
            name: "db",
            connector: 'loopback-connector-mysql',
            host: 'localhost',
            port: 3306,
            database: 'giver',
            user: 'root',
            password: ''
        });
        this.dataSource(dataSourceConfig);
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true,
            },
        };
        // find code for an in-memory database
        let dataSourceConfig = new repository_1.juggler.DataSource({
            name: "db",
            connector: "loopback-connector-mysql",
            host: "127.0.0.1",
            port: 3306,
            database: 'giver',
            user: "root",
            password: "" // same as on MYSQL
        });
        this.dataSource(dataSourceConfig);
    }
    async start() {
        await super.start();
        const server = await this.getServer(rest_1.RestServer);
        const port = await server.get(rest_1.RestBindings.PORT);
        console.log(`Server is running at http://127.0.0.1:${port}`);
        console.log(`Try http://127.0.0.1:${port}/ping`);
    }
}
exports.GiverApiApplication = GiverApiApplication;
//# sourceMappingURL=application.js.map