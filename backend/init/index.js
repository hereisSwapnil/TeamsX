const { faker } = require("@faker-js/faker");
const User = require("../models/employee.model");
const connectDB = require("../db");

async function seedDB() {
  await connectDB();

  for (let i = 0; i < 1000; i++) {
    const teams = [
      "WebDev",
      "AppDev",
      "UI/UX",
      "QA",
      "HR",
      "Finance",
      "Marketing",
      "Sales",
      "Management",
      "Support",
      "Operations",
      "Legal",
      "Security",
      "Research",
      "Design",
      "Content",
      "Data",
      "Product",
      "Engineering",
      "Customer Success",
      "IT",
      "Admin",
      "Other",
    ];
    const positions = [
      "Intern",
      "Junior",
      "Mid-Level",
      "Senior",
      "Lead",
      "Manager",
      "Director",
      "VP",
      "C-Level",
    ];
    const type = [
      "Full-Time",
      "Part-Time",
      "Contract",
      "Freelance",
      "Internship",
    ];

    const user = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      position: faker.person.jobTitle(),
      team: faker.helpers.arrayElement(teams),
      type: faker.helpers.arrayElement(type),
      isAssigned: faker.datatype.boolean(),
      about: faker.lorem.sentence({ min: 10, max: 20 }),
      profilePicture: faker.image.avatar(),
    };
    try {
      const user_ = await User(user);
      await user_.save();
      console.log(`User ${i} saved`);
    } catch (error) {
      console.log(`Error saving user ${i}`);
    }
  }
}

seedDB();
