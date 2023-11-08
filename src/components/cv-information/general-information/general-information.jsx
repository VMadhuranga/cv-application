import { Input } from "../input";

export function GeneralInformation({
  generalInformation,
  updateGeneralInformation,
}) {
  function handleFirstNameChange(e) {
    updateGeneralInformation((draft) => {
      draft.generalInformation.firstName = e.target.value;
    });
  }

  function handleLastNameChange(e) {
    updateGeneralInformation((draft) => {
      draft.generalInformation.lastName = e.target.value;
    });
  }

  function handleAddressChange(e) {
    updateGeneralInformation((draft) => {
      draft.generalInformation.address = e.target.value;
    });
  }

  function handleEmailChange(e) {
    updateGeneralInformation((draft) => {
      draft.generalInformation.email = e.target.value;
    });
  }

  function handleTelephoneChange(e) {
    updateGeneralInformation((draft) => {
      draft.generalInformation.telephone = e.target.value;
    });
  }

  return (
    <section>
      <h2>General Information</h2>
      <Input
        id={"firstName"}
        type={"text"}
        text={"First Name: "}
        value={generalInformation.firstName}
        handleOnChange={handleFirstNameChange}
      ></Input>
      <Input
        id={"lastName"}
        type={"text"}
        text={"Last Name: "}
        value={generalInformation.lastName}
        handleOnChange={handleLastNameChange}
      ></Input>
      <Input
        id={"address"}
        type={"text"}
        text={"Address: "}
        value={generalInformation.address}
        handleOnChange={handleAddressChange}
      ></Input>
      <Input
        id={"email"}
        type={"email"}
        text={"Email: "}
        value={generalInformation.email}
        handleOnChange={handleEmailChange}
      ></Input>
      <Input
        id={"telephone"}
        type={"tel"}
        text={"Telephone: "}
        value={generalInformation.telephone}
        handleOnChange={handleTelephoneChange}
      ></Input>
    </section>
  );
}
