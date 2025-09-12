// Real-world Challenges

const state = { user: { profile: { name: "Om" } } };

const updated = {
  ...state,
  user: {
    ...state.user,
    profile: {
      ...state.user.profile,
      name: "Om Kumar"
    }
  }
};
console.log(updated);
