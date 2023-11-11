export const CVData = {
  generalInformation: {
    firstName: "John",
    lastName: "Doe",
    address: "99/A, Fake Road, Fake Town, Fake District",
    email: "john.doe.isnotrreal@fake.com",
    telephone: "123456789",
  },
  educations: [
    {
      id: crypto.randomUUID(),
      institute: "University of Fake",
      fieldOfStudy: "Computer Science",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam magni ipsam ex, quaerat nostrum ut quis nesciunt tempora veroerror natus beatae quam quia doloribus, rem eius veniam? Explicabo.",
      startDate: "2015",
      endDate: "2018",
    },
  ],
  workExperiences: [
    {
      id: crypto.randomUUID(),
      title: "Senior Software Developer",
      companyName: "Fake inc.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum aliquam magni ipsam ex, quaerat nostrum ut quis nesciunt tempora veroerror natus beatae quam quia doloribus, rem eius veniam? Explicabo.",
      startDate: "2020",
      endDate: "Current",
    },
  ],
};
