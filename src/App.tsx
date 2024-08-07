
import { SignIn } from "@clerk/clerk-react"

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold">Hello World</h1>
      <div>
        <SignIn path="/sign-in"/>
        something here
      </div>
    </>
  )
}

export default App
