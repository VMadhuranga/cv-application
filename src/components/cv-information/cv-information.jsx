import { CVData } from "../../cv-data";
import { GeneralInformation } from "./general-information/general-information";
import { Education } from "./education/education";
import { WorkExperience } from "./work-experience/work-experience";
import { useImmer } from "use-immer";

export function CVInformation() {
  const [cvData, updateCVData] = useImmer(CVData);

  console.log(cvData.generalInformation);
  return (
    <form>
      <GeneralInformation
        generalInformation={cvData.generalInformation}
        updateGeneralInformation={updateCVData}
      ></GeneralInformation>
      <Education educations={CVData.educations}></Education>
      <WorkExperience workExperiences={CVData.workExperiences}></WorkExperience>
      <button>Submit</button>
    </form>
  );
}
