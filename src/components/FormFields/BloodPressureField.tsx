import { NumberInput } from "@mantine/core";
import Label from "../Label";
import { useContext } from "react";
import { FormContext } from "../Form";

export default function BloodPressureField() {
  const { form } = useContext(FormContext);

  return (
    <div className="horizontal">
      <Label labelName="Blood pressure" labelRequired="*"></Label>
      <div className="horizontal-right">
        <NumberInput
          id="bloodPressure"
          withAsterisk
          label=""
          placeholder="SBP"
          description=""
          rightSection="mmHg"
          radius="md"
          rightSectionWidth={85}
          {...form.getInputProps("bp")}
        />
      </div>
    </div>
  );
}
