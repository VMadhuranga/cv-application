import { CVData } from "../cv-data";
import { CVInformation } from "./cv-information/cv-information";
import { CVPreview } from "./cv-preview/cv-preview";
import { Button } from "./button";
import { useImmer } from "use-immer";

export function App() {
  const [cvData, updateCVData] = useImmer(CVData);
  const [preview, updatePreview] = useImmer(false);

  function handleSubmitEditChange() {
    updatePreview(!preview);
  }

  return (
    <>
      <header>
        <h1>CV Application</h1>
      </header>
      <main>
        {!preview && (
          <CVInformation
            cvInformation={cvData}
            updateCvInformation={updateCVData}
          ></CVInformation>
        )}
        {preview && <CVPreview cvInformation={cvData}></CVPreview>}
        <div>
          <Button
            text={"Submit"}
            handleOnClick={handleSubmitEditChange}
            disabled={preview}
          ></Button>
          <Button
            text={"Edit"}
            handleOnClick={handleSubmitEditChange}
            disabled={!preview}
          ></Button>
        </div>
      </main>
    </>
  );
}
