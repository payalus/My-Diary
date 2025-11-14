const ulEl = document.getElementById("ul-el");
const jsPass = document.getElementById("js-pass");
const encrypted = CryptoJS.AES.encrypt(jsPass.value, 'secret key').toString();
const sotrepassword = localStorage.getItem('diarypassword');
function checkpassoward() {
  if (!sotrepassword) {
    localStorage.setItem('diarypassword', encrypted);
    window.location.href = 'diary.html'
  } else if (sotrepassword === encrypted) {
    window.location.href = 'diary.html'
  } else {
    alert('wrong password');
    ulEl.innerHTML = 'Password is incorrect'
    document.getElementById("js-pass").value = "";
  }
}







