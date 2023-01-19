import {
  Accordion,
  ChevronIcon,
  CloseButton,
  createStyles,
} from "@mantine/core";
import close from "../../Assets/close.svg";
import { useState } from "react";
import { ActionIcon, AccordionControlProps, Box } from "@mantine/core";
function AccordionControl(props: AccordionControlProps) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Accordion.Control {...props} />
      <ActionIcon size="lg"></ActionIcon>
    </Box>
  );
}
const useStyles = createStyles((theme) => ({
  root: {
    marginBottom: "20px",
    borderRadius: "8px",
  },

  item: {
    border: "1px solid transparent",
    position: "relative",
    backgroundColor: "#FFFFFF",
    zIndex: 0,
    transition: "transform 150ms ease",
    marginBottom: "20px",
    padding: "10px 8px",
    borderRadius: 8,
    "&[data-active]": {
      marginTop: "20px",
      backgroundColor: "#E7F4FF",

      borderRadius: 16,
      zIndex: 1,
    },
  },

  chevron: {
    "&[data-rotate]": {
      display: "",
    },
  },
}));
const AccordionData = [
  {
    title: "Am I required to pay a fee when starting my application?",
    discription:
      "No, we do not charge any fee at any point of time during your tenure while working with Edufeat.",
  },
  {
    title: "What are the available subjects that I can apply for?",
    discription: (
      <text>
        Engineering-
        <br />
        Chemical Engineering
        <br />
        Civil Engineering
        <br />
        Computer Science Engineering
        <br />
        Electrical Engineering
        <br />
        Mechanical Engineering
        <br />
        <br />
        For other subjects check out our subject list.
      </text>
    ),
  },
  {
    title: "What will be my work as an Edufeat Expert?",
    discription: (
      <text>
        Our Experts answer questions asked by students globally.
        <br />
        <br />
        The experts are required to follow quality rules defined by Edufeat and
        ensure that the guidelines are strictly followed while maintaining
        academic integrity.
      </text>
    ),
  },
  {
    title: "How and when does Edufeat pay its experts?",
    discription: (
      <text>
        We process Experts payments weekly.
        <br />
        <br />
        You will be getting your payments by the end of each week. Payments are
        processed through NEFT Bank transfer only.
        <br />
        <br />
        ​​Note: We do not process payment through Paytm /Google pay/ Airtel
        Money/Cash/BHIM
      </text>
    ),
  },
];

export const FaqAccordionComponent = () => {
  const { classes } = useStyles();
  const [value, setValue] = useState<string | null>(null);
  return (
    <Accordion
      mx="auto"
      variant="filled"
      defaultValue="customization"
      classNames={classes}
      className={classes.root}
      value={value}
      onChange={setValue}
      disableChevronRotation

      // styles={{
      //   chevron: {

      //     '&[data-rotate]': {
      //       // transform: 'rotate(45deg)',
      //       display:"hidden"
      //     },
      //   },
      // }}
    >
      {AccordionData.map((item, i) => {
        return (
          <Accordion.Item value={`item-${i}`}>
            <AccordionControl
              chevron={
                value === `item-${i}` ? (
                  <img src={close} alt="close" />
                ) : (
                  <ChevronIcon />
                )
              }
            >
              <h2 className="text-primary text-lg font-medium">{item.title}</h2>
            </AccordionControl>
            <Accordion.Panel>
              <div className="text-base text-justify">{item.discription}</div>
            </Accordion.Panel>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};
