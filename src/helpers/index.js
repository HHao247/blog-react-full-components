
export function getQueryStr(name) {
  return new URLSearchParams(window.location.search).get(name)
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

export function pubDate (str){
  
  const string = str.substring(0,10);
  const dayjs = require('dayjs');
  var relativeTime = require('dayjs/plugin/relativeTime')
  dayjs.extend(relativeTime)
  const date= dayjs(string).fromNow()
  return date
}

export function mappingMenuData(item) {
  return {
    id: item.ID,
    title: item.title,
    childItems: item.child_items ? item.child_items.map(mappingMenuData) : [],
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