export function EducationPreview({ educations }) {
  return (
    <div>
      <h3>Education</h3>
      {educations.map((education) => {
        return (
          <div key={education.id}>
            <h4>{education.institute}</h4>
            <p>{education.fieldOfStudy}</p>
            <p>{education.description}</p>
            <p>
              {education.startDate} - {education.endDate}
            </p>
          </div>
        );
      })}
    </div>
  );
}
