import React, {Component} from 'react';
import BasePage from '../Base';  
import { useAuth } from '../../context/AuthContext';
import ProjectCard from '../../component/ProjCard/projectcard';
import './style/manage.css';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import projImage from '../images/image01.jpg'

import ProjCard from './card';

const proj = {
  id: 1,
  title: 'Sample Project',
  creator: 'John Doe',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum erat odio, et pretium lorem interdum sed.',
  budget: '1000',
  status: 'active',
  startDate: '23-4-24',
  endDate: '23-4-24',
  collaborators: ['Jane Smith', 'Alice Johnson'],
  creatorId: 'user123',
  tags: ['Web Development', 'React', 'JavaScript'],
  type: 'Web Application',
  framework: 'React',
  language: 'JavaScript',
  skillsRequired: ['Frontend Development', 'UI/UX Design'],
  expertise: 'Intermediate',
  image: projImage,
  progress: 69, // Example progress value
};
const proj_c = {
  id: 1,
  title: 'Sample Project',
  creator: 'John Doe',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum erat odio, et pretium lorem interdum sed.',
  budget: '1000',
  status: 'completed',
  startDate: '23-4-24',
  endDate: '23-4-24',
  collaborators: ['Jane Smith', 'Alice Johnson'],
  creatorId: 'user123',
  tags: ['Web Development', 'React', 'JavaScript'],
  type: 'Web Application',
  framework: 'React',
  language: 'JavaScript',
  skillsRequired: ['Frontend Development', 'UI/UX Design'],
  expertise: 'Intermediate',
  image: projImage,
  progress: 69, // Example progress value
};
const projects = [proj, proj, proj_c, proj_c, proj, proj_c];



export default class ManageProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notification: '',
      selectedProject: null,
      editMode: null,
    };
  }

  handleProjectSelect = (project, mode) => {
    this.setState({ selectedProject: project, editMode: mode });
  };

  handleTaskSubmit = (e) => {
    e.preventDefault();
    const collaborator = e.target.collaborator.value;
    const description = e.target.task.value;
    const deadline = e.target.deadline.value;

    if (!collaborator) {
      alert('Please select at least one collaborator.');
      return;
    }

    const newTask = { collaborator, description, deadline };

    this.setState((prevState) => ({
      selectedProject: {
        ...prevState.selectedProject,
        tasks: prevState.selectedProject.tasks ? [...prevState.selectedProject.tasks, newTask] : [newTask],
      },
    }));

    alert(`Collaborators ${collaborator} notified about ${description} with deadline ${deadline}`);
    e.target.reset();
  };

  handleNotificationSubmit = (e) => {
    e.preventDefault();
    alert(`Notification sent: ${this.state.notification}`);
    this.setState({ notification: '' });
  };

  handleProgressChange = (e) => {
    const newProgress = parseInt(e.target.value);
    this.setState((prevState) => ({
      selectedProject: {
        ...prevState.selectedProject,
        progress: newProgress,
      },
    }));
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      selectedProject: {
        ...prevState.selectedProject,
        [name]: value,
      },
    }));
  };

  handleUpdateInfo = () => {
    alert('Project information updated.');
  };

  handleCloseDetails = () => {
    this.setState({ selectedProject: null });
  };

  render() {
    const { notification, selectedProject, editMode } = this.state;

    const sortedProjects = projects.sort((a, b) => {
      if (a.status === 'active' && b.status !== 'active') return -1;
      if (a.status !== 'active' && b.status === 'active') return 1;
      return 0;
    });

    return (
      <BasePage toggleHeader={true} toggleFooter={false} toggleSidebar={true}>
        <div className="manage-project-container">
          <h2>Manage Projects</h2>
          <div className="project-list">
            <ul>
              {sortedProjects.map((project) => (
                <div
                  key={project.id}
                  className={`project-item ${project.status !== 'active' ? 'inactive' : ''}`}
                >
                  <li>
                    <a href="/project/:id">
                    <ProjCard name={project.name} desc={project.description} img={project.image} />
                    </a>
                    <div className="project-icons">
                      <div onClick={() => this.handleProjectSelect(project, 'edit')}><EditOutlinedIcon /></div>
                      <div onClick={() => this.handleProjectSelect(project, 'progress')}><StarHalfOutlinedIcon /></div>
                      <div onClick={() => this.handleProjectSelect(project, 'task')}><AssignmentOutlinedIcon /></div>
                      <div onClick={() => this.handleProjectSelect(project, 'notification')}><NotificationsNoneOutlinedIcon /></div>
                    </div>
                  </li>
                </div>
              ))}

          {selectedProject && (selectedProject.status==='active') && (
            <div className="project-details-overlay">
              <div className="project-details">
                <button className="close-button" onClick={this.handleCloseDetails}>
                  &times;
                </button>
                {editMode === 'edit' && (
                  <>
                    <h2>Edit Project: {selectedProject.title}</h2>
                    <form className="project-details-form">
                      <input type="text" name="title" placeholder="Title" value={selectedProject.title} onChange={this.handleInputChange} />
                      <textarea name="description" placeholder="Description" value={selectedProject.description} onChange={this.handleInputChange}></textarea>
                      <input type="number" name="budget" placeholder="Budget" value={selectedProject.budget} onChange={this.handleInputChange} />
                      <input type="date" name="startDate" placeholder="Start Date" value={selectedProject.startDate} onChange={this.handleInputChange} />
                      <input type="date" name="endDate" placeholder="End Date" value={selectedProject.endDate} onChange={this.handleInputChange} />
                      <input type="text" name="tags" placeholder="Tags (comma-separated)" value={selectedProject.tags} onChange={this.handleInputChange} />
                      <button type="button" onClick={this.handleUpdateInfo}>Update Info</button>
                    </form>
                  </>
                )}
                {editMode === 'progress' && (
                  <>
                    <h2>Edit Progress Bar</h2>
                    <div className="progress-bar-container">
                      <label htmlFor="progress">Progress:</label>
                      <input type="range" id="progress" min="0" max="100" value={selectedProject.progress} onChange={this.handleProgressChange} />
                      <span>{selectedProject.progress}%</span>
                    </div>
                  </>
                )}
                {editMode === 'task' && (
                  <div className="task-management">
                    <h3>Task Management</h3>
                    <form onSubmit={this.handleTaskSubmit}>
                      <input type="text" name="collaborator" placeholder="Collaborator(s)" required />
                      <input type="text" name="task" placeholder="Task description" required />
                      <input type="date" name="deadline" required />
                      <button type="submit">Add Task</button>
                    </form>
                    <ul>
                      {selectedProject.tasks && selectedProject.tasks.map((task, index) => (
                        <li key={index}>{task.description} - Assigned to: {task.collaborator} - Deadline: {task.deadline}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {editMode === 'notification' && (
                  <div className="notification-form">
                    <h3>Send Notification</h3>
                    <form onSubmit={this.handleNotificationSubmit}>
                      <input type="text" placeholder="Notification message" value={notification} onChange={(e) => this.setState({ notification: e.target.value })} required />
                      <button type="submit">Send</button>
                    </form>
                  </div>
                )}
              </div>
            </div>
          )}
          </ul>
          </div>
        </div>
      </BasePage>
    );
  }
};
