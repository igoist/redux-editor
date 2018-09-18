import Counter from './usecase/counter/';
import Todo from './usecase/todo/';

const currentUrl = '/';


const routerArr = [
  {
    path: currentUrl,
    title: 'App: Todo',
    component: Todo,
    exact: true
  },
  {
    path: currentUrl + 'counter',
    title: 'App: Counter',
    component: Counter
  },
];

export default routerArr;
