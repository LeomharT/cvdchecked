import { Drawer, MantineProvider } from "@mantine/core";
import { useContext, useState } from "react";
import { CmsContext } from "./CmsContext";

export default function DrawerTest() {
  const [opened, setOpened] = useState(false);
  const CmsData = useContext(CmsContext);

  return (
    <MantineProvider>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title=""
        position="right"
        overlayOpacity={0.6}
        padding="xl"
        size="xl"
      >
        {CmsData}
      </Drawer>
    </MantineProvider>
  );
}
