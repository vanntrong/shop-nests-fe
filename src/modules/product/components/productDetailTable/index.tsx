import React from "react";

const ProductDetailTable = () => {
  return (
    <table className="product-detail-table">
      <tbody>
        <tr>
          <td colSpan={2}>
            <span className="text-sm font-bold">THÔNG TIN CHI TIẾT SẢN PHẨM</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>
              <strong>Nhóm</strong>
            </span>
          </td>
          <td>
            <span>Tinh Chế</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>
              <strong>Loại</strong>
            </span>
          </td>
          <td>
            <span>Bạch yến</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>
              <strong>Khối lượng</strong>
            </span>
          </td>
          <td>
            <span>50gr (7-8 tổ/hộp)</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>
              <b>
                Bộ sản phẩm
                <br />
              </b>
            </span>
          </td>
          <td>
            <ul>
              <li>
                <span>50gr Bạch Yến Tinh Chế Vụn</span>
              </li>
              <li>
                <span>1 Hộp đường phèn</span>
              </li>
              <li>
                <span>1 Bộ hộp và túi giấy làm quà biếu sang trọng</span>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <span>
              <strong>Đặc trưng</strong>
            </span>
          </td>
          <td>
            <ul>
              <li>
                <span>Sạch lông, màu trắng ánh kim</span>
              </li>
              <li>
                <span>Được tạo hình bằng khuông hình cánh sen, không sợi.&nbsp;</span>
              </li>
              <li>
                <span>
                  Được làm từ phần sợi mảnh và ngắn ở phần bụng tổ kết hợp cùng phần chân tổ của tổ
                  yến
                </span>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <span>
              <strong>Mùi</strong>
            </span>
          </td>
          <td>
            <span>Tanh nhẹ đặc trưng (mùi biển)</span>
          </td>
        </tr>
        <tr>
          <td>
            <span>
              <strong>Bảo quản</strong>
            </span>
          </td>
          <td>
            <span>3 năm theo chỉ định bảo quản</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ProductDetailTable;
