import { Input } from "../input";
import { TextArea } from "../text-area";
import { Button } from "../../button";

export function NewWorkExperience({
  id,
  title,
  companyName,
  description,
  startDate,
  endDate,
  updateWorkExperience,
}) {
  function handleTitleChange(e) {
    updateWorkExperience((draft) => {
      draft.workExperiences.find((experience) => experience.id === id).title =
        e.target.value;
    });
  }

  function handleCompanyNameChange(e) {
    updateWorkExperience((draft) => {
      draft.workExperiences.find(
        (experience) => experience.id === id,
      ).companyName = e.target.value;
    });
  }

  function handleDescriptionChange(e) {
    updateWorkExperience((draft) => {
      draft.workExperiences.find(
        (experience) => experience.id === id,
      ).description = e.target.value;
    });
  }

  function handleStartDateChange(e) {
    updateWorkExperience((draft) => {
      draft.workExperiences.find(
        (experience) => experience.id === id,
      ).startDate = e.target.value;
    });
  }

  function handleEndDateChange(e) {
    updateWorkExperience((draft) => {
      draft.workExperiences.find((experience) => experience.id === id).endDate =
        e.target.value;
    });
  }

  function deleteExperience() {
    updateWorkExperience((draft) => {
      draft.workExperiences.splice(
        draft.workExperiences.findIndex((education) => education.id === id),
        1,
      );
    });
  }

  return (
    <div key={id}>
      <Input
        id={`title${id}`}
        type={"text"}
        text={"Title: "}
        value={title}
        handleOnChange={handleTitleChange}
      ></Input>
      <Input
        id={`companyName${id}`}
        type={"text"}
        text={"Company Name: "}
        value={companyName}
        handleOnChange={handleCompanyNameChange}
      ></Input>
      <TextArea
        id={`workDescription${id}`}
        type={"text"}
        text={"Description: "}
        value={description}
        handleOnChange={handleDescriptionChange}
      ></TextArea>
      <Input
        id={`workStartDate${id}`}
        type={"text"}
        text={"Start Date: "}
        value={startDate}
        handleOnChange={handleStartDateChange}
      ></Input>
      <Input
        id={`workEndDate${id}`}
        type={"text"}
        text={"End Date: "}
        value={endDate}
        handleOnChange={handleEndDateChange}
      ></Input>
      <Button text={"Delete"} handleOnClick={deleteExperience}></Button>
    </div>
  );
}
