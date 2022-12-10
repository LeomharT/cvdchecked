import { TextInput, Chip } from "@mantine/core";
import Label from "../Label";
import { useState } from "react";

export default function EgfrField() {
  const [value, setValue] = useState("");
  const [isEGFRDisabled, setIsEGFRDisabled] = useState(false);
  const [isChipDisabled, setIsChipDisabled] = useState(false);
  const [checked, setChecked] = useState(false);

  const changeEGFRDisabled = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    const eventValue = event.target.value;

    if (eventValue.trim().length !== 0) {
      setIsChipDisabled(true);
    } else {
      setIsChipDisabled(false);
    }
  };

  const chipDisabled = () => {
    setChecked((v) => !v);
    if (checked === true) {
      setIsEGFRDisabled(false);
    } else {
      setIsEGFRDisabled(true);
    }
  };
  return (
    <div className="horizontal">
      <Label labelName="eGFR" labelRequired="*"></Label>
      <div className="horizontal-right or-type">
        <TextInput
          onChange={changeEGFRDisabled}
          disabled={isEGFRDisabled}
          type="number"
          value={value}
          className="or-type-left or-type-flex-2"
          id="eGFR"
          placeholder="Enter value"
          rightSection="mL/min/1.73 m2"
          radius="md"
          withAsterisk
          rightSectionWidth={140}
          // {...form.getInputProps("eGFR")}
        />
        <span>or</span>
        <Chip
          size="lg"
          radius="md"
          id="eGFRChip"
          disabled={isChipDisabled}
          checked={checked}
          onChange={chipDisabled}
          className="chip or-type-right"
        >
          eGFR&gt;=90
        </Chip>
      </div>
    </div>
  );
}
