import { ApplicationConfig } from '@loopback/core';
import { RestApplication, RestServer, RestBindings } from '@loopback/rest';
import { MySequence } from './sequence';
import { Class, Repository, juggler, RepositoryMixin } from '@loopback/repository';
import { BootMixin, Booter, Binding } from '@loopback/boot';
import { dirname } from 'path';



export class GiverApiApplication extends BootMixin
  (RepositoryMixin(RestApplication)
  ) {



  constructor(options?: ApplicationConfig) {
    super({
      rest: {
        port: process.env.PORT || 3000
      }
    });

    this.sequence(MySequence);

    var dataSourceConfig = new juggler.DataSource({
      name: "db",
      connector: 'memory',

      // var dataSourceConfig = new juggler.DataSource({
      //   name: "db",
      //   connector: 'loopback-connector-mysql',
      //   host: 'localhost',
      //   port: 3306,
      //   database: 'giver',
      //   user: 'root',
      //   password: ''
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

    const server = await this.getServer(RestServer);
    const port = await server.get(RestBindings.PORT);
    console.log(`Server is running at http://127.0.0.1:${port}`);
    console.log(`Try http://127.0.0.1:${port}/ping`);
  }
}
