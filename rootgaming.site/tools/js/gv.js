/*<![CDATA[*/
const toTop = (() => {
  let button = document.getElementById("toTop");
  window.onscroll = () => {
    if (document.documentElement.scrollTop > 200){
      button.classList.add("is-visible")
    } else {
      button.classList.remove("is-visible")
    }
  }
  button.onclick = () => {
    window.scrollTo({
      top:0, behavior:"smooth"
    })
  }
})();/*]]>*/

function error() {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Error, Opcion no disponible, Trabajando en ello!',
  })
}

function de() {
  Swal.fire({
    icon: 'success',
    title: 'Tutoriales',
    text: 'Error, Opcion no disponible, Trabajando en ello!',
    html: '<div><hr><a class="btn btn-primary btn-lg" href="https://youtu.be/XYdOLf_iE7M">c++</a> <a class="btn btn-primary btn-lg"href="https://youtube.com/playlist?list=PLU8oAlHdN5BmpIQGDSHo5e1r4ZYWQ8m4B">C#</a> <a class="btn btn-primary btn-lg"href="https://youtube.com/playlist?list=PLAzlSdU-KYwVlDl-939Vv0_r5XhU7zgX1">Kotlin</a><br><br><a class="btn btn-primary btn-lg" href="https://youtube.com/playlist?list=PLNdFk2_brsRc57R6UaHy4zx_FHqx236G1">Swift</a></div>',
  })
}