export function WorkExperiencePreview({ workExperiences }) {
  return (
    <div>
      <h3>Work Experience</h3>
      {workExperiences.map((experience) => {
        return (
          <div key={experience.id}>
            <h4>{experience.title}</h4>
            <p>{experience.companyName}</p>
            <p>{experience.description}</p>
            <p>
              {experience.startDate} - {experience.endDate}
            </p>
          </div>
        );
      })}
    </div>
  );
}
