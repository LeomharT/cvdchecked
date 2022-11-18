import variable from "../theme/variables";
import Label from "./Label";
import {
  TextInput,
  Checkbox,
  Radio,
  Button,
  Stepper,
  Group,
  Slider,
  Drawer,
  ScrollArea,
  useMantineTheme,
  Container,
  Chip,
  Text,
  List,
  NumberInput,
  createStyles,
  MantineProvider,
  Stack,
} from "@mantine/core";
import { useState } from "react";
import { useForm } from "@mantine/form";

export interface IComponentClassNames {
  content: string;
  calculationVariables: string;
  calculationVariablesRight: string;
  diabetesOpen: string;
  recommendList: string;
  highRisk: string;
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
      color: "#79909C",
      letterSpacing: "0.15px",
      fontSize: variable.fontSizeBase,
      opacity: 1 /* Firefox */,
    },
    "input:-ms-input-placeholder": {
      /* Internet Explorer 10-11 */ color: "#79909C",
      letterSpacing: "0.15px",
      fontSize: variable.fontSizeBase,
    },
    "input::-ms-input-placeholder": {
      /* Microsoft Edge */ color: "#79909C",
      letterSpacing: "0.15px",
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
      color: "#546E7A",
      letterSpacing: "0.15px",
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
        marginTop: "20px",
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
      letterSpacing: "0.15px",
      marginBottom: variable.spacer1,
    },
    ".mantine-List-root": {
      color: "#546E7A",
      fontSize: variable.fontSizeSmall,
      fontWeight: variable.fontWeightMedium,
      letterSpacing: "0.25px",
      lineHeight: "20px",
    },
    ".horizontal": {
      borderTop: "1px solid #E0E0E0",
      paddingTop: variable.spacer4,
      marginTop: variable.spacer4,
      gap: 30,
      [variable.mobileDown]: {
        gap: 15,
      },
      "& > div": {
        width: "40%",
        marginTop: variable.spacer1,
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
      top: 12,
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
      gap: 16,
    },
    ".mantine-Stack-root": {
      gap: 8,
    },
    ".mantine-InputWrapper-root > div": {
      padding: 0,
    },
    ".short-input-total": {
      display: "inline-block",
      width: "50%",
      paddingRight: variable.spacer4,
    },
    ".short-input-high-density": {
      display: "inline-block",
      width: "50%",
      paddingLeft: variable.spacer4,
    },
    ".accordion": {
      color: "rgba(0,116,255,0.5)",
      fontSize: variable.fontSizeBase,
      letterSpacing: "0.15px",
      lineHeight: "20px",
    },
    ".accordion-chevron-down": {
      position: "relative",
      top: 4,
      left: 4,
    },
    ".SEIFA-rank": {
      border: "1px solid #EDEFF1",
      opacity: "0.98",
      borderRadius: 8,
      backgroundColor: variable.white,
      boxShadow: "0 4px 12px 0 rgba(0,0,0,0.08), 0 4px 4px 0 rgba(0,0,0,0.02)",
      padding: variable.spacer4,
      ".SEIFA-rank-title": {
        overflow: "hidden",
        ".number": {
          float: "left",
          marginRight: 2.5 * variable.spacer1,
          padding: "4px 8px",
          borderRadius: 8,
          backgroundColor: "#FE7F2D",
          color: variable.white,
          fontWeight: variable.fontWeightRegular,
          fontSize: variable.fontSizeBase,
          "& .strong": {
            fontSize: 22,
          },
        },
        "& h2": {
          margin: 0,
          float: "left",
          "& .title": {
            display: "block",
            margin: 0,
            fontSize: 22,
            fontWeight: variable.fontWeightMedium,
            letterSpacing: 0,
            lineHeight: "28px",
          },
          "& .title-description": {
            display: "block",
            fontSize: variable.fontSizeXSmall,
            letterSpacing: 0.4,
            lineHeight: "16px",
            color: "#546E7A",
          },
        },
        "& button": {
          float: "right",
          fontSize: variable.fontSizeXSmall,
          letterSpacing: 0,
          lineHeight: "14px",
          padding: "8px 16px",
          backgroundColor: "#CFD8DB",
        },
      },
    },
    ".SEIFA-rank-content": {
      display: "block",
      marginTop: variable.spacer3,
      color: "#546E7A",
      fontSize: variable.fontSizeXSmall,
      letterSpacing: 0.4,
      lineHeight: "16px",
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
        color: "#79909C",
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
      backgroundColor: "#CFD8DB",
      "& span": {
        color: variable.black,
        fontSize: variable.fontSizeBase,
        letterSpacing: 0,
        lineHeight: "20px",
      },
      "&:hover,&:focus,&:active": {
        backgroundColor: "#B0BEC5",
      },
    },
  },
  calculationVariables: {},
  calculationVariablesRight: {},
  diabetesOpen: {
    clear: "both",
    backgroundColor: "#F5F5F5",
    paddingTop: variable.spacer5,
    paddingBottom: variable.spacer5,
    marginTop: variable.spacer5,
  },
  recommendList: {},
});

export default function Calculator() {
  let { content, diabetesOpen, recommendList } = useStyles().classes;

  // Stepper
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  // Form validation
  const form = useForm<{ age: number | undefined }>({
    initialValues: { age: undefined },
    validate: (values) => ({
      age:
        values.age === undefined
          ? "Age is required"
          : values.age < 30 || values.age > 79
          ? "Age must be between 30 - 79 years for a accurate risk to be assessed."
          : null,
    }),
    validateInputOnBlur: true,
  });

  //   Slider
  const marks = [
    { value: 20, label: "20%" },
    { value: 50, label: "50%" },
    { value: 80, label: "80%" },
  ];
  const [value, setValue] = useState(20);

  //   drawer
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <MantineProvider>
      <Stack className={content}>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Stepper active={active} onStepClick={setActive} breakpoint="sm">
            <Stepper.Step label="Enter risk calculation" description="">
              <Stack className="layout">
                <div className={recommendList}>
                  <Text>Assessment recommended for:</Text>
                  <List withPadding>
                    <List.Item>
                      Men and women aged 45-79 years without known CVD.
                    </List.Item>
                    <List.Item>
                      People diagnosed with diabetes (without known CVD) from
                      age 35 or time of diagnosis whichever is the latest.
                    </List.Item>
                    <List.Item>
                      For Aboriginal and/or Torres Strait Islander Peoples
                      without known CVD assess CVD risk in men and women aged
                      30-79 years using a risk calculator.
                    </List.Item>
                  </List>
                </div>
                <div className="horizontal">
                  <Label
                    labelName="Clinically determined high risk"
                    labelRequired="*"
                    labelDescription="Clinical conditions that automatically confer high risk. If either of these apply, you will be redirected to management for high risk category"
                  ></Label>
                  <div className="horizontal-right">
                    <Checkbox.Group
                      defaultValue={[""]}
                      description=""
                      orientation="vertical"
                      withAsterisk
                    >
                      <Checkbox
                        value="moderate-severe chronic kidney disease"
                        label="moderate-severe chronic kidney disease"
                      />
                      <Checkbox
                        value="familial hypercholesterolaemia"
                        label="familial hypercholesterolaemia"
                      />
                      <Checkbox
                        value="Neither conditions present"
                        label="Neither conditions present"
                      />
                    </Checkbox.Group>
                  </div>
                </div>

                <div className="horizontal">
                  <Label
                    labelName="Age"
                    labelRequired="*"
                    cardDropdownContent="Men and women aged 45-79 years without known CVD. People diagnosed with diabetes (without known CVD) from age 35 or time of diagnosis whichever is the latest. For Aboriginal and/or Torres Strait Islander Peoples without known CVD assess CVD risk in men and women aged 30-79 years using a risk calculator. 80 & older will be calculated at 79, and so may underestimated the risk."
                  ></Label>
                  <div className="horizontal-right">
                    <NumberInput
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

                <div className="horizontal">
                  <Label labelName="Sex at birth" labelRequired="*"></Label>
                  <div className="horizontal-right">
                    <Radio.Group
                      id="sex"
                      name="Sex at birth"
                      description=""
                      withAsterisk
                      size="md"
                    >
                      <Radio value="Female" label="Female" />
                      <Radio value="Male" label="Male" />
                    </Radio.Group>
                  </div>
                </div>

                <div className="horizontal">
                  <Label labelName="Smoking status" labelRequired="*"></Label>
                  <div className="horizontal-right">
                    <Radio.Group
                      id="smokingStatus"
                      name="Smoking status"
                      description=""
                      withAsterisk
                      size="md"
                      orientation="vertical"
                    >
                      <Radio value="Never smoked" label="Never smoked" />
                      <Radio
                        value="Previously smoked (ceased >1 year ago)"
                        label="Previously smoked (ceased >1 year ago)"
                      />
                      <Radio
                        value="Currently smokes (or ceased <1 year ago)"
                        label="Currently smokes (or ceased <1 year ago)"
                      />
                    </Radio.Group>
                  </div>
                </div>

                <div className="horizontal">
                  <Label labelName="Blood pressure" labelRequired="*"></Label>
                  <div className="horizontal-right">
                    <TextInput
                      id="bloodPressure"
                      withAsterisk
                      label=""
                      placeholder="SBP"
                      description=""
                      rightSection="mmHg"
                      radius="md"
                      rightSectionWidth={85}
                    />
                  </div>
                </div>

                <div className="horizontal">
                  <Label
                    labelName="Ratio of total cholesterol to HDL cholesterol"
                    labelRequired="*"
                  ></Label>
                  <div className="horizontal-right">
                    <TextInput
                      id="cholesterol"
                      withAsterisk
                      placeholder="Ratio of total cholesterol to HDL cholesterol"
                      description=""
                      radius="md"
                    />
                    <TextInput
                      className="short-input-total"
                      id="cholesterolTotal"
                      label=""
                      placeholder="Total"
                      description=""
                      rightSection="mmol/L"
                      radius="md"
                      rightSectionWidth={92}
                    />
                    <TextInput
                      className="short-input-high-density"
                      label=""
                      placeholder="high-density"
                      description=""
                      rightSection="mmol/L"
                      radius="md"
                      rightSectionWidth={92}
                    />
                    <div className="accordion">
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
                    >
                      <Radio value="no" label="No" />
                      <Radio value="yes" label="Yes" />
                    </Radio.Group>
                  </div>
                </div>

                <div className="horizontal">
                  <Label
                    labelName="Known history of electrocardiogram (ECG) confirmed atrial fibrillation"
                    labelRequired="*"
                  ></Label>
                  <div className="horizontal-right">
                    <Radio.Group
                      name="Known history of electrocardiogram (ECG) confirmed atrial fibrillation"
                      size="md"
                    >
                      <Radio value="No" label="No" />
                      <Radio value="Yes" label="Yes" />
                    </Radio.Group>
                  </div>
                </div>

                <div className="horizontal">
                  <Label
                    labelName="Socioeconomic status"
                    labelRequired="*"
                  ></Label>
                  <div className="horizontal-right">
                    <TextInput
                      withAsterisk
                      label=""
                      placeholder="Enter in postcode to generate SEIFA Rank"
                      radius="md"
                    />
                    <div className="SEIFA-rank">
                      <div className="SEIFA-rank-title">
                        <span className="number">
                          <span className="strong">3</span>/5
                        </span>
                        <h2>
                          <span className="title">SEIFA RANK</span>
                          <span className="title-description">
                            Highly disadvantaged
                          </span>
                        </h2>
                        <button>Adjust Score</button>
                      </div>
                      <div className="SEIFA-rank-content">
                        <span>
                          Since SEIFA is an average based on postcode, it may
                          not accurately reflect the socioeconomic status of all
                          individuals within that postcode. If the person has a
                          level of disadvantage that differs markedly from that
                          of the average for their postcode, their socioeconomic
                          quintile can be manually adjusted up or down in the
                          risk equation.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="horizontal">
                  <Label labelName="Diabetes status" labelRequired="*"></Label>
                  <div className="horizontal-right">
                    <Radio.Group
                      name="Diabetes status"
                      description=""
                      withAsterisk
                      size="md"
                    >
                      <Radio value="No" label="No" />
                      <Radio value="Yes" label="Yes" />
                    </Radio.Group>
                  </div>
                </div>
              </Stack>
              <div className={diabetesOpen}>
                <Stack className="layout">
                  <div className="gray-background-wrapper">
                    <Checkbox.Group>
                      <Checkbox label="Use diabetes specfic equation" />
                      <span>
                        The diabetes specific equation provides a more accurate
                        CVD risk estimate for people with type 2 diabetes. It
                        requires the following variables: time since diagnosis
                        of diabetes, HbA1c, eGFR, uACR, BMI and use of insulin.
                        Warning that this may underestimate risk in type 1
                        diabetes.
                      </span>
                    </Checkbox.Group>

                    <div className="horizontal">
                      <Label
                        labelName="Years since diabetes diagnosis"
                        labelRequired="*"
                      ></Label>
                      <div className="horizontal-right">
                        <TextInput
                          label=""
                          placeholder="Enter value"
                          rightSection="Years"
                          radius="md"
                          withAsterisk
                          rightSectionWidth={60}
                        />
                      </div>
                    </div>

                    <div className="horizontal">
                      <Label
                        labelName="Glycated haemoglobin (HbA1c)"
                        labelRequired="*"
                        labelDescription="Enter single non-fasting HbA1c in mmol/mol or %."
                      ></Label>
                      <div className="horizontal-right or-type">
                        <TextInput
                          className="or-type-left"
                          placeholder="Enter value"
                          rightSection="mmol/mol"
                          radius="md"
                          withAsterisk
                          rightSectionWidth={96}
                        />
                        <span>or</span>
                        <TextInput
                          className="or-type-right"
                          placeholder="Enter value"
                          rightSection="%"
                          radius="md"
                          withAsterisk
                          rightSectionWidth={35}
                        />
                      </div>
                    </div>

                    <div className="horizontal">
                      <Label labelName="uACR" labelRequired="*"></Label>
                      <div className="horizontal-right">
                        <TextInput
                          id="uACR"
                          placeholder="Enter value"
                          rightSection="mg/mmol"
                          radius="md"
                          withAsterisk
                          rightSectionWidth={92}
                        />
                      </div>
                    </div>

                    <div className="horizontal">
                      <Label
                        labelName="eGFR"
                        labelRequired="*"
                        labelDescription="Enter eGFR in mL/min/1.73 m2 or select if eGFR>=90"
                      ></Label>
                      <div className="horizontal-right or-type">
                        <TextInput
                          className="or-type-left or-type-flex-2"
                          id="eGFR"
                          placeholder="Enter value"
                          rightSection="mL/min/1.73 m2"
                          radius="md"
                          withAsterisk
                          rightSectionWidth={140}
                        />
                        <span>or</span>
                        <Chip
                          size="lg"
                          radius="md"
                          id="eGFRChip"
                          className="chip or-type-right"
                        >
                          eGFR&gt;=90
                        </Chip>
                      </div>
                    </div>

                    <div className="horizontal">
                      <Label
                        labelName="Body mass index (BMI)"
                        labelRequired="*"
                        labelDescription="Calculate BMI: kg/m2."
                      ></Label>
                      <div className="horizontal-right and-type">
                        <TextInput
                          id="bmiWeight"
                          placeholder="Weight"
                          rightSection="kg"
                          radius="md"
                          withAsterisk
                          rightSectionWidth={40}
                        />
                        <TextInput
                          id="bmiHeight"
                          placeholder="Height"
                          rightSection="meters"
                          radius="md"
                          withAsterisk
                          rightSectionWidth={70}
                        />
                      </div>
                    </div>

                    <div className="horizontal">
                      <Label
                        labelName="Use of Insulin within last 6 months"
                        labelRequired="*"
                      ></Label>
                      <div className="horizontal-right">
                        <Radio.Group
                          name="Use of Insulin within last 6 months"
                          description=""
                          withAsterisk
                          size="md"
                        >
                          <Radio value="No" label="No" />
                          <Radio value="Yes" label="Yes" />
                        </Radio.Group>
                      </div>
                    </div>
                  </div>
                </Stack>
              </div>
            </Stepper.Step>
            <Stepper.Step
              label="Consider reclassification factors"
              description=""
            >
              <Stack className="layout">Step 2 form</Stack>
            </Stepper.Step>
            <Stepper.Step
              label="Discuss risk result & management"
              description=""
            >
              <Stack className="layout">Step 3 form</Stack>
            </Stepper.Step>
            <Stepper.Completed>
              <Stack className="layout">
                Completed, click back button to get to previous step
              </Stack>
            </Stepper.Completed>
          </Stepper>
        </form>
        <Stack className="layout">
          <Group position="center" mt="xl">
            <Button
              variant="default"
              onClick={prevStep}
              className="buttom-button"
            >
              Back
            </Button>
            <Button onClick={nextStep} className="buttom-button">
              Calculate estimated risk
            </Button>
          </Group>
        </Stack>
      </Stack>
    </MantineProvider>
  );
}
