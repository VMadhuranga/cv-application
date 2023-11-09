export function GeneralInformationPreview({ generalInformation }) {
  return (
    <div>
      <h3>
        {generalInformation.firstName} {generalInformation.lastName}
      </h3>
      <address>{generalInformation.address}</address>
      <p>Email: {generalInformation.email}</p>
      <p>Telephone: {generalInformation.telephone}</p>
    </div>
  );
}
