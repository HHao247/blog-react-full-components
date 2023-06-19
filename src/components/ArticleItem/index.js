import './article-item.css';
import cls from 'classnames';
import ArticleItemDesc from './ArticleItemDesc';
import ArticleItemThumb from './ArticleItemThumb';
import ArticleItemTitle from './ArticleItemTitle';
import ArticleItemInfo from './ArticleItemInfo';
import ArticleItemCategories from './ArticleItemCategories';
import ArticleItemStats from './ArticleItemStats';


export default function ArticleItem({
  isStyleRow = false,
  isStyleCard = false,
  isShowDesc = false,
  isShowCategoies = false,
  isShowAvatar = true,
  queryStr = false,
  data = false,
}) {
  const { title, thumb, authorName, excerpt, slug, date, categoriesId } = data
  const classes = cls('article-item', {
    'style-card': isStyleCard,
    'style-row': isStyleRow,
  })
  return (
    <article className={classes}>
      <ArticleItemThumb thumb={thumb} />
      <div className="article-item__content">

        {isShowCategoies && <ArticleItemCategories categoriesId={categoriesId} />}
        {isShowCategoies && <ArticleItemStats />}

        <ArticleItemTitle title={title} slug={slug} queryStr={queryStr} />

        {isShowDesc && <ArticleItemDesc excerpt={excerpt} queryStr={queryStr} />}

        <ArticleItemInfo isShowAvatar={isShowAvatar} authorName={authorName} date={date} />
      </div>
    </article>

  )
}