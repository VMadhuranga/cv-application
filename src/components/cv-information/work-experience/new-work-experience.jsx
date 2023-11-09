import { Input } from "../input";
import { TextArea } from "../text-area";

export function NewWorkExperience({
  id,
  title,
  companyName,
  description,
  startDate,
  endDate,
}) {
  return (
    <div key={id}>
      <Input
        id={`title${id}`}
        type={"text"}
        text={"Title: "}
        value={title}
      ></Input>
      <Input
        id={`companyName${id}`}
        type={"text"}
        text={"Company Name: "}
        value={companyName}
      ></Input>
      <TextArea
        id={`workDescription${id}`}
        type={"text"}
        text={"Description: "}
        value={description}
      ></TextArea>
      <Input
        id={`workStartDate${id}`}
        type={"text"}
        text={"Start Date: "}
        value={startDate}
      ></Input>
      <Input
        id={`workEndDate${id}`}
        type={"text"}
        text={"End Date: "}
        value={endDate}
      ></Input>
    </div>
  );
}
