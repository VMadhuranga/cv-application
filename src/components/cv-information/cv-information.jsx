import { CVData } from "../../cv-data";
import { GeneralInformation } from "./general-information/general-information";
import { Education } from "./education/education";
import { WorkExperience } from "./work-experience/work-experience";

export function CVInformation() {
  return (
    <form>
      <GeneralInformation
        generalInformation={CVData.generalInformation}
      ></GeneralInformation>
      <Education educations={CVData.educations}></Education>
      <WorkExperience workExperiences={CVData.workExperiences}></WorkExperience>
      <button>Submit</button>
    </form>
  );
}
