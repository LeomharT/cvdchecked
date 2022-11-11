import { MantineProvider } from '@mantine/core';
import mantineTheme from './theme/mantineTheme';
import CalculatorForm from './components/calculatorForm';
import StyleGuide from './components/styleGuide';
import Drawer from './components/Drawer';

export default function App() {
  console.log(mantineTheme);


  return (
    <MantineProvider theme={mantineTheme} withGlobalStyles withNormalizeCSS>
      {/* <Drawer /> */}
      <CalculatorForm />
      {/* <StyleGuide /> */}
    </MantineProvider>
  );
}