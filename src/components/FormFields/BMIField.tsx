import { NumberInput } from "@mantine/core";
import Label from "../Label";
import { useContext } from "react";
import { FormContext } from "../Form";

export default function BMIField() {
  const { form } = useContext(FormContext);
  return (
    <div className="horizontal">
      <Label labelName="Body mass index (BMI)" labelRequired="*"></Label>
      <div className="horizontal-right and-type">
        <NumberInput
          id="bmiWeight"
          placeholder="Weight"
          rightSection="Kg"
          radius="md"
          withAsterisk
          rightSectionWidth={40}
          {...form.getInputProps("weight")}
        />
        <NumberInput
          id="bmiHeight"
          placeholder="Height"
          rightSection="Meters"
          radius="md"
          withAsterisk
          rightSectionWidth={70}
          {...form.getInputProps("height")}
        />
      </div>
    </div>
  );
}
