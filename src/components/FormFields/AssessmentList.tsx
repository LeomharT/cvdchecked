import { Text, List, createStyles } from "@mantine/core";
import variable from "../../theme/variables";

export interface IComponentClassNames {
  recommendList: string;
}
const useStyles = createStyles({
  recommendList: {
  ".mantine-List-root": {
    color: "#546E7A",
    fontSize: variable.fontSizeSmall,
    fontWeight: variable.fontWeightMedium,
    letterSpacing: "0.25px",
    lineHeight: "20px",
  },
  },
});

export default function AssessmentList() {
  let { recommendList } = useStyles().classes;
  return (
    <div className={recommendList}>
      <Text>
        Assessment recommended for the following individuals without known CVD :
      </Text>
      <List withPadding>
        <List.Item>Men and women aged 45-79 years.</List.Item>
        <List.Item>
          People diagnosed with diabetes from age 35 or time of diagnosis
          whichever is the latest.
        </List.Item>
        <List.Item>
          For Aboriginal and or Torres Strait Islander Peoples assess CVD risk
          in men and women aged 30-79 years using a risk calculator.
        </List.Item>
      </List>
    </div>
  );
}
