import React from 'react'

export const GuessForm = () => {
  const [guess, setGuess] = React.useState('')
  return (
    <form onSubmit={e => {
      e.preventDefault()
      if (guess.length < 5) {
        alert('There is a minimum of 5 characters')
        return
      }
      console.log(guess)
      setGuess('')
    }}>
      <label htmlFor='guess'>Enter guess:</label>
      <input type="text" id='guess' value={guess} onChange={e => {
        setGuess(e.target.value.toUpperCase())
      }}  minLength={5} required maxLength={5}/>
    </form>
  )
}
