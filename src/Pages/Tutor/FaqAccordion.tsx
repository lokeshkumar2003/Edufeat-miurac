import { Accordion, ChevronIcon, CloseButton, createStyles } from '@mantine/core'
import close from '../../Assets/close.svg'
import {useState} from "react"
import { ActionIcon, AccordionControlProps, Box } from '@mantine/core'
function AccordionControl(props: AccordionControlProps) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Accordion.Control {...props} />
      <ActionIcon size='lg'></ActionIcon>
    </Box>
  )
}
const useStyles = createStyles((theme) => ({
  root: {
    marginBottom: '20px',
    borderRadius: '8px',
  },

  item: {
    border: '1px solid transparent',
    position: 'relative',
    backgroundColor: '#FFFFFF',
    zIndex: 0,
    transition: 'transform 150ms ease',
    marginBottom: '20px',
    padding: '10px 8px',
    borderRadius: 8,
    '&[data-active]': {
      marginTop: '20px',
      backgroundColor: '#E7F4FF',
  
      borderRadius: 16,
      zIndex: 1,
    },
  },

  chevron: {
    '&[data-rotate]': {
      display:''
    },
    
  },
}))
const AccordionData = [
  {
    title: 'Am I required to pay a fee when starting my application?',
    discription:
      'No, we do not charge any fee at any point of time during your tenure while working with Edufeat.',
  },
  {
    title: 'What are the available subjects that I can apply for?',
    discription:
      'No, we do not charge any fee at any point of time during your tenure while working with Edufeat.',
  },
  {
    title: 'What will be my work as an Edufeat Expert?',
    discription:
      'No, we do not charge any fee at any point of time during your tenure while working with Edufeat.',
  },
  {
    title: 'How and when does Edufeat pay its experts?',
    discription:
      'No, we do not charge any fee at any point of time during your tenure while working with Edufeat.',
  },
]

export const FaqAccordionComponent = () => {
  const { classes } = useStyles()
  const [value, setValue] = useState<string | null>(null);  
  return (
    <Accordion
      mx='auto'
      variant='filled'
      defaultValue='customization'
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
            <AccordionControl chevron={value === `item-${i}`?<CloseButton />:<ChevronIcon />} >
              <h2 className='text-primary text-lg font-medium'>{item.title}</h2>
            </AccordionControl>
            <Accordion.Panel>
              <div className='text-base text-justify'>{item.discription}</div>
            </Accordion.Panel>
          </Accordion.Item>
        )
      })}
    </Accordion>
  )
}
