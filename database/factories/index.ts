// import Factory from '@ioc:Adonis/Lucid/Factory'

import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'

export const UserFactory = Factory.define(User, ({ faker }) => {
  return {
    username: faker.internet.userName(),
    display_name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    location:
      faker.address.cityName() + ', ' + faker.address.stateAbbr() + ' - ' + faker.address.country(),
    avatar_url: faker.image.avatar(),
    bio: faker.lorem.sentences(3),
  }
}).build()
