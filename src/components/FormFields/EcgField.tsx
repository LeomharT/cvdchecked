import { Radio } from "@mantine/core";
import Label from "../Label";

export default function EcgField() {
  return (
    <div className="horizontal">
      <Label labelName="Known history of ECG confirmed atrial fibrillation"></Label>
      <div className="horizontal-right">
        <Radio.Group
          name="Known history of ECG confirmed atrial fibrillation"
          size="md"
        >
          <Radio value="No" label="No" />
          <Radio value="Yes" label="Yes" />
        </Radio.Group>
      </div>
    </div>
  );
}
