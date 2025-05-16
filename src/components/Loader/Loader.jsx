import { GridLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <GridLoader color="#dead59" />
    </div>
  );
};
export default Loader;
