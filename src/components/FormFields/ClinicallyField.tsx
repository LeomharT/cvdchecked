import { Checkbox } from "@mantine/core";
import Label from "../Label";

export default function ClinicallyField() {
  return (
    <div className="horizontal">
      <Label
        labelName="Clinically determined high risk"
        labelDescription="Clinical conditions that automatically confer high risk. If either of these apply, you will be redirected to management for high risk category"
      ></Label>
      <div className="horizontal-right">
        <Checkbox.Group
          defaultValue={[""]}
          description=""
          orientation="vertical"
          withAsterisk
        >
          <Checkbox
            value="moderate-severe chronic kidney disease"
            label="moderate-severe chronic kidney disease"
          />
          <Checkbox
            value="familial hypercholesterolaemia"
            label="familial hypercholesterolaemia"
          />
        </Checkbox.Group>
      </div>
    </div>
  );
}
