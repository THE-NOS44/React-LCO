import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"

function FeedbackForm() {

  const [text, setText] = useState('')
  
  const handleTextChange = (e) => {
      setText(e.target.value)
  }

  return (
    <Card>
      <form>
          <h2>How would you rate your service with us ?</h2>
          {/* todo - Add rating select component */}

          <div className="input-group">
              <input type="text" placeholder="Write a review" />
              <Button type='submit' version='primary'>Send</Button>
          </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
