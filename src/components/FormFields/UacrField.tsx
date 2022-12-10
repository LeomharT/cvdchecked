import { NumberInput } from "@mantine/core";
import Label from "../Label";
import { useContext } from "react";
import { FormContext } from "../Form";

export default function UacrField() {
  const { form } = useContext(FormContext);

  return (
    <div className="horizontal">
      <Label labelName="uACR" labelRequired="*"></Label>
      <div className="horizontal-right">
        <NumberInput
          id="uACR"
          placeholder="Enter value"
          rightSection="mg/mmol"
          radius="md"
          withAsterisk
          rightSectionWidth={92}
          {...form.getInputProps("uACR")}
        />
      </div>
    </div>
  );
}
