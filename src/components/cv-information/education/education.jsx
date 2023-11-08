import { Input } from "../input";
import { TextArea } from "../text-area";

export function Education({ educations }) {
  const educationsArr = [];

  educations.forEach((education) => {
    educationsArr.push(
      <div key={education.id}>
        <Input
          id={`institute${education.id}`}
          type={"text"}
          text={"Institute: "}
          value={education.institute}
        ></Input>
        <Input
          id={`fieldOfStudy${education.id}`}
          type={"text"}
          text={"Field Of Study: "}
          value={education.fieldOfStudy}
        ></Input>
        <TextArea
          id={`educationDescription${education.id}`}
          type={"text"}
          text={"Description: "}
          value={education.description}
        ></TextArea>
        <Input
          id={`startDate${education.id}`}
          text={"Start Date: "}
          value={education.startDate}
        ></Input>
        <Input
          id={`endDate${education.id}`}
          type={"text"}
          text={"End Date: "}
          value={education.endDate}
        ></Input>
      </div>,
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
