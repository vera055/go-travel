/*
* @Author: Vera
* @Date:   2018-12-05 09:38:46
* @Last Modified by:   Vera
* @Last Modified time: 2018-12-05 12:10:05
*/
let defaultCity = '深圳'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
