import mecEng from '../../Assets/subjectMecEng.svg'
import physics from '../../Assets/subjectPhysics.svg'
import elecEng from '../../Assets/subjectElectrical.svg'
import chem from '../../Assets/subjectChemistry.svg'
import math from '../../Assets/subjectMath.svg'
import cheEng from '../../Assets/subjectChemicalEng.svg'
import other from '../../Assets/subjectOther.svg'


export const SubjectPageData = [
    {
      img: mecEng,
      title: 'Mechanical Engineering ',
      subjectContent : [
        { name : 'Statics, Dynamics'},
        { name : 'Mechanics of Material'},
        { name : 'Strength of Material'},
        { name : 'Fluid Mechanics'},
        { name : 'Thermodynamics'},
        { name : 'Heat Transfer'},
        { name : 'Material Science'},
        { name : 'Machine Design'}
      ]
    },
    {
      img: math,
      title: 'Mathematics',
      subjectContent:[
        {name:'Algebra'},
        {name:'Calculus I'},
        {name:'Calculus II'},
        {name:'Calculus III'},
        {name:'Differential Equation'},
        {name:'namenear Algebra'},
        {name:'Trigonometry'},
        {name:'Appnameed Mathematics'},
        {name:'Geometry'}
      ]
    },
    {
      img: elecEng,
      title: 'Electrical Engineering',
      subjectContent:[
        {name:'Electric Circuits '},
        {name:'Power Electronics '},
        {name:'Signal Theory '},
        {name:'Intro to Power Systems '},
        {name:'Digital Signal Processing '},
        {name:'Electrical Machines '},
        {name:'Measurements '},
        {name:'Control System'}
      ]
    },
    {
      img: chem,
      title: 'Chemistry',
      subjectContent:[
        {name:'General Chemistry'},
        {name:'Chemistry I'},
        {name:'Chemistry II'},
        {name:'Organic Chemistry'}
      ]
    },
    {
      
      img: physics,
      title: 'Physics',
      subjectContent:[
        {name:'Physics-I'},
        {name:'Physics-II'}
      ]
    },
    {
      img: cheEng,
      title: 'Chemical Engineering',
      subjectContent:[
        {name:'Chemical Thermodynamics'},
        {name:'Chemical Reaction'},
        {name:' Engineering'},
        {name:'Transport Phenomenon'},
        {name:'Mass & Heat Transfer'}
      ]
    },
    {
      img: other,
      title: 'Other Subject',
      subjectContent:[
        {name:'Solidworks'},
        {name:'Matlab'},
        {name:'Autocad'},
        {name:'Lab Report or Projects'},
        {name:'Essay Writing'}
      ]
    },
  ]
  