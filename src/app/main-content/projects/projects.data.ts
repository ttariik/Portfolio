import { JoinComponent } from './join/join.component';
import { ElPolloLocoComponent } from './el-pollo-loco/el-pollo-loco.component';

export const PROJECTS = [
  {
    name: 'Join',
    technologies: [
      { name: 'html-green-icon', label: 'HTML' },
      { name: 'css-green-icon', label: 'CSS' },
      { name: 'javascript-green-icon', label: 'JavaScript' },
      { name: 'firebase-green-icon', label: 'Firebase' },
    ],
    component: JoinComponent,
    description: [
      { title: 'What is this project about?', text: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.' },
      // { title: 'Features', text: 'Drag and drop task management...' },
    ],
    github: 'https://github.com/yourusername/join',
    live: 'https://yourprojectliveurl.com',
    image: './../../../assets/svg/joinPoject.svg' ,
    previewImage: './../../../assets/svg/join-project.svg' 
  },
  {
    name: 'El Pollo Loco',
    technologies: [
      { name: 'html-green-icon', label: 'HTML' },
      { name: 'css-green-icon', label: 'CSS' },
      { name: 'javascript-green-icon', label: 'JavaScript' }
    ],
    component: ElPolloLocoComponent,
    description: [
      { title: 'What is this project about?', text: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.' },
      // { title: 'Features', text: 'Addictive gameplay and multiple levels...' },
    ],
    github: 'https://github.com/yourusername/el-pollo-loco',
    live: 'https://yourprojectliveurl.com/el-pollo-loco',
    image: './../../../assets/svg/elPolloLoco-Project.svg',
    previewImage: './../../../assets/svg/elPolloLoco.svg' 
  }
];
