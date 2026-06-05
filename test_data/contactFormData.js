import { faker } from "@faker-js/faker";

const getRandomElement = (array) =>
  array[Math.floor(Math.random() * array.length)];

const states = [
  "Alabama",
  "Alaska",
  "California",
  "Colorado",
  "Delaware",
  "Florida",
  "Georgia",
];
const industries = [
  "Construction & Development",
  "Aerospace & Aviation",
  "Financial Services",
  "Government",
  "Healthcare",
  "Manufacturing",
  "Non-Profit",
  "Professional Services",
  "Transportation & Logistics",
];
const employeesNumbers = [
  "1-10",
  "11-25",
  "26-50",
  "51-149",
  "150-500",
  "501-1000",
  "1000+",
];

export function generateContactFormData() {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    organization: faker.company.name(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number({ style: "national" }),
    state: getRandomElement(states),
    message: faker.lorem.sentence(7),
    currentClient: "No",
    industry: getRandomElement(industries),
    employees: getRandomElement(employeesNumbers),
    howDidYouHearAboutUs: faker.lorem.sentence(7),
  };
}
