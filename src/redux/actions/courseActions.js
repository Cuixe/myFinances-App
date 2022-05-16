import * as ACTION_TYPE from "./actionTypes";

export function createCourse(course) {
  return { type: ACTION_TYPE.CREATE_COURSE, course };
}

