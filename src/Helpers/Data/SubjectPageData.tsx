import mecEng from "../../Assets/subjectMecEng.svg";
import physics from "../../Assets/subjectPhysics.svg";
import elecEng from "../../Assets/subjectElectrical.svg";
import chem from "../../Assets/subjectChemistry.svg";
import math from "../../Assets/subjectMath.svg";
import cheEng from "../../Assets/subjectChemicalEng.svg";
import other from "../../Assets/subjectOther.svg";

export const SubjectPageData = [
  {
    img: mecEng,
    title: "Mechanical Engineering ",
    subjectContent: [
      { name: "Static" },
      { name: "Fluid Mechanics" },
      { name: "Heat Transfer" },
      { name: "Heating" },
      { name: "Ventilation and Air Conditioning(HVAC)" },
      { name: "Kinematics of Machinery" },
      { name: "Machine Design" },
      { name: "Manufacturing Processes" },
      { name: "Material Science" },
      { name: "Mechanics of Materials" },
      { name: "Statics" },
      { name: "Thermodynamics" },
      { name: "Vibrations" },
      { name: "Gas Dynamics" },
      { name: "Finite Element Analysis" },
    ],
    // subjectContent: (
    //   <text>
    //     Statics, Dynamics
    //     <br />
    //     Mechanics of Material
    //     <br /> Strength of Material
    //     <br /> Fluid Mechanics <br />
    //     Thermodynamics
    //     <br /> Heat Transfer
    //     <br /> Material Science
    //     <br /> Machine Design
    //   </text>
    // ),
  },
  {
    img:other,
    title:'Civil Engineering',
    subjectContent:[
      {name:'Construction Project Management'},
      {name:'Environmental Engineering'},
      {name:'Foundation Design'},
      {name:'Geotechnical Engineering'},
      {name:'Hydraulic Engineering'},
      {name:'Mechanics of Materials'},
      {name:'Reinforced Cement Concrete'},
      {name:'Structural Analysis'},
      {name:'Surveying'},
      {name:'Transportation and Highway Engineering'},
      {name:'Water Resources Engineering '},

    ]
  },
  {
    img: elecEng,
    title: "Electrical Engineering",
    subjectContent: [
      { name: "Analog Electronics " },
      { name: "Control Systems" },
      { name: "Digital Electronics" },
      { name: "Electrical Circuit and Networks" },
      { name: "Electrical Machines " },
      { name: "Measurements and Instrumentation " },
      { name: "Power Systems " },
      { name: "Signals and Systems" },
      { name: "Communication Engineering" },
      { name: "Electromagnetics" },
    ],
  },
  {
    img: chem,
    title: "Chemistry",
    subjectContent: [
      { name: "General Chemistry" },
      { name: "Chemistry I" },
      { name: "Chemistry II" },
      { name: "Organic Chemistry" },
    ],
  },
  {
    img: physics,
    title: "Physics",
    subjectContent: [
      { name: "Physics-I" },
      { name: "Physics-II" },
      { name: "Modern Physics" },
    ],
  },
  {
    img: cheEng,
    title: "Chemical Engineering",
    subjectContent: [
      { name: "Chemical Processes" },
      { name: "Chemical Reaction Engineering" },
      { name: "Chemical Thermodynamics" },
      { name: "Fluid and Particle Mechanics" },
      { name: "Mass & Heat Transfer" },
      { name: "Plant Design Economics" },
      { name: "Separation Processes" },
      { name: "Transport Phenomena" },
    ],
  },
  {
    img: other,
    title: "Other Subject",
    subjectContent: [
      { name: "Biology" },
      { name: "Solidworks" },
      { name: "Matlab" },
      { name: "Autocad" },
      { name: "C" },
      { name: "C++" },
      { name: "Lab Report or Projects" },
      { name: "Essay Writing" },
    ],
  },
  {
    img:other,
    title:'Statistics and Probability',
    subjectContent:[
      {name:'Business Statistics'},
      {name:'Elementary Statistics'},
      {name:'Probability'}
    ]
  },
  {
    img:other,
    title:'Economics',
    subjectContent:[
      {name:'Finance'},
      {name:'Economics'},
      {name:'Accounting'},
      {name:'Operations Management'}
    ]
  },
  {
    img: math,
    title: "Mathematics",
    subjectContent: [
      // { name: "Algebra" },
      { name: "Calculus" },
      // { name: "Calculus II" },
      // { name: "Calculus III" },
      { name: "Linear Algebra" },
      { name: "Differential Equation" },
      { name: "Numerical Methods" },
      { name: "Discrete Mathematics" },
      // { name: "Geometry" },
    ],
  },
];
