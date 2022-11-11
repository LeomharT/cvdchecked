import { createStyles, Text, HoverCard, Drawer } from "@mantine/core";
import { useContext, useState } from "react";
import variable from "../theme/variables";
import { CmsContext } from "./CmsContext";

interface StyledLinkProps {
  labelName?: string;
  labelRequired?: string;
  labelDescription?: string;
  cardDropdownContent?: string;
}

export interface IComponentClassNames {
  label: string;
  externalLink: string;
}

export default function Label({
  labelName,
  labelRequired,
  labelDescription,
  cardDropdownContent,
}: StyledLinkProps) {
  const useStyles = createStyles({
    label: {
      width: "50%",
      float: "left",
      "& .mantine-InputWrapper-label": {
        color: variable.black,
        fontSize: variable.fontSizeBase,
        fontWeight: variable.fontWeightMedium,
        letterSpacing: "0.15px",
        lineheight: "17px",
      },
      "& .mantine-InputWrapper-required": {
        color: "#FF0000",
      },
      "& .circle-question": {
        fill: "#546e7a",
        marginLeft: "4px",
        verticalAlign: "middle",
      },
      "& .mantine-InputWrapper-description": {
        color: "#546E7A",
        fontSize: variable.fontSizeSmall,
        letterSpacing: "0.25px",
        lineHeight: "20px",
      },
    },
    externalLink: {
      fill: "#0074FF",
      marginLeft: variable.spacingXs,
      fontWeight: variable.fontWeightBold,
      cursor: "pointer",
    },
  });

  let { label, externalLink } = useStyles().classes;
  const [drawerOpened, setDrawerOpened] = useState(false);
  const CmsData = useContext(CmsContext);

  return (
    <div className={label}>
      <Text component="label" className="mantine-InputWrapper-label">
        {labelName}
        <Text component="span" className="mantine-InputWrapper-required">
          {labelRequired}
        </Text>
        <HoverCard width={360} shadow="md" withArrow position="top-start">
          <HoverCard.Target>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="15px"
              height="15px"
            >
              <path d="M256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28zm7.67-24h-16c-6.627 0-12-5.373-12-12v-.381c0-70.343 77.44-63.619 77.44-107.408 0-20.016-17.761-40.211-57.44-40.211-29.144 0-44.265 9.649-59.211 28.692-3.908 4.98-11.054 5.995-16.248 2.376l-13.134-9.15c-5.625-3.919-6.86-11.771-2.645-17.177C185.658 133.514 210.842 116 255.67 116c52.32 0 97.44 29.751 97.44 80.211 0 67.414-77.44 63.849-77.44 107.408V304c0 6.627-5.373 12-12 12zM256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8z" />
            </svg>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Text size="sm" mt="md">
              {cardDropdownContent}
              <svg
                className={externalLink}
                onClick={() => setDrawerOpened(true)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                width="15px"
                height="15px"
              >
                <path d="M195.515 374.828c-4.686-4.686-4.686-12.284 0-16.971l323.15-323.15-.707-.707-89.958.342c-6.627 0-12-5.373-12-12v-9.999c0-6.628 5.372-12 12-12L564 0c6.627 0 12 5.372 12 12l-.343 136c0 6.627-5.373 12-12 12h-9.999c-6.627 0-12-5.373-12-12L542 58.042l-.707-.707-323.15 323.15c-4.686 4.686-12.284 4.686-16.971 0l-5.657-5.657zm232-155.633l-8 8A12 12 0 0 0 416 235.68V464c0 8.837-7.164 16-16 16H48c-8.836 0-16-7.163-16-16V112c0-8.837 7.164-16 16-16h339.976c3.183 0 6.235-1.264 8.485-3.515l8-8c7.56-7.56 2.206-20.485-8.485-20.485H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V227.681c0-10.691-12.926-16.045-20.485-8.486z" />
              </svg>
              <br />
            </Text>
          </HoverCard.Dropdown>
        </HoverCard>
        <Text
          component="div"
          className="mantine-Text-root mantine-InputWrapper-description"
        >
          {labelDescription}
        </Text>
        <Drawer
          opened={drawerOpened}
          onClose={() => setDrawerOpened(false)}
          title=""
          position="right"
          overlayOpacity={0.6}
          padding="xl"
          size="xl"
        >
          {CmsData}
        </Drawer>
      </Text>
    </div>
  );
}
