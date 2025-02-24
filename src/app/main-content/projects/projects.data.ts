import { JoinComponent } from './join/join.component';
import { ElPolloLocoComponent } from './el-pollo-loco/el-pollo-loco.component';

export const PROJECTS = [
  {
    name: 'Join',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
    component: JoinComponent,
    description: [
      { title: 'What is this project about?', text: 'A task manager inspired by the Kanban system...' },
      { title: 'Features', text: 'Drag and drop task management...' },
    ],
    github: 'https://github.com/yourusername/join',
    live: 'https://yourprojectliveurl.com',
    image: './../../../assets/images/joinProject.svg' 
  },
  {
    name: 'El Pollo Loco',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    component: ElPolloLocoComponent,
    description: [
      { title: 'What is this project about?', text: 'A fun jump-and-run game...' },
      { title: 'Features', text: 'Addictive gameplay and multiple levels...' },
    ],
    github: 'https://github.com/yourusername/el-pollo-loco',
    live: 'https://yourprojectliveurl.com/el-pollo-loco',
    image: './../../../assets/images/elPolloLocoProject.svg'  
  }
];


