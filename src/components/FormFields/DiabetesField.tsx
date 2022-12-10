import { Radio } from "@mantine/core";
import Label from "../Label";
import { useContext } from "react";
import { FormContext } from "../Form";

export default function DiabetesField(props: any) {
  const { form } = useContext(FormContext);

  const onChangeNo = () => {
    props.parentCallbackNo();
  };
  const onChangeYes = () => {
    props.parentCallbackYes();
  };

  return (
    <div className="horizontal">
      <Label labelName="Diabetes status" labelRequired="*"></Label>
      <div className="horizontal-right">
        <Radio.Group
          name="Diabetes status"
          description=""
          withAsterisk
          size="md"
            {...form.getInputProps("diabetes")}
        >
          <Radio value="No" label="No" onClick={onChangeNo} />
          <Radio value="Yes" label="Yes" onClick={onChangeYes} />
        </Radio.Group>
      </div>
    </div>
  );
}
