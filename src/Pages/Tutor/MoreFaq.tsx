import { Accordion, createStyles,ChevronIcon } from "@mantine/core";
import close from "../../Assets/close.svg";
import { useState } from "react";
import { ActionIcon, AccordionControlProps, Box } from "@mantine/core";
// import { ChevronIcon } from "@mantine/core/lib/Select/SelectRightSection/ChevronIcon";

function AccordionControl(props: AccordionControlProps) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Accordion.Control {...props} />
      {/* <ActionIcon size="lg"></ActionIcon> */}
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
    title: "Is there an eligibility criteria for becoming a Edufeat expert?",
    discription:
    <text>We hire experts based on their subject expertise. The desired criteria for each subject are as follows:-
      <br /><br />
       Engineering - Chemical Engineering, Civil Engineering, Computer Science, Electrical Engineering, Mechanical Engineering Desired Qualification: B.Tech, M.Tech, Ph.D.
       <br /><br /> 
       Business-Accounting, Economics, Finance, Operations Management, Desired Qualification: MBA, CA, CS, ICWA, CMA, M. Com, MA, M.Phil., Ph.D. 
       <br /><br />
       Mathematics and Science Advanced Maths, Algebra/Pre Algebra, Biology, Calculus/Precalculus, Chemistry, Geometry, Statistics & Probability, Trigonometry Desired Qualification: B.Tech, M.Sc., M.Phil., or Ph.D.
       <br /><br />
       Physics, Advanced Physics, Earth Science Desired Qualification: B.Tech,B.Sc (Hons), M.Sc., M.Phil., or Ph.D.</text>,
  },
  {
    title: "I am not an Indian. Can I still apply?",
    discription:
    <text>To work as an Edufeat expert, it is mandatory to provide the following;
      <br /><br />
    – Indian PAN
    <br /><br />
    – Indian Bank account
    <br /><br />
    – Proof of Address issued in India (any one of Driving Licence, Voter ID or Aadhaar Card)
    </text>,
  },
  {
    title: "Is it safe to share Bank and PAN details with Edufeat?",
    discription:
    <text>"-Yes, It is safe to share. At Edufeat, we give confidentiality foremost priority.
      <br /><br />
      PAN and Bank details are taken from candidates for processing payments and verification purposes."
      </text>,
  },
  {
    title: "Why can I not see the subject of my choice when signing up?",
    discription:
    <text>We hire Experts when there are vacancies.
      <br /><br />
      Once there are sufficient Experts, we no longer show the subject while signing up. 
      <br /><br />
      But as soon as vacancies are available, you will be able to see.</text>,
  },
  {
    title: "I couldn't qualify after using every attempt. What should I do?",
    discription:
    <text>
      Please re-apply after 30 days.
      <br /><br />
      Please contact us to reset your account .</text>,
  },
  {
    title: "I do not have a PAN card. What should I do?",
    discription:
    <text>PAN card is mandatory. In case you do not have one, you may apply here
      <br /> https://www.pan.utiitsl.com/PAN/.<br />
    After receiving your PAN card, you may apply.</text>,
  },
  {
    title: "I do not have a Bank Account or I have a Joint Bank Account: Can I use someone else’s bank account?",
    discription:
    <text>We only process payments to our Expert’s bank account.<br /> 
    As an applicant, you have to provide your own details. We will not be accepting anyone else’s account as it will be verified. 
    <br /><br />
    Joint bank accounts are also not accepted. </text>,
  },
  {
    title: "I have completed all the required steps. What should I do now? ",
    discription:
    <text>Please allow our team 10 working days to verify your application and get back. Please check your email for any update. </text>,
  },
];

export const MoreFaqAccordionComponent = () => {
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
    >
      {AccordionData.map((item, i) => {
        return (
          <Accordion.Item className='border-[#F0F7FD] border-2' value={`item-${i}`}>
            <AccordionControl chevron={value === `item-${i}`?<img src={close} alt="close" />:<ChevronIcon />} >
              <h2 className="text-primary text-lg font-medium">{item.title}</h2>
            </AccordionControl>
            <Accordion.Panel>
              <div className="text-base ">{item.discription}</div>
            </Accordion.Panel>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};