import { Checkbox } from "@mantine/core";

export default function SpecficEquationField() {
  return (
    <div>
      <Checkbox
        label="Use diabetes specfic equation"
        className="diabetes-equation-title"
      />
      <span className="diabetes-equation-text">
        The diabetes specific equation provides a more accurate CVD risk
        estimate for people with type 2 diabetes. It requires the following
        variables: time since diagnosis of diabetes, HbA1c, eGFR, uACR, BMI and
        use of insulin. Warning that this may underestimate risk in type 1
        diabetes.
      </span>
    </div>
  );
}
