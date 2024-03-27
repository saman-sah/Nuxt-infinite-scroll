import users from '../db/users.json'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  console.log('query', query);
  const { limit, skip } = query
  const getUsers = async (limit = 1, skip = 1) => {
    try {
      const response = await $fetch(`https://dummyjson.com/users?limit=${limit}+&skip=${skip}`)

      return response;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }





  const users = await getUsers();
  return {
    users
  }
});
