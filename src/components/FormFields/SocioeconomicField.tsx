import { TextInput, createStyles, Stack } from "@mantine/core";
import Label from "../Label";
import variable from "../../theme/variables";

export interface IComponentClassNames {
  content: string;
}

const useStyles = createStyles({
  content: {
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
  },
});

export default function SocioeconomicField() {
  let { content } = useStyles().classes;

  return (
    <Stack className={content}>
      <div className="horizontal">
        <Label labelName="Socioeconomic status"></Label>
        <div className="horizontal-right">
          <TextInput
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
                <span className="title-description">Highly disadvantaged</span>
              </h2>
              <button>Adjust Score</button>
            </div>
            <div className="SEIFA-rank-content">
              <span>
                Since SEIFA is an average based on postcode, it may not
                accurately reflect the socioeconomic status of all individuals
                within that postcode. If the person has a level of disadvantage
                that differs markedly from that of the average for their
                postcode, their socioeconomic quintile can be manually adjusted
                up or down in the risk equation.
              </span>
            </div>
          </div>
        </div>
      </div>
    </Stack>
  );
}
