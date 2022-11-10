// import Image from 'next/image';
import './feed.css';

async function getFeed() {
    const response = await fetch('http://localhost:3000/api/feed', {});
    // console.log('response:', response);
    const data = await response.json();
    // console.log('data:', data, typeof data);
    // const recipes = JSON.parse(data);
    // console.log(recipes);
    const recipes = data.map((recipeObject, i) => {
        const thumbnail = recipeObject.thumbnail || `https://picsum.photos/seed/${i + 1}/300/200`;
        const title = recipeObject.title;
        const description = recipeObject.description;
        return (
            <article className='recipe' key={i}>
                <div className='img' style={{ backgroundImage: `url("${thumbnail}")` }}></div>
                <div className='text'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </article>
        );
    });
    return recipes;
}

export default async function HomePage() {
    const articles = await getFeed();

    return (
        <main>
            <div className='article-container'>
                {articles}
            </div>
        </main>
    );
}
