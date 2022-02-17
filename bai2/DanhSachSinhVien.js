/**
 * Lưu trữ nhiều đối tượng sinh viên
 * => thêm, xóa, sửa, tìm kiếm
 *
 */

function DanhSachSinhVien() {
  //thuộc tính
  this.mangSV = [];

  //phương thức
  this.themSV = function (sv) {
    var viTri = this.timViTri(sv.maSV);
    if (viTri == -1) {
      this.mangSV.push(sv);
      console.log(sv.maSV, viTri);
    } else {
      getELE("spanMaSV").innerText = "*Mã sinh viên không được trùng";
    }
  };
  this.hienThiTable = function (mangSV) {
    var tbodySV = getELE("tbodySinhVien");
    var content = "";
    mangSV.map((e) => {
      content += `<tr>
      <td>${e.maSV}</td>
      <td>${e.tenSV}</td>
      <td>${e.email}</td>
      <td>${e.ngaySinh}</td>
      <td>${e.khoaHoc}</td>
      <td>${e.dtb}</td>
      <td>${e.ketqua}</td>
      <td>
        <button class="btn btn-danger" onclick="xoaSinhVien('${e.maSV}')">Xóa</button>
        <button class="btn btn-info" onclick="xemSinhVien('${e.maSV}')">Xem</button>
      </td>
  </tr> `;
    });
    tbodySV.innerHTML = content;
  };
  this.timViTri = function (ma) {
    var viTri = -1;
    this.mangSV.map((sv, index) => {
      if (sv.maSV == ma) {
        viTri = index;
      }
    });
    return viTri;
  };
  this.xoaSV = function (ma) {
    var viTri = this.timViTri(ma);
    if (viTri != -1) {
      this.mangSV.splice(viTri, 1);
    } else {
      alert("Không tìm thấy sinh viên");
    }
    return this.mangSV;
  };
  this.xemSV = function (ma) {
    var viTri = this.timViTri(ma);
    var sv = {};
    this.mangSV.forEach((e, index) => {
      if (viTri == index) {
        sv = e;
      }
    });
    return sv;
  };
  this.capNhatSV = function (sv) {
    this.mangSV.forEach((e, index) => {
      if (e.maSV == sv.maSV) {
        this.mangSV[index] = sv;
      }
    });
    return this.mangSV;
  };
}
