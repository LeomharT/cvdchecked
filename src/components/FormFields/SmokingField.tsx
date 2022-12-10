import { Radio } from "@mantine/core";
import Label from "../Label";
import { useContext } from "react";
import { FormContext } from "../Form";

export default function SmokingField() {
  const { form } = useContext(FormContext);
  
  return (
    <div className="horizontal">
      <Label labelName="Smoking status" labelRequired="*"></Label>
      <div className="horizontal-right">
        <Radio.Group
          id="smokingStatus"
          name="Smoking status"
          description=""
          withAsterisk
          size="md"
          orientation="vertical"
            {...form.getInputProps("smoking")}
        >
          <Radio value="Never smoked" label="Never smoked" />
          <Radio
            value="Previously smoked (ceased >1 year ago)"
            label="Previously smoked (ceased >1 year ago)"
          />
          <Radio
            value="Currently smokes (or ceased <1 year ago)"
            label="Currently smokes (or ceased <1 year ago)"
          />
        </Radio.Group>
      </div>
    </div>
  );
}
