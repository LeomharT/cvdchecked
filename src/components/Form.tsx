import ClinicallyField from "./FormFields/ClinicallyField";
import AgeField from "./FormFields/AgeField";
import SexField from "./FormFields/SexField";
import SmokingField from "./FormFields/SmokingField";
import BloodPressureField from "./FormFields/BloodPressureField";
import CholesterolField from "./FormFields/CholesterolField";
import MedicinesField from "./FormFields/MedicinesField";
import EcgField from "./FormFields/EcgField";
import SocioeconomicField from "./FormFields/SocioeconomicField";
import DiabetesDiagnosisField from "./FormFields/DiabetesDiagnosisField";
import HbA1cField from "./FormFields/HbA1cField";
import UacrField from "./FormFields/UacrField";
import EgfrField from "./FormFields/EgfrField";
import BMIField from "./FormFields/BMIField";
import InsulinField from "./FormFields/InsulinField";
import AssessmentList from "./FormFields/AssessmentList";
import DiabetesField from "./FormFields/DiabetesField";
import SpecficEquationField from "./FormFields/SpecficEquationField";
import variable from "../theme/variables";
import { useState } from "react";
import { useForm, UseFormReturnType } from "@mantine/form";
import { createContext } from "react";
import {
  Button,
  Stepper,
  Group,
  createStyles,
  MantineProvider,
  Stack,
} from "@mantine/core";

export interface IComponentClassNames {
  content: string;
}

const useStyles = createStyles({
  content: {
    marginBottom: "50px",
    ".layout": {
      width: "100%",
      maxWidth: "960px",
      margin: "0 auto",
      gap: 0,
      [variable.mdDown]: {
        padding: variable.oneColPaddingMobile,
      },
    },
    "input::placeholder": {
      display: "none",
      color: variable.grey500,
      letterSpacing: variable.letterSpacingXs,
      fontSize: variable.fontSizeBase,
      opacity: 1,
    },
    "input:-ms-input-placeholder": {
      color: variable.grey500,
      letterSpacing: variable.letterSpacingXs,
      fontSize: variable.fontSizeBase,
    },
    "input::-ms-input-placeholder": {
      color: variable.grey500,
      letterSpacing: variable.letterSpacingXs,
      fontSize: variable.fontSizeBase,
    },
    ".mantine-NumberInput-root .mantine-NumberInput-label, .mantine-RadioGroup-root .mantine-RadioGroup-label, .mantine-TextInput-root .mantine-TextInput-label, .mantine-CheckboxGroup-root .mantine-CheckboxGroup-label":
      {
        marginTop: variable.formLabelSpaceXs,
        marginBottom: variable.formLabelSpaceXs,
        fontSize: variable.fontSizeBase,
        fontFamily: variable.fontFamily,
        fontWeight: variable.fontWeightMedium,
      },
    ".mantine-Input-rightSection": {
      color: variable.grey600,
      letterSpacing: variable.letterSpacingXs,
    },
    ".mantine-Stepper-root": {
      marginTop: "30px",
      "& .mantine-Stepper-steps": {
        maxWidth: "780px",
        margin: "auto",
        paddingLeft: "20px",
        paddingRight: "20px",
      },
      "& .mantine-Stepper-content": {
        marginTop: "15px",
      },
      "& .mantine-Stepper-separator": {
        [variable.mobileUp]: {
          backgroundColor: "transparent",
        },
      },
      "& .mantine-Stepper-stepLabel": {
        maxWidth: "165px",
      },
    },
    ".mantine-Text-root": {
      fontWeight: variable.fontWeightMedium,
      lineHeight: "20px",
      letterSpacing: variable.letterSpacingXs,
      marginBottom: variable.spacer1,
    },
    ".horizontal": {
      borderTop: "1px solid #E0E0E0",
      paddingTop: variable.spacer2,
      marginTop: variable.spacer3,
      gap: 30,
      [variable.mobileDown]: {
        gap: 15,
      },
      "& > div": {
        width: "40%",
        [variable.mobileDown]: {
          width: "100%",
        },
      },
    },
    ".horizontal-right": {
      width: "60%",
      marginTop: "0 !important",
      [variable.mobileDown]: {
        width: "100%",
      },
      "& .accordion-open": {
        display: "block",
      },
      "&.active": {
        ".short-input-wrapper": {
          maxHeight: "100%",
        },
        "& .accordion-open": {
          display: "none",
        },
        "& .accordion-close": {
          display: "block",
          "& svg": {
            transform: "rotate(180deg)",
          },
        },
      },
    },
    ".mantine-Checkbox-inner": {
      transform: "none",
      marginRight: variable.spacer4,
    },
    ".mantine-Radio-inner": {
      transform: "none",
      position: "relative",
      top: 2,
      marginRight: variable.spacer3,
    },
    ".mantine-Checkbox-label": {
      fontSize: variable.fontSizeBase,
    },
    ".mantine-Radio-radio": {
      width: 20,
      height: 20,
    },
    ".mantine-InputWrapper-description": {
      position: "relative",
      top: 2,
      [variable.mobileDown]: {
        position: "static",
      },
    },
    ".mantine-NumberInput-root": {
      marginBottom: 1.25 * variable.spacer,
    },
    ".mantine-TextInput-root": {
      marginBottom: 1.25 * variable.spacer,
    },
    ".mantine-Input-input": {
      height: 40,
    },
    ".mantine-InputWrapper-label": {
      "& svg": {
        marginLeft: variable.spacer1,
        opacity: "0.6",
        position: "relative",
        top: 1,
      },
    },
    ".mantine-InputWrapper-required": {
      fontSize: variable.fontSizeLarge,
      position: "relative",
      top: 2,
    },
    ".mantine-Group-root": {
      paddingTop: 0,
    },
    ".mantine-Radio-root": {
      flex: "1",
      marginTop: variable.spacer1,
    },
    ".mantine-CheckboxGroup-root > div": {
      gap: variable.spacer2,
    },
    ".mantine-InputWrapper-root > div": {
      padding: 0,
    },
    ".mantine-RadioGroup-root": {
      ".mantine-Stack-root": {
        gap: variable.spacer0,
      },
    },
    ".or-type": {
      display: "flex",
      gap: 16,
      "& .or-type-left": {
        [variable.smDown]: {
          marginBottom: 0,
        },
      },
      "> div": {
        flex: 1,
      },
      ".or-type-flex-2": {
        flex: 2,
      },
      "> span": {
        position: "relative",
        top: "7px",
        color: variable.grey500,
        [variable.smDown]: {
          position: "static",
        },
      },
    },
    ".and-type": {
      display: "flex",
      gap: 20,
      "> div": {
        flex: 1,
      },
    },
    ".chip": {
      width: "100%",
      "& label": {
        height: 40,
      },
    },
    ".buttom-button": {
      height: "42px",
      minWidth: "110px",
      backgroundColor: variable.grey400,
      "& span": {
        color: variable.black,
        fontSize: variable.fontSizeBase,
        fontWeight: "normal",
        letterSpacing: 0,
        lineHeight: "20px",
      },
      "&[data-disabled]": {
        backgroundColor: "#EDEFF1",
        "& span": {
          color: variable.grey400,
        },
      },
      "&:hover,&:focus,&:active": {
        backgroundColor: "#B0BEC5",
      },
    },
    "& .diabetesOpen": {
      clear: "both",
      backgroundColor: variable.grey100,
      paddingTop: variable.spacer5,
      paddingBottom: variable.spacer5,
      marginTop: variable.spacer5,
      "& .diabetes-equation-text": {
        display: "block",
        marginTop: variable.spacer4,
        fontSize: variable.fontSizeSmall,
        color: variable.grey600,
        letterSpacing: variable.letterSpacingSm,
        lineHeight: "20px",
      },
      "& .diabetes-equation-title": {
        fontWeight: 500,
        letterSpacing: variable.letterSpacingXs,
        lineHeight: "20px",
      },
    },
    '& .mantine-Alert-root[aria-title="Age is required"]': {
      display: "none",
    },
    "& .mantine-Alert-root.ageAlert": {
      backgroundColor: "rgba(255,0,0,0.08)",
      opacity: 0.98,
      "& .mantine-Alert-icon svg": {
        width: "20px",
        height: "20px",
        strokeWidth: "2.5px",
      },
      "& .mantine-Alert-title": {
        color: "#FF0000",
        fontWeight: variable.fontWeightMedium,
      },
      "& .mantine-Alert-message": {
        letterSpacing: variable.letterSpacingSm,
      },
    },
  },
});

export type FormContextType = {
  form: UseFormReturnType<any>;
};

export const FormContext = createContext<FormContextType>(
  {} as FormContextType
);

export default function Form() {
  let { content } = useStyles().classes;

  // Stepper
  const [active, setActive] = useState(0);

  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  // Diabetes status
  const [showDiabetes, SetShowDiabetes] = useState(false);
  const onChangeYes = () => {
    SetShowDiabetes(true);
  };
  const onChangeNo = () => {
    SetShowDiabetes(false);
  };

  // Form validation
  const form = useForm<{
    age: number | undefined;
    bp: number | undefined;
    year: number | undefined;
    uACR: number | undefined;
    sex: string | undefined;
    smoking: string | undefined;
    cvd_medicine: string | undefined;
    diabetes: string | undefined;
    weight: number | undefined;
    height: number | undefined;
    insulin: string | undefined;
  }>({
    initialValues: {
      age: undefined,
      bp: undefined,
      year: undefined,
      uACR: undefined,
      sex: undefined,
      smoking: undefined,
      cvd_medicine: undefined,
      diabetes: undefined,
      weight: undefined,
      height: undefined,
      insulin: undefined,
    },
    validate: (values) => ({
      age:
        values.age === undefined
          ? "Age is required"
          : values.age < 30
          ? "Age is too low for accurate risk assessment."
          : values.age > 79
          ? "Age is too high for accurate risk assessment"
          : null,
      bp: values.bp === undefined ? "This field is required" : null,
      year: values.year === undefined ? "This field is required" : null,
      uACR: values.uACR === undefined ? "This field is required" : null,
      sex: values.sex === undefined ? "Please choose one sex" : null,
      smoking:
        values.smoking === undefined
          ? "Please choose one smoking status"
          : null,
      cvd_medicine:
        values.cvd_medicine === undefined
          ? "Please select one of the Yes or No"
          : null,
      diabetes: values.diabetes === undefined ? "This field is required" : null,
      weight: values.weight === undefined ? "This field is required" : null,
      height: values.height === undefined ? "This field is required" : null,
      insulin:
        values.insulin === undefined
          ? "Please select one of the Yes or No"
          : null,
    }),
    validateInputOnBlur: true,
  });

  const handleSubmit = () => {
    if (!form.isValid()) {
      // alert(
      //   "There are errors in the form, please correct them before continue to next part."
      // );
    } else {
      nextStep();
    }
  };

  return (
    <MantineProvider>
      <Stack className={content}>
        <Stepper active={active} onStepClick={setActive} breakpoint="sm">
          <Stepper.Step label="Enter risk calculation" description="">
            <FormContext.Provider
              value={{
                form,
              }}
            >
              <form
                onSubmit={form.onSubmit((values) =>
                  console.log(form.isValid())
                )}
              >
                <Stack className="layout">
                  <AssessmentList />
                  <ClinicallyField />
                  <AgeField />
                  <SexField />
                  <SmokingField />
                  <BloodPressureField />
                  <CholesterolField />
                  <MedicinesField />
                  <EcgField />
                  <SocioeconomicField />
                  <DiabetesField
                    parentCallbackYes={onChangeYes}
                    parentCallbackNo={onChangeNo}
                  />
                </Stack>

                {showDiabetes && (
                  <div className="diabetesOpen">
                    <Stack className="layout">
                      <div className="gray-background-wrapper">
                        <SpecficEquationField />
                        <DiabetesDiagnosisField />
                        <HbA1cField />
                        <UacrField />
                        <EgfrField />
                        <BMIField />
                        <InsulinField />
                      </div>
                    </Stack>
                  </div>
                )}

                <Stack className="layout">
                  <Group position="center" mt="xl">
                    <Button
                      type="submit"
                      onClick={handleSubmit}
                      disabled={!form.isValid() ? true : false}
                      className="buttom-button"
                    >
                      Calculate
                    </Button>
                  </Group>
                </Stack>
              </form>
            </FormContext.Provider>
          </Stepper.Step>
          <Stepper.Step
            label="Consider reclassification factors"
            description=""
          >
            <Stack className="layout">Step 2 form</Stack>
            <Stack className="layout">
              <Group position="center" mt="xl">
                <Button
                  variant="default"
                  onClick={prevStep}
                  className="buttom-button"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  onClick={nextStep}
                  className="buttom-button"
                >
                  Continue
                </Button>
              </Group>
            </Stack>
          </Stepper.Step>
          <Stepper.Step label="Discuss risk result & management" description="">
            <Stack className="layout">Step 3 form</Stack>
            <Stack className="layout">
              <Group position="center" mt="xl">
                <Button
                  variant="default"
                  onClick={prevStep}
                  className="buttom-button"
                >
                  Back
                </Button>
                <Button type="submit" className="buttom-button">
                  Calculate estimated risk
                </Button>
              </Group>
            </Stack>
          </Stepper.Step>
          <Stepper.Completed>
            <Stack className="layout">
              Completed, click back button to get to previous step
            </Stack>
          </Stepper.Completed>
        </Stepper>
      </Stack>
    </MantineProvider>
  );
}
