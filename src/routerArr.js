import Counter from './usecase/counter/';
import Todo from './usecase/todo/';
import Editor from './usecase/editor/';

const currentUrl = '/';


const routerArr = [
  {
    path: currentUrl,
    title: 'App: Editor',
    component: Editor,
    exact: true
  },
  {
    path: currentUrl + 'todo',
    title: 'App: Todo',
    component: Todo
  },
  {
    path: currentUrl + 'counter',
    title: 'App: Counter',
    component: Counter
  },
];

export default routerArr;
