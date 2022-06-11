const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

const arrayTheater = [promiseTheaterIXX(),promiseTheaterVGC()];

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise((resolve,reject) => {
    if(emosi == null || emosi == ""){
      reject ("Emosi not found");
    } else{
      let totalEmosi = 0;
      // const promiseTheather = [promiseTheaterIXX,promiseTheaterVGC];
      promiseTheaterIXX()
      .then((hasilEmosi) => {
        hasilEmosi.forEach((theater) => {
          if (theater.hasil === emosi) {
            totalEmosi += 1;
          }
        });
      })
      .then(promiseTheaterVGC().then((hasilEmosi) => {
          hasilEmosi.forEach((theater) => {
            if (theater.hasil === emosi) {
              totalEmosi += 1;
            }
          });
          resolve(totalEmosi);
        })
      );
    }
  });

};

module.exports = {
  promiseOutput,
};
