import React, { Component } from 'react';
import { Row, Col, Card, Form, Button, InputGroup, FormControl, Table, Pagination, DropdownButton, Dropdown, Modal } from 'react-bootstrap';

// 
import API from "../Utils/utils";
import BasePage from "../Base";

import './trans.css';

import curved14 from "../images/curved14.jpg";
import mastercard from "../images/mastercard.png";


const Page_TITLE = 'DragonEyeX' + ' - Transactions';

// Sample data
const transactionData = [];
for (let i = 1; i <= 1000; i++) {
  transactionData.push({
    transactionID: i,
    company: `Company ${i}`,
    date: `2024-01-${(i % 30) + 1}`,
    amount: (Math.random() * 1000 * (i % 2 === 0 ? 1 : -1)).toFixed(2),
    remarks: `Remark ${i}`,
    profileImage: 'https://via.placeholder.com/50'
  });
}

export default class Transactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      todoList: [],
      modal: false,
      activeItem: {},
      user_data: {
        username: 'Vignesh',
        profileimage: ''
      },
      isLoading: false,
      error: null,
      transactions: transactionData,
      search: '',
      companyFilter: '',
      sortColumn: 'transactionID',
      sortDirection: 'asc',
      currentPage: 1,
      itemsPerPage: 10,
      showModal: false,
      startDate: '',
      endDate: ''
    };
  }

  componentDidMount() {
    document.title = Page_TITLE;
  }

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value, currentPage: 1 });
  }

  handleCompanyFilterChange = (e) => {
    this.setState({ companyFilter: e.target.value, currentPage: 1 });
  }

  handleSort = (column) => {
    const { sortColumn, sortDirection } = this.state;
    const newDirection = sortColumn === column && sortDirection === 'asc' ? 'desc' : 'asc';
    this.setState({ sortColumn: column, sortDirection: newDirection });
  }

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  }

  handleItemsPerPageChange = (itemsPerPage) => {
    this.setState({ itemsPerPage: itemsPerPage === 'All' ? this.state.transactions.length : itemsPerPage, currentPage: 1 });
  }

  handleShowModal = () => {
    this.setState({ showModal: true });
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  handleFilterByDate = () => {
    const { startDate, endDate, transactions } = this.state;
    const filteredTransactions = transactions.filter(transaction => {
      const transactionDate = new Date(transaction.date);
      return transactionDate >= new Date(startDate) && transactionDate <= new Date(endDate);
    });
    this.setState({ transactions: filteredTransactions, showModal: false, currentPage: 1 });
  }

  handleDateChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  renderTableRows = () => {
    const { transactions, search, companyFilter, sortColumn, sortDirection, currentPage, itemsPerPage } = this.state;

    // Filter transactions based on search input and company filter
    const filteredTransactions = transactions.filter(transaction =>
      (transaction.company.toLowerCase().includes(companyFilter.toLowerCase()) || companyFilter === '') &&
      (transaction.company.toLowerCase().includes(search.toLowerCase()) ||
        transaction.date.toLowerCase().includes(search.toLowerCase()) ||
        transaction.amount.toLowerCase().includes(search.toLowerCase()) ||
        transaction.remarks.toLowerCase().includes(search.toLowerCase()))
    );

    // Sort transactions based on sortColumn and sortDirection
    const sortedTransactions = filteredTransactions.sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (a[sortColumn] > b[sortColumn]) {
        return sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });

    // Get current transactions based on pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentTransactions = sortedTransactions.slice(startIndex, startIndex + itemsPerPage);

    return currentTransactions.map((transaction, index) => (
      <tr key={index}>
        <td style={{ width: '10%' }}>{transaction.transactionID}</td>
        <td>{transaction.company}</td>
        <td>{transaction.date}</td>
        <td>
          <div className={`d-flex align-items-center text-${transaction.amount >= 0 ? 'success' : 'danger'}  text-sm font-weight-bold`}>
            {transaction.amount >= 0 ? '+' : '-'} $ {Math.abs(transaction.amount)}
          </div>
        </td>
        <td>{transaction.remarks}</td>
      </tr>
    ));
  }

  renderPagination = () => {
    const { transactions, search, companyFilter, itemsPerPage, currentPage } = this.state;

    // Filter transactions based on search input and company filter
    const filteredTransactions = transactions.filter(transaction =>
      (transaction.company.toLowerCase().includes(companyFilter.toLowerCase()) || companyFilter === '') &&
      (transaction.company.toLowerCase().includes(search.toLowerCase()) ||
        transaction.date.toLowerCase().includes(search.toLowerCase()) ||
        transaction.amount.toLowerCase().includes(search.toLowerCase()) ||
        transaction.remarks.toLowerCase().includes(search.toLowerCase()))
    );

    const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

    let paginationItems = [];
    for (let number = 1; number <= totalPages; number++) {
      paginationItems.push(
        <Pagination.Item key={number} active={number === currentPage} onClick={() => this.handlePageChange(number)}>
          {number}
        </Pagination.Item>
      );
    }

    return (
      <Pagination className="mb-0">{paginationItems.length > 10 ? paginationItems.slice(0, 5).concat(<Pagination.Ellipsis key="ellipsis" />, paginationItems.slice(-5)) : paginationItems}</Pagination>
    );
  }

  renderTableFooter = () => {
    const { itemsPerPage } = this.state;
    const itemsPerPageOptions = ['All', 5, 10, 25, 50, 100];

    return (
      <div className="d-flex justify-content-between align-items-center">
        <DropdownButton
          id="dropdown-basic-button"
          title={`Items per page: ${itemsPerPage}`}
          onSelect={this.handleItemsPerPageChange}
        >
          {itemsPerPageOptions.map(option => (
            <Dropdown.Item key={option} eventKey={option}>{option}</Dropdown.Item>
          ))}
        </DropdownButton>
        {this.renderPagination()}
      </div>
    );
  }

  render() {
    const { user_data, search, companyFilter, sortColumn, sortDirection, showModal, startDate, endDate } = this.state;

    return (
      <BasePage toggleHeader={true} toggleSidebar={true}>
        <div className='transactions-container'>

          <Row className="mb-3">
            <Col lg={8} >
              <Row>
                <Col xl={7} className="mb-xl-0 mb-4">
                  <Card className="bg-transparent shadow-xl">
                    <div className="overflow-hidden position-relative border-radius-xl" style={{ backgroundImage: `url(${curved14})`, }}>
                      <span className="mask bg-gradient-dark"></span>
                      <Card.Body className="position-relative z-index-1 p-3">
                        <i className="fas fa-wifi text-white p-2"></i>
                        <h5 className="text-white mt-4 mb-5 pb-2">4562&nbsp;&nbsp;&nbsp;1122&nbsp;&nbsp;&nbsp;4594&nbsp;&nbsp;&nbsp;7852</h5>
                        <div className="ms-auto d-flex">
                          <Col md={8} className="d-flex">
                            <div className="me-4">
                              <p className="text-white text-sm opacity-8 mb-0">Card Holder</p>
                              <h6 className="text-white mb-0">Vinayak Goswami</h6>
                            </div>
                            <div>
                              <p className="text-white text-sm opacity-8 mb-0">Expires</p>
                              <h6 className="text-white mb-0">11/24</h6>
                            </div>
                          </Col>
                          <Col md={4} className="d-flex align-items-end justify-content-end">
                            <img className="w-60 mt-2" src={mastercard} alt="logo" />
                          </Col>
                        </div>
                      </Card.Body>
                    </div>
                  </Card>
                </Col>
                <Col xl={5}>
                  <Row>
                    <Col md={6} className="mb-md-0 mb-4">
                      <Card className="d-flex align-items-center mb-3">
                        <Card.Header className="p-3 pt-2">
                          <div className="icon icon-lg icon-shape bg-gradient-success shadow text-center border-radius-lg">
                            <i className="fas fa-landmark opacity-10"></i>
                          </div>
                        </Card.Header>
                        <Card.Body className="pt-0 p-3 text-center">
                          <h6 className="text-center mb-0">Salary</h6>
                          <span className="text-xs">Belong Interactive</span>
                          <hr className="horizontal dark my-3" />
                          <h5 className="mb-0">$2000</h5>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col md={6} className="mb-md-0 mb-4">
                      <Card className="d-flex align-items-center mb-3">
                        <Card.Header className="p-3 pt-2">
                          <div className="icon icon-lg icon-shape bg-gradient-primary shadow text-center border-radius-lg">
                            <i className="fab fa-paypal opacity-10"></i>
                          </div>
                        </Card.Header>
                        <Card.Body className="pt-0 p-3 text-center">
                          <h6 className="text-center mb-0">Paypal</h6>
                          <span className="text-xs">Freelance Payment</span>
                          <hr className="horizontal dark my-3" />
                          <h5 className="mb-0">$455.00</h5>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>

          <Card>
            <Card.Body>
              <Row>
                <Col md={6}>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="basic-addon1"><i className="fas fa-search"></i></InputGroup.Text>
                    <FormControl
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon1"
                      value={search}
                      onChange={this.handleSearchChange}
                    />
                  </InputGroup>
                </Col>
                <Col md={3}>
                  <FormControl
                    placeholder="Filter by Company"
                    aria-label="Filter by Company"
                    aria-describedby="basic-addon2"
                    value={companyFilter}
                    onChange={this.handleCompanyFilterChange}
                  />
                </Col>
                <Col md={3} className="text-end">
                  <Button variant="primary" onClick={this.handleShowModal}>
                    Filter by Date
                  </Button>
                </Col>
              </Row>
              <Table responsive className="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 cursor-pointer" onClick={() => this.handleSort('transactionID')} style={{ width: '10%' }}>
                      Transaction ID {sortColumn === 'transactionID' && <i className={`fas fa-sort-${sortDirection === 'asc' ? 'up' : 'down'}`}></i>}
                    </th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 cursor-pointer" onClick={() => this.handleSort('company')}>
                      Company {sortColumn === 'company' && <i className={`fas fa-sort-${sortDirection === 'asc' ? 'up' : 'down'}`}></i>}
                    </th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 cursor-pointer" onClick={() => this.handleSort('date')}>
                      Date {sortColumn === 'date' && <i className={`fas fa-sort-${sortDirection === 'asc' ? 'up' : 'down'}`}></i>}
                    </th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 cursor-pointer" onClick={() => this.handleSort('amount')}>
                      Amount {sortColumn === 'amount' && <i className={`fas fa-sort-${sortDirection === 'asc' ? 'up' : 'down'}`}></i>}
                    </th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 cursor-pointer" onClick={() => this.handleSort('remarks')}>
                      Remarks {sortColumn === 'remarks' && <i className={`fas fa-sort-${sortDirection === 'asc' ? 'up' : 'down'}`}></i>}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderTableRows()}
                </tbody>
              </Table>
            </Card.Body>
            <Card.Footer>
              {this.renderTableFooter()}
            </Card.Footer>
          </Card>
        </div>


        <Modal show={showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Filter by Date</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="startDate">
                <Form.Label>Start Date</Form.Label>
                <Form.Control type="date" name="startDate" value={startDate} onChange={this.handleDateChange} />
              </Form.Group>
              <Form.Group controlId="endDate">
                <Form.Label>End Date</Form.Label>
                <Form.Control type="date" name="endDate" value={endDate} onChange={this.handleDateChange} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleFilterByDate}>
              Apply Filter
            </Button>
          </Modal.Footer>
        </Modal>
      </BasePage>
    );
  }
}