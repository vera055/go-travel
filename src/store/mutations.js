/*
* @Author: Vera
* @Date:   2018-12-05 09:43:28
* @Last Modified by:   Vera
* @Last Modified time: 2018-12-05 12:10:18
*/
export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
