import { NumberInput } from "@mantine/core";
import Label from "../Label";
import { useContext } from "react";
import { FormContext } from "../Form";

export default function DiabetesDiagnosisField() {
  const { form } = useContext(FormContext);

  return (
    <div className="horizontal">
      <Label
        labelName="Years since diabetes diagnosis"
        labelRequired="*"
      ></Label>
      <div className="horizontal-right">
        <NumberInput
          label=""
          placeholder="Enter value"
          rightSection="Years"
          radius="md"
          withAsterisk
          rightSectionWidth={60}
          {...form.getInputProps("year")}
        />
      </div>
    </div>
  );
}
