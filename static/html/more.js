module.exports = [
  '<div class="more">',
    '<div class="heading"></div>',
    '<div class="list"></div>',
    '<div class="quantity">',
      '<div class="equation">',
        '<span class="formula"></span>',
        ' = ',
        '<span class="symbol">$</span><span class="result"></span>',
      '</div>',
      '<div class="where">',
        '<span class="keyword">where</span>',
        '<span class="variable">n</span>',
        ' = ',
        '<input name="quantity" type="text" value="2">',
        '<span class="unit">developers</span>',
      '</div>',
      '<div class="slide"></div>',
    '</div>',
    '<input class="buy button" type="button" value="buy">',
    '<div class="back">',
      '<a href="#">back</a>',
    '</div>',
  '</div>'
].join('\n');
