import { Input } from "../input";
import { TextArea } from "../text-area";

export function NewEducation({
  id,
  institute,
  fieldOfStudy,
  description,
  startDate,
  endDate,
  updateEducation,
}) {
  function handleInstituteChange(e) {
    updateEducation((draft) => {
      draft.educations.find((education) => education.id === id).institute =
        e.target.value;
    });
  }

  function handleFieldOfStudyChange(e) {
    updateEducation((draft) => {
      draft.educations.find((education) => education.id === id).fieldOfStudy =
        e.target.value;
    });
  }

  function handleDescriptionChange(e) {
    updateEducation((draft) => {
      draft.educations.find((education) => education.id === id).description =
        e.target.value;
    });
  }

  function handleStartDateChange(e) {
    updateEducation((draft) => {
      draft.educations.find((education) => education.id === id).startDate =
        e.target.value;
    });
  }

  function handleEndDateChange(e) {
    updateEducation((draft) => {
      draft.educations.find((education) => education.id === id).endDate =
        e.target.value;
    });
  }

  return (
    <div>
      <Input
        id={`institute${id}`}
        type={"text"}
        text={"Institute: "}
        value={institute}
        handleOnChange={handleInstituteChange}
      ></Input>
      <Input
        id={`fieldOfStudy${id}`}
        type={"text"}
        text={"Field Of Study: "}
        value={fieldOfStudy}
        handleOnChange={handleFieldOfStudyChange}
      ></Input>
      <TextArea
        id={`educationDescription${id}`}
        type={"text"}
        text={"Description: "}
        value={description}
        handleOnChange={handleDescriptionChange}
      ></TextArea>
      <Input
        id={`startDate${id}`}
        text={"Start Date: "}
        value={startDate}
        handleOnChange={handleStartDateChange}
      ></Input>
      <Input
        id={`endDate${id}`}
        type={"text"}
        text={"End Date: "}
        value={endDate}
        handleOnChange={handleEndDateChange}
      ></Input>
    </div>
  );
}
