import React, { useState } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

function CoursePage(props) {
  const [course, setCourse] = useState({ title: "" });

  const handleChange = (event) => {
    const newCourse = { ...course, title: event.target.value };
    setCourse(newCourse);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.actions.createCourse(course);
    console.log(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Course</h2>
      <h3>Add Course</h3>
      <input type="text" onChange={handleChange} value={course.title} />
      <input type="submit" value="Save" />
      {props.courses.map((course) => (
        <div key={course.title}>{course.title}</div>
      ))}
    </form>
  );
}

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
/*
const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(CoursePage);

los parentesis juntos significan que:
La primera funcion (connect) se ejecutar y regresará una función como resultado que se 
ejecutara recibiendo "CoursePage" como argumento
*/
