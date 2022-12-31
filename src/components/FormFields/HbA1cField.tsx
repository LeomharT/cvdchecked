import { NumberInput } from "@mantine/core";
import { useContext, useRef } from "react";
import { FormContext } from "../Form";
import Label from "../Label";

export default function HbA1cFieldNew()
{
    const { form } = useContext(FormContext);

    const refL = useRef<HTMLInputElement>(null);
    const refR = useRef<HTMLInputElement>(null);


    return (
        <div className="horizontal">
            <Label labelName="Glycated haemoglobin (HbA1c)" labelRequired="*"></Label>
            <div className="horizontal-right or-type">
                <NumberInput
                    ref={refL}
                    className="or-type-left"
                    type="number"
                    disabled={refR.current?.value}
                    placeholder="Enter value"
                    rightSection="mmol/mol"
                    radius="md"
                    withAsterisk
                    rightSectionWidth={96}
                    {...form.getInputProps("mol")}
                    error={refR.current?.value ? null : form.getInputProps("mol").error}
                />
                <span>or</span>
                <NumberInput
                    ref={refR}
                    className="or-type-right"
                    type="number"
                    placeholder="Enter value"
                    disabled={refL.current?.value}
                    rightSection="%"
                    radius="md"
                    withAsterisk
                    rightSectionWidth={35}
                    {...form.getInputProps("percentage")}
                    error={refL.current?.value ? null : form.getInputProps("percentage").error}
                />
            </div>
        </div>
    );
}
