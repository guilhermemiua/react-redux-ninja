export const deletePost = id => {
  // Action
  return {
    type: "DELETE_POST",
    id: id
  };
};
