export default {
  get (key) {
    let data = JSON.parse(localStorage.getItem('statly') || {});
    return data[key] ? data[key] : {};
  },
  set (key, value) {
    let data = JSON.parse(localStorage.getItem('statly') || '{}')

    if (!data[key]) data[key] = {};

    data[key] = Object.assign(data[key], value);
    localStorage.setItem('statly', JSON.stringify(data));
  }
}