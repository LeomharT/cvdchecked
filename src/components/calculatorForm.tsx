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
    width: "100%",
    maxWidth: "960px",
    margin: "0 auto",
    gap: 0,
    [variable.mdDown]: {
      padding: variable.oneColPaddingMobile,
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
        maxWidth: "770px",
        margin: "auto",
      },
      "& .mantine-Stepper-content": {
        marginTop: "20px",
      },
      "& .mantine-Stepper-separator": {
        backgroundColor: "transparent",
      },
      "& .mantine-Stepper-stepLabel": {
        maxWidth: "165px",
      },
    },
  },
  calculationVariables: {},
  calculationVariablesRight: {},
  diabetesOpen: {
    clear: "both",
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
              <div className={recommendList}>
                <Text>Assessment recommended for:</Text>
                <List withPadding>
                  <List.Item>
                    Men and women aged 45-79 years without known CVD.
                  </List.Item>
                  <List.Item>
                    People diagnosed with diabetes (without known CVD) from age
                    35 or time of diagnosis whichever is the latest.
                  </List.Item>
                  <List.Item>
                    For Aboriginal and/or Torres Strait Islander Peoples without
                    known CVD assess CVD risk in men and women aged 30-79 years
                    using a risk calculator.
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
                    id="cholesterolTotal"
                    label=""
                    placeholder="Total"
                    description=""
                    rightSection="mmol/L"
                    radius="md"
                    rightSectionWidth={92}
                  />
                  <TextInput
                    label=""
                    placeholder="high-density"
                    description=""
                    rightSection="mmol/L"
                    radius="md"
                    rightSectionWidth={92}
                  />

                  <div className="accordion-up">
                    Hide total & high-density lipoprotein values fields
                    <svg
                      className="accordion-chevron-down"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path
                        d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
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
                    <Radio value="No" label="No" />
                    <Radio value="Yes" label="Yes" />
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
                  <div className="SEIFA-rank-content">
                    <h2>
                      SEIFA RANK3 <span>/5</span>
                    </h2>
                    <button>Adjust Score</button>
                    <span>
                      Since SEIFA is an average based on postcode, it may not
                      accurately reflect the socioeconomic status of all
                      individuals within that postcode. If the person has a
                      level of disadvantage that differs markedly from that of
                      the average for their postcode, their socioeconomic
                      quintile can be manually adjusted up or down in the risk
                      equation.
                    </span>
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
              <div className={diabetesOpen}>
                <Checkbox.Group>
                  <Checkbox label="Use diabetes specfic equation" />
                  <span>
                    The diabetes specific equation provides a more accurate CVD
                    risk estimate for people with type 2 diabetes. It requires
                    the following variables: time since diagnosis of diabetes,
                    HbA1c, eGFR, uACR, BMI and use of insulin. Warning that this
                    may underestimate risk in type 1 diabetes.
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
                  <div className="horizontal-right">
                    <TextInput
                      placeholder="Enter value"
                      rightSection="mmol/mol"
                      radius="md"
                      withAsterisk
                      rightSectionWidth={96}
                    />
                    or
                    <TextInput
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
                  <div className="horizontal-right">
                    <TextInput
                      id="eGFR"
                      placeholder="Enter value"
                      rightSection="mL/min/1.73 m2"
                      radius="md"
                      withAsterisk
                      rightSectionWidth={140}
                    />
                    or
                    <Chip size="lg" radius="md" id="eGFRChip">
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
                  <div className="horizontal-right">
                    <TextInput
                      id="bmiWeight"
                      placeholder="Weight"
                      rightSection="kg"
                      radius="md"
                      withAsterisk
                      rightSectionWidth={40}
                    />
                    <span>or</span>
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
            </Stepper.Step>
            <Stepper.Step
              label="Consider reclassification factors"
              description=""
            >
              Step 2 content
            </Stepper.Step>
            <Stepper.Step
              label="Discuss risk result & management"
              description=""
            >
              Step 3 content
            </Stepper.Step>
            <Stepper.Completed>
              Completed, click back button to get to previous step
            </Stepper.Completed>
          </Stepper>
        </form>
        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button onClick={nextStep}>Calculate estimated risk</Button>
        </Group>
      </Stack>
    </MantineProvider>
  );
}
