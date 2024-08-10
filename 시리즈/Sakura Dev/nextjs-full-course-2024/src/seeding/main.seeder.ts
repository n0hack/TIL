import { faker } from '@faker-js/faker';
import { PropertyFeature } from '../entities/property-feature.entity';
import { PropertyType } from '../entities/property-type.entity';
import { Property } from '../entities/property.entity';
import { User } from '../entities/user.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export class MainSeeder implements Seeder {
  public async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
    console.log('Seeding PropertyTypes...');
    const typeRepo = dataSource.getRepository(PropertyType);
    const propertyTypes = await typeRepo.save([{ value: 'Condo' }, { value: 'Apartment' }]);

    console.log('Seeding Users...');
    const userFactory = factoryManager.get(User);
    const users = await userFactory.saveMany(10);

    console.log('Seeding Properties...');
    const propertyFactory = factoryManager.get(Property);
    const propertyFeatureFactory = factoryManager.get(PropertyFeature);
    const properties = await Promise.all(
      Array(50)
        .fill('')
        .map(async () => {
          const property = await propertyFactory.make({
            user: faker.helpers.arrayElement(users),
            type: faker.helpers.arrayElement(propertyTypes),
            propertyFeature: await propertyFeatureFactory.save(),
          });

          return property;
        }),
    );

    const propertyRepo = dataSource.getRepository(Property);
    await propertyRepo.save(properties);
  }
}
