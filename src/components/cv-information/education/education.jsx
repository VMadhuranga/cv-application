import { NewEducation } from "./new-education";
import { Button } from "../../button";

export function Education({ educations, updateEducations }) {
  const educationsArr = [];

  function addNewEducation() {
    updateEducations((draft) => {
      draft.educations.push({
        id: crypto.randomUUID(),
        institute: "",
        fieldOfStudy: "",
        description: "",
        startDate: "",
        endDate: "",
      });
    });
  }

  educations.forEach((education) => {
    educationsArr.push(
      <NewEducation
        key={education.id}
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
      <Button
        text={"Add new education"}
        handleOnClick={addNewEducation}
      ></Button>
    </>
  );
}
