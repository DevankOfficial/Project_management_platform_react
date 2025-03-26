import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import BasePage from '../Base';

import { ProfileItem } from './ProfList.jsx';
import { manages } from './info';

import './css/team.css';

const p_name = "Alpha"

export default class ManageTeam extends Component {
  constructor(props) {
    super(props);
    this.state = { invited:manages.invited, requested:manages.requested, provisional:manages.provisional, final:manages.final };
    this.onDragEnd = this.onDragEnd.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    document.title = "DragonEyeX";
  }

  onDragStart = (evt) => {
    let element = evt.currentTarget;
    element.classList.add('dragged');
    evt.dataTransfer.setData('text/plain', evt.currentTarget.id);
    evt.dataTransfer.effectAllowed = 'move';
  };

  onDragEnd = (evt) => {
    evt.currentTarget.classList.remove('dragged');
  };

  onDragEnter = (evt) => {
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.add('dragged-over');
    evt.dataTransfer.dropEffect = 'move';
  };

  onDragLeave = (evt) => {
    let currentTarget = evt.currentTarget;
    let newTarget = evt.relatedTarget;
    if (newTarget.parentNode === currentTarget || newTarget === currentTarget)
      return;
    evt.preventDefault();
    let element = evt.currentTarget;
    element.classList.remove('dragged-over');
  };

  onDragOver = (evt) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'move';
  };

  onDrop = (evt, targetList) => {
    evt.preventDefault();
    evt.currentTarget.classList.remove('dragged-over');
    let data = evt.dataTransfer.getData('text/plain');
    let item = this.findItem(data);
    if (item) {
      this.updateList(item, targetList);
    }
  };

  findItem = (id) => {
    const { invited, requested, provisional, final } = this.state;
    let lists = [invited, requested, provisional, final];
    for (let list of lists) {
      let item = list.find((i) => i.id === id);
      if (item) return item;
    }
    return null;
  };

  updateList = (item, targetList) => {
    const { invited, requested, provisional, final } = this.state;
    let lists = { invited, requested, provisional, final };
    for (let key in lists) {
      lists[key] = lists[key].filter((i) => i.id !== item.id);
    }
    lists[targetList].push(item);
    this.setState({
      invited: lists.invited,
      requested: lists.requested,
      provisional: lists.provisional,
      final: lists.final,
    });
  };

  handleUpdate = () => {
    console.log('Teams updated:', this.state);
  };

  renderList = (items = [{}]) => {
    console.log(items)
    if (items){
      items.map((item, key) => (
        <div
          className="card mb-2"
          key={key}
          id={item.id}
          draggable
          onDragStart={this.onDragStart}
          onDragEnd={this.onDragEnd}
        >
          <Card.Body>
            <ProfileItem name={item.name} profession={item.profession} img={item.img} 
                        location={item.location} wages={item.wages} times={item.times} exp={item.exp}/>
          </Card.Body>
        </div>
      ))
    }
  };

  render() {
    const { invited, requested, provisional, final } = this.state;

    return (
      <BasePage toggleHeader={true} toggleSidebar={true} toggleFooter={false}>
        <Container className="py-5">
          <h2>Manage Your Team</h2>
          <h3 className="text-muted mb-1">Project: {p_name}</h3>
          <Row>
            <Col>
              <h3>Not Selected</h3>
              <div
                className="droppable mb-4"
                onDragLeave={this.onDragLeave}
                onDragEnter={this.onDragEnter}
                onDragOver={this.onDragOver}
                onDrop={(e) => this.onDrop(e, 'invited')}
              >
                <Card>
                  <Card.Header>Invited</Card.Header>
                  <Card.Body>{this.renderList(invited)}</Card.Body>
                </Card>
              </div>
              <div
                className="droppable"
                onDragLeave={this.onDragLeave} 
                onDragEnter={this.onDragEnter}
                onDragOver={this.onDragOver}
                onDrop={(e) => this.onDrop(e, 'requested')}
              >
                <Card>
                  <Card.Header>Requested</Card.Header>
                  <Card.Body>{this.renderList(requested)}</Card.Body>
                </Card>
              </div>
            </Col>

            <Col>
              <h3>Provisional Team</h3>
              <div
                className="droppable"
                onDragLeave={this.onDragLeave}
                onDragEnter={this.onDragEnter}
                onDragOver={this.onDragOver}
                onDrop={(e) => this.onDrop(e, 'provisional')}
              >
                <Card>
                  <Card.Body>{this.renderList(provisional)}</Card.Body>
                </Card>
              </div>
            </Col>

            <Col>
              <h3>Final Team</h3>
              <div
                className="droppable"
                onDragLeave={this.onDragLeave}
                onDragEnter={this.onDragEnter}
                onDragOver={this.onDragOver}
                onDrop={(e) => this.onDrop(e, 'final')}
              >
                <Card>
                  <Card.Body>{this.renderList(final)}</Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
          <Button variant="primary" onClick={this.handleUpdate} className="mt-4">
            Update Teams
          </Button>
        </Container>
      </BasePage>
    );
  }
}