import { useState, useEffect } from "react"
import { getTrends } from "components/services/filmApi"

 const Home = () => {
   const [trends, setTrends] = useState([])
    useEffect(() => {
        getTrends().then(setTrends)
    }, []);
    
    if (!trends) {
        return
    }

    return (
        <ul>
            {trends.map(({id, title}) => {
                return <li key={id}>{title}</li>
            })}
        </ul>
    )

}
export default Home