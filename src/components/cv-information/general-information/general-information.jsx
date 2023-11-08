import { Input } from "../input";

export function GeneralInformation({ generalInformation }) {
  return (
    <section>
      <h2>General Information</h2>
      <Input
        id={"firstName"}
        type={"text"}
        text={"First Name: "}
        value={generalInformation.firstName}
      ></Input>
      <Input
        id={"lastName"}
        type={"text"}
        text={"Last Name: "}
        value={generalInformation.lastName}
      ></Input>
      <Input
        id={"address"}
        type={"text"}
        text={"Address: "}
        value={generalInformation.address}
      ></Input>
      <Input
        id={"email"}
        type={"email"}
        text={"Email: "}
        value={generalInformation.email}
      ></Input>
      <Input
        id={"telephone"}
        type={"tel"}
        text={"Telephone: "}
        value={generalInformation.telephone}
      ></Input>
    </section>
  );
}
