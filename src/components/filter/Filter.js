import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { filterContact } from '../../redux/actions';

const Filter = () => {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch(filterContact);
  return (
    <input
      type="text"
      onChange={e => dispatch(filterContact(e.target.value))}
      value={filterValue}
      placeholder="Enter name "
    />
  );
};

export default Filter;
