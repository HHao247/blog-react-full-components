
export function getQueryStr(name, locationSearch) {
  return new URLSearchParams(locationSearch).get(name)
}
export function abs(name) {
  return new URLSearchParams(window.location.search).get(name)
}

export function format(string) {
  let excerpt = string.excerpt.rendered.replace('<p>', '');
  excerpt = excerpt.replace('</p>', '');
  return excerpt;
}
export function mappingPostData(item) {
  let shortDesc = item.excerpt.rendered.replace('<p>', '');
  shortDesc = shortDesc.replace('</p>', '');
  let excerpt = item.excerpt.rendered.replace('<p>', '');
  excerpt = excerpt.replace('</p>', '');
  return {
    id: item.id,
    title: item.title.rendered,
    shortDesc,
    excerpt,
    thumb: item.featured_media_url,
    authorName: item.author_data.nickname,
    slug: item.slug,
    date: item.date,
    categoriesId: item.categories,
    detailContent: item.content.rendered
  };
}


export function formatString(string) {
  const arrDesc = string.split(' ');
  let shortStringDesc = '';
  if (arrDesc.length <= 20) {
    shortStringDesc = string;
  } else {
    const arrShortDesc = arrDesc.slice(0, 20);
    shortStringDesc = arrShortDesc.join(' ');
    shortStringDesc += ' ...';
  }
  return shortStringDesc
}

export function pubDate(str) {

  const string = str.substring(0, 10);
  const dayjs = require('dayjs');
  var relativeTime = require('dayjs/plugin/relativeTime')
  dayjs.extend(relativeTime)
  const date = dayjs(string).fromNow()
  return date
}

export function mappingMenuData(item) {
  return {
    id: item.ID,
    title: item.title,
    childItems: item.child_items ? item.child_items.map(mappingMenuData) : [],
  };
}

export function mappingCategories(item) {
  return {
    id: item.id,
    name: item.name,
    // childItems: item.child_items ? item.child_items.map(mappingMenuData) : [],
  };
}

export function renderMenus(menus) {
  return menus.map((item) => (
    <li key={item.id}>
      {item.title}
      {item.childItems.length > 0 && (
        <ul>
          {renderMenus(item.childItems)}
        </ul>
      )}
    </li>
  ))
}
export function renderCategories(categories, categoriesId) {

  const mapCategories = categories.reduce(
    (list, item) => ({ ...list, [item.id]: item }),
    {}
  );
  if (!mapCategories) {
    return <></>
  }
  return (
    categoriesId.map((categoriesId) => {
      return (
        <li key={categoriesId}>
          <a href="/" className="btn btn-category">
            {mapCategories[categoriesId].name}
          </a>
        </li>
      );
    })
  )
}
