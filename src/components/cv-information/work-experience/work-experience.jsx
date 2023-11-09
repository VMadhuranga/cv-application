import { NewWorkExperience } from "./new-work-experience";

export function WorkExperience({ workExperiences, updateWorkExperiences }) {
  const workExperiencesArr = [];

  workExperiences.forEach((experience) => {
    workExperiencesArr.push(
      <NewWorkExperience
        key={experience.id}
        id={experience.id}
        title={experience.title}
        companyName={experience.companyName}
        description={experience.description}
        startDate={experience.startDate}
        endDate={experience.endDate}
        updateWorkExperience={updateWorkExperiences}
      ></NewWorkExperience>,
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
