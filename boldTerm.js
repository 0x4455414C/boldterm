module.exports = boldterm

function updateString(input, term) {
    return input.replace(new RegExp('(^|\)(' + term + ')(\|$)','ig'), '$1<strong>$2</strong>$3');
}