import React from "react";
import PropTypes from "prop-types";
import { Card, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './css/oprof.css';

class OprofileList extends React.Component {
  renderProfiles() {
    return this.props.profiles.map(({ image, name, description, action }) => (
      <ListGroup.Item key={name} className="d-flex align-items-center py-2 mb-2">
        <img src={image} alt="profile" className="rounded-circle me-3 profile-avatar" />
        <div className="flex-grow-1">
          <h6 className="mb-0">{name}</h6>
          <small className="text-muted">{description}</small>
        </div>
        <div className="ms-auto">
          {action.type === "internal" ? (
            <Button as={Link} to={action.route} variant="link" className="text-info">
              {action.label}
            </Button>
          ) : (
            <Button
              as="a"
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="link"
              className={`text-${action.color}`}
            >
              {action.label}
            </Button>
          )}
        </div>
      </ListGroup.Item>
    ));
  }

  render() {
    const { title, shadow } = this.props;
    return (
      <Card className={shadow ? "" : "shadow-none"}>
        <Card.Header>
          <h6 className="mb-0 text-capitalize">{title}</h6>
        </Card.Header>
        <Card.Body>
          <ListGroup variant="flush">{this.renderProfiles()}</ListGroup>
        </Card.Body>
      </Card>
    );
  }
}

// Setting default props for the OprofileList
OprofileList.defaultProps = {
  shadow: true,
};

// Typechecking props for the OprofileList
OprofileList.propTypes = {
  title: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
  shadow: PropTypes.bool,
};

export default OprofileList;
