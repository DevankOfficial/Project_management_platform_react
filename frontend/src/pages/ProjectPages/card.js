import { Card, Row, Col } from 'react-bootstrap';
import profile_avatar from "../images/logo.png";

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import StarHalfOutlinedIcon from '@mui/icons-material/StarHalfOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import projImage from '../images/image01.jpg'

const ProjCard = ({ p }) => {
  return (
    <Row>
      <Col className="mt-3">
        <Card className="h-100">
          <Row noGutters className="flex-row h-100">
            <Col md={4}>
              <Card.Img
                variant="top"
                src={p.img}
                alt="Card image cap"
              />
            </Col>
            <Col md={8} className="d-flex flex-column">
              <Card.Body className="flex-grow-1">
                <Card.Title>
                  <h1>{p.name}</h1>
                </Card.Title>
                <Card.Text>
                  {p.desc}
                </Card.Text>
                <p>
                  Objectives:
                  {p.objs.map((obj, index) => (
                    <p key={index}>{obj}</p>
                  ))}
                </p>
              </Card.Body>
              <Card.Footer className="mt-auto">
                <small className="text-muted">Last updated {p.last} mins ago</small>
              </Card.Footer>
            </Col>
          </Row>
          {/* <Row>
            <div className="project-icons">
              <div onClick={() => this.handleProjectSelect(p, 'edit')}><EditOutlinedIcon /></div>
              <div onClick={() => this.handleProjectSelect(p, 'progress')}><StarHalfOutlinedIcon /></div>
              <div onClick={() => this.handleProjectSelect(p, 'task')}><AssignmentOutlinedIcon /></div>
              <div onClick={() => this.handleProjectSelect(p, 'notification')}><NotificationsNoneOutlinedIcon /></div>
            </div>
          </Row> */}
        </Card>
        {/* {selectedProject && (selectedProject.status==='active') && (
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
          )} */}
      </Col>
    </Row>
  )
}
export default ProjCard;