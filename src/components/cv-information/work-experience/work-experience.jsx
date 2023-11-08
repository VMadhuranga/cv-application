import { Input } from "../input";
import { TextArea } from "../text-area";

export function WorkExperience({ workExperiences }) {
  const workExperiencesArr = [];

  workExperiences.forEach((experience) => {
    workExperiencesArr.push(
      <div key={experience.id}>
        <Input
          id={`title${experience.id}`}
          type={"text"}
          text={"Title: "}
          value={experience.title}
        ></Input>
        <Input
          id={`companyName${experience.id}`}
          type={"text"}
          text={"Company Name: "}
          value={experience.companyName}
        ></Input>
        <TextArea
          id={`workDescription${experience.id}`}
          type={"text"}
          text={"Description: "}
          value={experience.description}
        ></TextArea>
        <Input
          id={`workStartDate${experience.id}`}
          type={"text"}
          text={"Start Date: "}
          value={experience.startDate}
        ></Input>
        <Input
          id={`workEndDate${experience.id}`}
          type={"text"}
          text={"End Date: "}
          value={experience.endDate}
        ></Input>
      </div>,
    );
  });

  return (
    <>
      <section>
        <h2>Work Experience</h2>
        {workExperiencesArr}
      </section>
      <button>Add new experience</button>
    </>
  );
}
