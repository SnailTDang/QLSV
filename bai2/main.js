//Global
var dssv = new DanhSachSinhVien();

window.onload = getLocalStorage;

//Hàm rút gọn cú pháp getElementById
function getELE(id) {
  //id là kiểu string
  return document.getElementById(id);
}

function themSinhVien() {
  //Lấy dữ liệu từ form
  var sv = getSinhVien();
  // console.log(sv);

  dssv.themSV(sv);
  // console.log(dssv.mangSV);
  dssv.hienThiTable(dssv.mangSV);
  setLocalStorage(dssv.mangSV);
}

function setLocalStorage(mangSV) {
  localStorage.setItem("DSSV", JSON.stringify(mangSV));
}

function getLocalStorage() {
  if (localStorage.getItem("DSSV")) {
    dssv.mangSV = JSON.parse(localStorage.getItem("DSSV"));
    dssv.hienThiTable(dssv.mangSV);
  }
}

function xoaSinhVien(ma) {
  var mangSV = dssv.xoaSV(ma);
  dssv.hienThiTable(mangSV);
  setLocalStorage(mangSV);
}

function xemSinhVien(ma) {
  var sv = dssv.xemSV(ma);
  getInforSV(
    sv.maSV,
    sv.tenSV,
    sv.email,
    sv.matKhau,
    sv.ngaySinh,
    sv.khoaHoc,
    sv.toan,
    sv.ly,
    sv.hoa
  );
  getELE("txtMaSV").disabled = true;
  // console.log(sv);
}

function capNhatSV() {
  var sv = getSinhVien();
  var mangSV = dssv.capNhatSV(sv);
  setLocalStorage(mangSV);
  dssv.hienThiTable(mangSV);
  console.log(sv, mangSV);
}

function resetInput() {
  getInforSV("", "", "", "", "", "Chọn khóa học", "", "", "");
  getELE("txtMaSV").disabled = false;
}

function getSinhVien() {
  var maSV = document.getElementById("txtMaSV").value;
  var tenSV = getELE("txtTenSV").value;
  var email = getELE("txtEmail").value;
  var matKhau = getELE("txtPass").value;
  var ngaySinh = getELE("txtNgaySinh").value;
  var khoaHoc = getELE("khSV").value;
  var toan = Number(getELE("txtDiemToan").value);
  var ly = Number(getELE("txtDiemLy").value);
  var hoa = Number(getELE("txtDiemHoa").value);

  //tạo thể hiện của lớp SinhVien
  var sv = new SinhVien(
    maSV,
    tenSV,
    email,
    matKhau,
    ngaySinh,
    khoaHoc,
    toan,
    ly,
    hoa
  );
  sv.tinhDTB();
  sv.tinhKetqua();
  return sv;
}

function getInforSV(
  maSV,
  tenSV,
  email,
  matKhau,
  ngaySinh,
  khoaHoc,
  toan,
  ly,
  hoa
) {
  getELE("txtMaSV").value = maSV;
  getELE("txtTenSV").value = tenSV;
  getELE("txtEmail").value = email;
  getELE("txtPass").value = matKhau;
  getELE("txtNgaySinh").value = ngaySinh;
  getELE("khSV").value = khoaHoc;
  getELE("txtDiemToan").value = toan;
  getELE("txtDiemLy").value = ly;
  getELE("txtDiemHoa").value = hoa;
}
