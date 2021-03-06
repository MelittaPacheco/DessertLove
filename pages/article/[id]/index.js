import Link from "next/link";
import { useRouter } from "next/router";

const article = ({ article }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1 class="font-bold text-xl mt-5 mb-5">{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <a
        class="  text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        href="/"
      >
        {" "}
        BACK
      </a>
    </div>
  );
};

// export const getStaticProps = async (context) => {
//   const res = await fetch(`${server}/api/articles/${context.params.id}`);

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`${server}/api/articles`);
//   const articles = await res.json();

//   const paths = articles.map((article) => {
//     return {
//       params: {
//         id: `${article.id}`,
//       },
//     };
//   });

//   return { paths, fallback: false };
// };

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const articles = await res.json();

  const paths = articles.map((article) => {
    return {
      params: {
        id: `${article.id}`,
      },
    };
  });

  return { paths, fallback: false };
};

export default article;
