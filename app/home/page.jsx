import Image from 'next/image';

async function getFeed() {
    const response = await fetch('http://localhost:3000/api/feed', {});
    // console.log('response:', response);
    const data = await response.json();
    // console.log('data:', data, typeof data);
    // const recipes = JSON.parse(data);
    // console.log(recipes);
    const recipes = data.map((recipeObject, i) => {
        const thumbnail = recipeObject.thumbnail || 'https://picsum.photos/300/200';
        return (
            <article className='recipe' key={i}>
                <Image src={thumbnail} alt='recipe thumbnail' width={300} height={200} />
            </article>
        );
    });
    return recipes;
}

export default async function HomePage() {
    const articles = await getFeed();

    return (
        <main>
            <div>
                {articles}
            </div>
        </main>
    );
}
