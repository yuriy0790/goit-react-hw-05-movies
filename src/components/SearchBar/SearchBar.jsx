import Notiflix from 'notiflix';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import styles from './SearchBar.module.css';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      Notiflix.Notify.failure(`Enter search query`);
      return;
    }
    setSearchParams({ query: query });
    reset();
  };

  const reset = () => {
    setQuery('');
  };

  return (
    <div className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          onChange={handleChange}
          value={query}
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </form>
    </div>
  );
}

// class SearchBarOld extends Component {
//   state = {
//     query: '',
//   };

//   handleChange = event => {
//     this.setState({ query: event.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     if (this.state.query.trim() === '') {
//       Notiflix.Notify.failure(`Enter search query`);
//       return;
//     }

//     this.props.onSubmit(this.state.query);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({
//       query: '',
//     });
//   };

//   render() {
//     return (
//       <header className={styles.Searchbar}>
//         <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
//           <button type="submit" className={styles.SearchFormButton}>
//             <span className={styles.SearchFormButtonLabel}>Search</span>
//           </button>

//           <input
//             onChange={this.handleChange}
//             value={this.state.query}
//             className={styles.SearchFormInput}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }
