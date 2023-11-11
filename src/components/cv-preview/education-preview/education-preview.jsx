export function EducationPreview({ educations }) {
  return (
    <section className="education-preview">
      <h2>Education</h2>
      {educations.map((education, index) => {
        return (
          <div key={education.id} className="education-preview-details">
            <div>
              <h4>{education.institute}</h4>
              <p>
                {education.startDate} - {education.endDate}
              </p>
            </div>
            <p>{education.fieldOfStudy}</p>
            <p>{education.description}</p>
            {educations.length - 1 !== index && <hr />}
          </div>
        );
      })}
    </section>
  );
}
