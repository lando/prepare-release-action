'use strict';

module.exports = data => {
  return new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long', day: 'numeric'}).format(new Date(data));
};
