import { faker } from '@faker-js/faker';

const ThereHold = 50;

const FakerUsers = Array.from(Array(ThereHold), () => {
  return {
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      country: faker.location.country(),
    },
    company: faker.company.name(),
    jobTitle: faker.person.jobTitle(),
    website: faker.internet.url(),
  };
});
export default FakerUsers;
