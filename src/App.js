import Data from './com_data.json'
import { useState } from 'react';
import './styles.css'

function App() {
  const [query, setQuery] = useState('');

  return (
    <div className="main">
      <input placeholder='Search' onChange={event => setQuery(event.target.value)} />
      <div className='items'>
        {
          Data.filter(post => {
            if (query === '') {
              return post
            }
            else if (post.name.toLowerCase().includes(query.toLowerCase())) {
              return post
            }
            else if (post.about.toLowerCase().includes(query.toLowerCase())) {
              return post
            }

          }).map((post, index) => { 
            return (
              <div className="item" key={index}>
                <h3>{post.name}</h3>
                <p>{post.about}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
