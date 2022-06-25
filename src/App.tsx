import { gql, useQuery } from "@apollo/client"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title

      teacher {
        name
      }
    }
  }
`

function App() {
  const { data } = useQuery(GET_LESSONS_QUERY);

  console.log(data)

  return (
    <h1>
      Hello world
    </h1>
  )
}

export default App
