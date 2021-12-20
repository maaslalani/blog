export function markdownToHtml(content) {
  const html = content
  .replace(/^# (.*$)/gim, '<h1>$1</h1>')
  .replace(/^## (.*$)/gim, '<h2>$1</h2>')
  .replace(/^### (.*$)/gim, '<h3>$1</h3>')
  .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
  .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
  .replace(/^###### (.*$)/gim, '<h6>$1</h6>')
  .replace(/^`(.*)`/gim, '<pre>$1</pre>')
  .replace(/^\_(.*)\_/gim, '<em>$1</em>')
  .replace(/^\*(.*)\*/gim, '<strong>$1</strong>')
  .replace(/^\* (.*$)/gim, '<li>$1</li>')
  .replace(/^(\w*\d*$)/gim, '<p>$1</p>')
  .trim();
  return html;
}
