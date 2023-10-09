let resultObj = {};
function flatTheObj(obj, parent) {
  // Write your code here
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      flatTheObj(obj[key], parent + "_" + key);
    } else {
      resultObj[parent + "_" + key] = obj[key];
    }
  }
  return resultObj;
}

let user = {
  name: "Karan",
  address: {
    personal: "Delhi",
    area: "CivilLines",
  },
  office: {
    state: "Mumbai",
    area: { landmark: "Bandra" },
  },
};

let parent = "user";
console.log(flatTheObj(user, parent));

console.log(resultObj);
