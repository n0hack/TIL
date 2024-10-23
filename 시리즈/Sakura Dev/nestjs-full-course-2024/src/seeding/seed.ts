import { pgConfig } from '../../dbConfig';
import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeder, SeederOptions } from 'typeorm-extension';
import { PropertyFactory } from './property.factory';
import { UserFactory } from './user.factory';
import { PropertyFeatureFactory } from './property-feature.factory';
import { MainSeeder } from './main.seeder';

const options: DataSourceOptions & SeederOptions = {
  ...pgConfig,
  factories: [PropertyFactory, UserFactory, PropertyFeatureFactory],
  seeds: [MainSeeder],
};

const dataSource = new DataSource(options);

dataSource.initialize().then(async () => {
  await dataSource.synchronize(true);
  await runSeeder(dataSource, MainSeeder);
  process.exit();
});
