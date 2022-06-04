import Link from "next/link";

const ArticleItem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <div class=" bg-red-200 hover:bg-red-300 p-5 max-w-sm rounded overflow-hidden shadow-sm hover:shadow-lg content-center mb-5">
        <a>
          <h3 class="font-bold text-red-900 text-xl hover:text-red-400 mb-2">
            {article.title.substring(0, 35)}
          </h3>
          <p class="text-black-700 text-base  mb-5">
            {article.body.substring(0, 90)}
          </p>
        </a>
      </div>
    </Link>
  );
};

export default ArticleItem;
