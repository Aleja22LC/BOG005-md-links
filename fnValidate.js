const axios = require('axios');

const validateHttp = (objectLinks) => {
  // console.log('esto es objectLinks', objectLinks);
  const validation = objectLinks.map((link) => {
		return axios.get(link.href)
      .then((response) => {
        link.status = response.status;
        link.ok = "Ok!";
        return link;
      })
      .catch((error) => {
        if (error.response) {
          link.status = error.response.status;
          link.ok = "Fail";
          return link;
        } else {
          link.status = "404 Server error";
          link.ok = "Fail";
          return link;
        }
      });
  });
  return Promise.all(validation)
		.then(res => res)
};

module.exports = {validateHttp};