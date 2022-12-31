import { Chip, NumberInput } from "@mantine/core";
import { useContext, useRef } from "react";
import { FormContext } from "../Form";
import Label from "../Label";

export default function EgfrFieldNew()
{
    const { form } = useContext(FormContext);

    const refL = useRef<HTMLInputElement>(null);
    const refR = useRef<HTMLInputElement>(null);

    return (
        <div className="horizontal">
            <Label labelName="eGFR" labelRequired="*"></Label>
            <div className="horizontal-right or-type">
                <NumberInput
                    ref={refL}
                    disabled={refR.current?.checked}
                    type="number"
                    className="or-type-left or-type-flex-2"
                    id="eGFR"
                    placeholder="Enter value"
                    rightSection="mL/min/1.73 m2"
                    radius="md"
                    withAsterisk
                    rightSectionWidth={140}
                    {...form.getInputProps("eGFRLeft")}
                    error={refR.current?.checked ? null : form.getInputProps("eGFRLeft").error}
                />
                <span>or</span>
                <Chip
                    ref={refR}
                    size="lg"
                    radius="md"
                    id="eGFRChip"
                    disabled={Boolean(refL.current?.value)}
                    className="chip or-type-right"
                    {...form.getInputProps("eGFRRight")}
                    checked={form.getInputProps("eGFRRight").value}
                    error={refL.current?.value ? null : form.getInputProps("eGFRRight").error}
                >
                    eGFR&gt;=90
                </Chip>
            </div>
        </div>
    );
}
