import { Radio } from "@mantine/core";
import Label from "../Label";
import { useContext } from "react";
import { FormContext } from "../Form";

export default function InsulinField() {
  const { form } = useContext(FormContext);
  return (
    <div className="horizontal">
      <Label
        labelName="Use of Insulin within last 6 months"
        labelRequired="*"
      ></Label>
      <div className="horizontal-right">
        <Radio.Group
          name="Use of Insulin within last 6 months"
          description=""
          withAsterisk
          size="md"
          {...form.getInputProps("insulin")}
        >
          <Radio value="No" label="No" />
          <Radio value="Yes" label="Yes" />
        </Radio.Group>
      </div>
    </div>
  );
}
