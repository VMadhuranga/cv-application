import { NewWorkExperience } from "./new-work-experience";

export function WorkExperience({ workExperiences, updateWorkExperiences }) {
  const workExperiencesArr = [];

  function addNewWorkExperience() {
    updateWorkExperiences((draft) => {
      draft.workExperiences.push({
        id: crypto.randomUUID(),
        title: "",
        companyName: "",
        description: "",
        startDate: "",
        endDate: "",
      });
    });
  }

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
      <button onClick={addNewWorkExperience}>Add new experience</button>
    </>
  );
}
