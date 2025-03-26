import React, { Component } from 'react'
import { Row, Col, Form, Button, Card } from 'react-bootstrap';

import TITLE from "../../info/title";

import profile_avatar from "../images/profile_avatar.png";
import BasePage from '../Base';

import TaskList from './list';
import tasks from './info';
import BottomPagination from '../../component/sub/Pagination';


const Page_TITLE = TITLE + " - Assignments";
const username = "Vignesh Goswami";
const profileimage = profile_avatar;


export default class Assignments extends Component {
  componentDidMount() {
    document.title = Page_TITLE;
  }

  render() {
    return (
      <>
        <BasePage toggleHeader={true} toggleSidebar={true} toggleFooter={false}>
          <h2>Assignments</h2>
          <Col className="mb-3">
            <Card className='h-20'>
              <Card.Body>
                <Row className='mb-3'>
                  <Col md={6}>
                    <Form.Control
                      type="text"
                      placeholder="Search Projects"
                    />
                  </Col>
                  <Col md={4}></Col>
                  <Col md={2}>
                    <div className="d-grid gap-2">
                      <Button>Filter</Button>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <TaskList tasks={tasks} />
            <BottomPagination />
          </Col>

        </BasePage>
      </>
    )
  }
}