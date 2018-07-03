import {GiverApiApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {GiverApiApplication};

export async function main(options?: ApplicationConfig) {
  const app = new GiverApiApplication(options);
  await app.boot();
  await app.start();
  return app;
}
