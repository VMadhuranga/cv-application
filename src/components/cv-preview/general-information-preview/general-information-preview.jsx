export function GeneralInformationPreview({ generalInformation }) {
  return (
    <section className="general-information-preview">
      <h2>
        {generalInformation.firstName} {generalInformation.lastName}
      </h2>
      <address>{generalInformation.address}</address>
      <p>Email: {generalInformation.email}</p>
      <p>Telephone: {generalInformation.telephone}</p>
    </section>
  );
}
