import { TextInput, createStyles, Stack } from "@mantine/core";
import Label from "../Label";
import { useState } from "react";
import { useRef } from "react";
import variable from "../../theme/variables";
import { useContext } from "react";
import { FormContext } from "../Form";

export interface IComponentClassNames {
  content: string;
}

const useStyles = createStyles((theme) => ({
  content: {
    "& .short-input-wrapper": {
      maxHeight: 0,
      overflow: "hidden",
      transition: "max-height .2s ease",
    },
    "& .short-input-total": {
      display: "inline-block",
      verticalAlign: "top",
      width: "50%",
      paddingRight: variable.spacer4,
    },
    "& .short-input-high-density": {
      display: "inline-block",
      width: "50%",
      paddingLeft: variable.spacer4,
    },
    "& .accordion": {
      color: "#0074FF",
      fontSize: variable.fontSizeBase,
      letterSpacing: "0.15px",
      lineHeight: "20px",
      cursor: "pointer",
      "& .accordion-close": {
        display: "none",
      },
    },
    "& .accordion-chevron-down": {
      position: "relative",
      top: 4,
      left: 4,
    },
  },
}));

export default function CholesterolField() {
  const { form } = useContext(FormContext);
  let { content } = useStyles().classes;

  const [cholesterol, setCholesterol] = useState("");
  const [total, setTotal] = useState("");
  const [density, setDensity] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [isMultiDisabled, setMultiDisabled] = useState(false);
  const cRef = useRef<HTMLInputElement>(null);
  const cRef1 = useRef<HTMLInputElement>(null);

  const changeCholesterolDisabled = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCholesterol(event.target.value);
    const eventValue = event.target.value;

    if (eventValue.trim().length !== 0) {
      setMultiDisabled(true);
      if (cRef1.current != null) {
        cRef1.current.value = "";
      }
    } else {
      setMultiDisabled(false);
    }
  };

  const changeTotalDisabled = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTotal(event.target.value);
    const eventValue = event.target.value;

    if (eventValue.trim().length !== 0) {
      setIsDisabled(true);
      if (cRef.current != null) {
        cRef.current.value = "";
      }
    } else {
      setIsDisabled(false);
    }
  };

  const changeDensityDisabled = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDensity(event.target.value);
    const eventValue = event.target.value;

    if (eventValue.trim().length !== 0) {
      setIsDisabled(true);
      if (cRef.current != null) {
        cRef.current.value = "";
      }
    } else {
      setIsDisabled(false);
    }
  };

  // Accordion
  const [isActive, setIsActive] = useState(false);
  const hanleAccordionClick = () => {
    setIsActive(!isActive);
  };
  return (
    <Stack className={content}>
      <div className="horizontal">
        <Label
          labelName="Ratio of total cholesterol to HDL cholesterol"
          labelRequired="*"
        ></Label>
        <div className={`horizontal-right ${isActive ? "active" : ""}`}>
          <TextInput
            id="cholesterol"
            type="number"
            disabled={isDisabled}
            onChange={changeCholesterolDisabled}
            value={cholesterol}
            withAsterisk
            placeholder="Ratio of total cholesterol to HDL cholesterol"
            description=""
            radius="md"
            ref={cRef}
            // {...form.getInputProps("cholesterol")}
          />
          <div className="short-input-wrapper">
            <TextInput
              id="cholesterolTotal"
              className="short-input-total"
              type="number"
              value={total}
              onChange={changeTotalDisabled}
              disabled={isMultiDisabled}
              label=""
              placeholder="Total"
              description=""
              rightSection="mmol/L"
              radius="md"
              rightSectionWidth={92}
              ref={cRef1}
              // {...form.getInputProps("cho_total")}
            />
            <TextInput
              className="short-input-high-density"
              value={density}
              type="number"
              onChange={changeDensityDisabled}
              disabled={isMultiDisabled}
              label=""
              placeholder="high-density"
              description=""
              rightSection="mmol/L"
              radius="md"
              rightSectionWidth={92}
              ref={cRef1}
              // {...form.getInputProps("cho_short")}
            />
          </div>

          <div className="accordion" onClick={hanleAccordionClick}>
            <div className="accordion-open">
              or enter total cholesterol and HDL cholesterol separately
              <svg
                className="accordion-chevron-down"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
              >
                <path
                  d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="accordion-close">
              Hide total & high-density lipoprotein values fields
              <svg
                className="accordion-chevron-down"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
              >
                <path
                  d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Stack>
  );
}
