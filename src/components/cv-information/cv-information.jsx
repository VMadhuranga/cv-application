import { CVData } from "../../cv-data";
import { GeneralInformation } from "./general-information/general-information";
import { Education } from "./education/education";
import { WorkExperience } from "./work-experience/work-experience";
import { useImmer } from "use-immer";

export function CVInformation() {
  const [cvData, updateCVData] = useImmer(CVData);

  console.log(cvData.educations);
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <GeneralInformation
        generalInformation={cvData.generalInformation}
        updateGeneralInformation={updateCVData}
      ></GeneralInformation>
      <Education
        educations={cvData.educations}
        updateEducations={updateCVData}
      ></Education>
      <WorkExperience workExperiences={CVData.workExperiences}></WorkExperience>
      <button>Submit</button>
    </form>
  );
}
