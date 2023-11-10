import { GeneralInformation } from "./general-information/general-information";
import { Education } from "./education/education";
import { WorkExperience } from "./work-experience/work-experience";
import "./cv-information.css";

export function CVInformation({ cvInformation, updateCvInformation }) {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="cv-information">
      <GeneralInformation
        generalInformation={cvInformation.generalInformation}
        updateGeneralInformation={updateCvInformation}
      ></GeneralInformation>
      <Education
        educations={cvInformation.educations}
        updateEducations={updateCvInformation}
      ></Education>
      <WorkExperience
        workExperiences={cvInformation.workExperiences}
        updateWorkExperiences={updateCvInformation}
      ></WorkExperience>
    </form>
  );
}
