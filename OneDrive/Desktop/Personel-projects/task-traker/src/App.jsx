import { useState } from 'react'


import './App.css'


function toDateValue(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

function App() {

  const today = new Date()
  const [dates, setDates] = useState(() => toDateValue(new Date()))
  const [description, setDescription] = useState("");

  const dateOptions = Array.from({ length: 7 }, (_, offset) => {
    const optionDate = new Date(today)
    optionDate.setDate(today.getDate() + offset)

    return {
      value: toDateValue(optionDate),
      label: `${optionDate.getMonth() + 1}/${optionDate.getDate()}/${optionDate.getFullYear()}`
    }
  })

  const handleDescription = (event) =>{
    setDescription(event.target.value)
  }

  const handleDate = (event) => {
    setDates(event.target.value)
  }
return (
    <div className='table'>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Start </th>
            <th>End</th>
            <th>Task Description</th>
          </tr>
          <tr>
            <td>
              <form>
                <select value={dates} onChange={handleDate}>
                    {dateOptions.map(({ value, label }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
              </form>
            </td>
            <td>
              <form>
                <select >
                  <option value="00:00">00:00</option>
                  <option value="01:00">01:00</option>
                  <option value="02:00">02:00</option>
                  <option value="03:00">03:00</option>
                  <option value="04:00">04:00</option>
                  <option value="05:00">05:00</option>
                  <option value="06:00">06:00</option>
                  <option value="07:00">07:00</option>
                  <option value="08:00">08:00</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                  <option value="22:00">22:00</option>
                  <option value="23:00">23:00</option>

                </select>
              </form>
            </td>
            <td>
              <form>
                <select >
                  <option value="00:00">00:00</option>
                  <option value="01:00">01:00</option>
                  <option value="02:00">02:00</option>
                  <option value="03:00">03:00</option>
                  <option value="04:00">04:00</option>
                  <option value="05:00">05:00</option>
                  <option value="06:00">06:00</option>
                  <option value="07:00">07:00</option>
                  <option value="08:00">08:00</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                  <option value="19:00">19:00</option>
                  <option value="20:00">20:00</option>
                  <option value="21:00">21:00</option>
                  <option value="22:00">22:00</option>
                  <option value="23:00">23:00</option>
                </select>
              </form>
            </td>
            <td>
              <form>
                <textarea
                  value={description}
                  onChange={handleDescription}
                />
              </form>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
    
  )
}

export default App
