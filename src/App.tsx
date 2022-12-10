import { MantineProvider } from "@mantine/core";
import mantineTheme from "./theme/mantineTheme";
import CalculatorForm from "./components/calculatorForm";
import Form from "./components/Form";
import StyleGuide from "./components/styleGuide";
import Drawer from "./components/Drawer";


export default function App() {
  return (
    <MantineProvider theme={mantineTheme} withGlobalStyles withNormalizeCSS>
      {/* <Drawer /> */}
      <Form />
      {/* <CalculatorForm /> */}
      {/* <StyleGuide /> */}
    </MantineProvider>
  );
}
