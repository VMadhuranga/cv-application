import { GeneralInformationPreview } from "./general-information-preview/general-information-preview";
import { EducationPreview } from "./education-preview/education-preview";
import { WorkExperiencePreview } from "./work-experience-preview/work-experience-preview";

export function CVPreview({ cvInformation }) {
  return (
    <div>
      <GeneralInformationPreview
        generalInformation={cvInformation.generalInformation}
      ></GeneralInformationPreview>
      <EducationPreview
        educations={cvInformation.educations}
      ></EducationPreview>
      <WorkExperiencePreview
        workExperiences={cvInformation.workExperiences}
      ></WorkExperiencePreview>
    </div>
  );
}
