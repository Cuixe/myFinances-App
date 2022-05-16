import * as ACTION_TYPE from "../actions/actionTypes";
export default function courseReducer(state = [], action) {
  switch (action.type) {
    case ACTION_TYPE.CREATE_COURSE:
      return [...state, { ...action.course }];
    default:
      return state;
  }
}

/*
const course = [
    { id:1, title:"title 1"},
    { id:2, title:"title 2"},
]

courses.find(c => c.id == 2);

const courses = {
    1: { id:1, title:"title 1"},
    2: { id:2, title:"title 2"},
}
couses[1]

Review Normalizing State Shape

*/
