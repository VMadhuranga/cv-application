import { NewEducation } from "./new-education";

export function Education({ educations, updateEducations }) {
  const educationsArr = [];

  educations.forEach((education) => {
    educationsArr.push(
      <NewEducation
        id={education.id}
        institute={education.institute}
        fieldOfStudy={education.fieldOfStudy}
        description={education.description}
        startDate={education.startDate}
        endDate={education.endDate}
        updateEducation={updateEducations}
      ></NewEducation>,
    );
  });

  return (
    <>
      <section>
        <h2>Education</h2>
        {educationsArr}
      </section>
      <button>Add new education</button>
    </>
  );
}
