"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rest_1 = require("@loopback/rest");
const sequence_1 = require("./sequence");
const repository_1 = require("@loopback/repository");
const boot_1 = require("@loopback/boot");
class GiverApiApplication extends boot_1.BootMixin(repository_1.RepositoryMixin(rest_1.RestApplication)) {
    constructor(options) {
        super({
            rest: {
                port: process.env.PORT || 3000
            }
        });
        this.sequence(sequence_1.MySequence);
        //var dataSourceConfig = new juggler.DataSource({
        //name: "db",
        //connector: 'memory',
        var dataSourceConfig = new repository_1.juggler.DataSource({
            name: "db",
            connector: 'loopback-connector-mysql',
            host: 'localhost',
            port: 3306,
            database: 'giver',
            user: 'root',
            password: ''
            // var dataSourceConfig = new juggler.DataSource({
            //   name: "db",
            //   connector: 'loopback-connector-mysql',
            //   host: process.env.DATABASE_HOST,
            //   port: process.env.DB_PORT,
            //   database: process.env.DATABASE_NAME,
            //   user: process.env.DATABASE_USERNAME,
            //   password: process.env.DATABASE_PASSWORD
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