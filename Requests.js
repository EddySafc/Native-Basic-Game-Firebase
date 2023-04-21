import axios from "axios";

export const getUsers = () => {
  return axios
    .get(`https://calm-gold-angelfish-wig.cyclic.app/api/users`)
    .then((result) => {
      return result.data["result"];
    });
};

export const postUser = (item) => {
  return axios.post(`https://calm-gold-angelfish-wig.cyclic.app/api/users`, {
    body: item,
  });
};

export const patchUserScore = (id, change_score) => {
  return axios.patch(
    `https://calm-gold-angelfish-wig.cyclic.app/api/users/${id}`,
    {
      inc_score: change_score,
    }
  );
};

export const getUserById = (Id) => {
  return axios
    .get(`https://calm-gold-angelfish-wig.cyclic.app/api/users/${Id}`)
    .then((result) => {
      return result.data;
    });
};

/*
export const getDailyToDos = () => {
  return axios
    .get(`https://calm-gold-angelfish-wig.cyclic.app/api/dailys`)
    .then((result) => {
      return result.data;
    });
};

export const deleteDailyToDo = (Id) => {
  return axios.delete(
    `https://calm-gold-angelfish-wig.cyclic.app/api/dailys/${Id}`
  );
};

export const postDailyToDo = (item, id) => {
  return axios.post(`https://calm-gold-angelfish-wig.cyclic.app/api/dailys`, {
    body: item,
    item_id: id,
  });
};

--------------------------------------------------------------------------------

export const getUserById = (Id) => {
  return axios
    .get(`http://192.168.1.25:9090/api/users/${Id}`)
    .then((result) => {
      return result.data;
    });
};


*/
