import { Radio } from "@mantine/core";
import Label from "../Label";
import { useContext } from "react";
import { FormContext } from "../Form";

export default function MedicinesField() {
  const { form } = useContext(FormContext);

  return (
    <div className="horizontal">
      <Label
        labelName="Use of CVD medicines within last 6 months"
        labelRequired="*"
      ></Label>
      <div className="horizontal-right">
        <Radio.Group
          name="Use of CVD medicines within last 6 months"
          label=""
          description=""
          withAsterisk
          size="md"
          {...form.getInputProps("cvd_medicine")}
        >
          <Radio value="no" label="No" />
          <Radio value="yes" label="Yes" />
        </Radio.Group>
      </div>
    </div>
  );
}
