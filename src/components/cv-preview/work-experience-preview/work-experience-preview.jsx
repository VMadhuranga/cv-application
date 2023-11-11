export function WorkExperiencePreview({ workExperiences }) {
  return (
    <section className="work-experience-preview">
      <h2>Work Experience</h2>
      {workExperiences.map((experience, index) => {
        return (
          <div key={experience.id} className="work-experience-preview-details">
            <div>
              <h4>{experience.title}</h4>
              <p>
                {experience.startDate} - {experience.endDate}
              </p>
            </div>
            <p>{experience.companyName}</p>
            <p>{experience.description}</p>
            {workExperiences.length - 1 !== index && <hr />}
          </div>
        );
      })}
    </section>
  );
}
