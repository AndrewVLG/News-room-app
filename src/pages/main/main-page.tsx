
import { FunctionComponent } from 'react';
import { useLoaderData, useLocation } from 'react-router';
const MainPage: FunctionComponent = () => {
    const { pathname } = useLocation();
    const path = pathname.match(/\w/g)?.join('')
    //fetch(`https://newsapi.org/v2/top-headlines?country=de&category=${path}&apiKey=d25980c6b9494497a47ba65221d3c747`)
    //    .then(data => data.json())
    //    .then(data => console.log(data))
    //const data = useLoaderData();
    //console.log(data);
    return (
        <div>
            <h1>All News</h1>
        </div>
    )
}
export default MainPage;