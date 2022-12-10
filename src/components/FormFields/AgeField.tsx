import { NumberInput, Alert } from "@mantine/core";
import Label from "../Label";
import { IconAlertCircle } from "@tabler/icons";
import { useContext, useEffect } from "react";
import { FormContext } from "../Form";

export default function AgeField() {
  const { form } = useContext(FormContext);

  return (
    <div>
      <div className="horizontal">
        <Label
          labelName="Age"
          labelRequired="*"
          cardDropdownContent="Men and women aged 45-79 years without known CVD. People diagnosed with diabetes (without known CVD) from age 35 or time of diagnosis whichever is the latest. For Aboriginal and/or Torres Strait Islander Peoples without known CVD assess CVD risk in men and women aged 30-79 years using a risk calculator. 80 & older will be calculated at 79, and so may underestimated the risk."
        ></Label>
        <div className="horizontal-right">
          <NumberInput
            id="age"
            withAsterisk
            label=""
            placeholder="30 - 79"
            rightSection="Years"
            description=""
            radius="md"
            rightSectionWidth={60}
            {...form.getInputProps("age")}
          />
        </div>
      </div>
      {form.getInputProps("age").error && (
        <Alert
          className="ageAlert"
          icon={<IconAlertCircle size={16} />}
          title={form.getInputProps("age").error}
          color="red"
          aria-title={form.getInputProps("age").error}
        >
          Age must be adjusted to 30 - 79 to continue
        </Alert>
      )}
    </div>
  );
}
