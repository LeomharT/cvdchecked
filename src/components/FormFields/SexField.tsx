import { Radio } from "@mantine/core";
import Label from "../Label";
import { useContext } from "react";
import { FormContext } from "../Form";

export default function SexField() {
  const { form } = useContext(FormContext);

  return (
    <div className="horizontal">
      <Label labelName="Sex at birth" labelRequired="*"></Label>
      <div className="horizontal-right">
        <Radio.Group
          id="sex"
          name="Sex at birth"
          description=""
          withAsterisk
          size="md"
          {...form.getInputProps("sex")}
        >
          <Radio value="Female" label="Female" />
          <Radio value="Male" label="Male" />
        </Radio.Group>
      </div>
    </div>
  );
}
