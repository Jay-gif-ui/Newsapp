import { useState } from 'react';
import Navbar from './Components/Navbar';
import Newsboard from './Components/Newsboard';


function App() {
  const [category, setcategory] = useState("general");
  return (
    <div>
      <Navbar setcategory={setcategory} />
      <Newsboard category={category} />


    </div>
  );
}

export default App;
