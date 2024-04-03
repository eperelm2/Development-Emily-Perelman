import { useState } from "react";

function DropdownMenu() {
    console.log("i am here at least")
    const [selectedRating, setSelectedRating] = useState('');
  
    const setChange = (event) => {
      setSelectedRating(event.target.value);
    }
  
    return (
      <div className="rating-dropdown-menu">
  
          <select value={selectedRating} onChange={setChange}>
              <option value="">Select an option</option>
              <option value="option1">1 Star</option>
              <option value="option2">2 Star</option>
              <option value="option3">3 Star</option>
              <option value="option4">4 Star</option>
              <option value="option5">5 Star</option>
        </select>
  
        {selectedRating === 'option1' && (
          <div>
            {console.log("i hate amelia zug")}
          </div>
        )}
  
  
      </div>
    )
  }

  export default DropdownMenu