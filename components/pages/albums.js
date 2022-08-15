import React from 'react'

  const setSearchTerm = (val) => {
    alert(val);
  }

  export default function Albums() {
    const handleSubmit = async (event) => {
      event.preventDefault()
      const data = {
        name: event.target.first.value,
        image: event.target.last.value,
      }
      const JSONdata = JSON.stringify(data)
      const endpoint = 'http://uat.kk-lotto.com/b2b/api/brands'
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSONdata,
      }
      const response = await fetch(endpoint, options)
      const result = await response.json()
      console.log(result);
      alert(`Is this your full name: ${result.message}`)
    }
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        {/* // We pass the event to the handleSubmit() function on submit. */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="first">First Name</label>
          <input onKeyUp={(event) => { setSearchTerm(event.target.value); }} type="text" id="first" name="first" required />
    
          <label htmlFor="last">Last Name</label>
          <input type="text" id="last" name="last" required />
    
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }