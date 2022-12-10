import { TextInput,NumberInput } from "@mantine/core";
import Label from "../Label";
import { useState } from "react";
import { useRef } from "react";
import { useContext } from "react";
import { FormContext } from "../Form";

export default function HbA1cField() {
  const { form } = useContext(FormContext);
  const [hbA1cL, setHbA1cL] = useState("");
  const [hbA1cR, setHbA1cR] = useState("");
  const [isHDisabledL, setIsHDisabledL] = useState(false);
  const [isHDisabledR, setIsHDisabledR] = useState(false);
  // const refL = useRef<HTMLInputElement>(null);
  // const refR = useRef<HTMLInputElement>(null);

  const changeHbA1cDisabledL = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventValue = event.target.value;
    setHbA1cL(eventValue);

    if (eventValue.trim().length !== 0) {
      setIsHDisabledR(true);
      // if (refR.current != null) {
      //   refR.current.value = "";
      // }
    } else {
      setIsHDisabledR(false);
    }
  };

  const changeHbA1cDisabledR = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHbA1cR(event.target.value);
    const eventValue = event.target.value;

    if (eventValue.trim().length !== 0) {
      setIsHDisabledL(true);
      // if (refL.current != null) {
      //   refL.current.value = "";
      // }
    } else {
      setIsHDisabledL(false);
    }
  };
  return (
    <div className="horizontal">
      <Label labelName="Glycated haemoglobin (HbA1c)" labelRequired="*"></Label>
      <div className="horizontal-right or-type">
        <TextInput
          className="or-type-left"
          type="number"
          // {...form.getInputProps("HbA1cLeft")}
          // error={form.getInputProps("HbA1c").error}
          value={hbA1cL}
          onChange={changeHbA1cDisabledL}
          disabled={isHDisabledL}
          placeholder="Enter value"
          rightSection="mmol/mol"
          radius="md"
          withAsterisk
          rightSectionWidth={96}
        />
        <span>or</span>
        <TextInput
          className="or-type-right"
          type="number"
          placeholder="Enter value"
          // {...form.getInputProps("HbA1cRight")}
          // error={form.getInputProps("HbA1cRight").error}
          disabled={isHDisabledR}
          onChange={changeHbA1cDisabledR}
          value={hbA1cR}
          rightSection="%"
          radius="md"
          withAsterisk
          rightSectionWidth={35}
        />
      </div>
    </div>
  );
}
